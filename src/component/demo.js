import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Button, ListItemButton } from "@mui/material";
import { useState } from "react";

const MyComponent = () => {

  const [isClicked, setIsClicked] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    setIsClicked(true);
  };

  const [isPrimaryEditing, setIsPrimaryEditing] = useState(false);
  const [isSecondaryEditing, setIsSecondaryEditing] = useState(false);
  const [primaryText, setPrimaryText] = useState("Time");
  const [secondaryText, setSecondaryText] = useState("Name");

  const handlePrimaryClick = () => {
    setIsPrimaryEditing(true);
  };

  const handleSecondaryClick = () => {
    setIsSecondaryEditing(true);
  };

  const handlePrimaryBlur = () => {
    setIsPrimaryEditing(false);
  };

  const handleSecondaryBlur = () => {
    setIsSecondaryEditing(false);
  };

  const handlePrimaryChange = (event) => {
    setPrimaryText(event.target.value);
  };

  const handleSecondaryChange = (event) => {
    setSecondaryText(event.target.value);
  };
  
  const currentDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  
  const Logout = () => {
    // localStorage.setItem('login', false);
    localStorage.removeItem('login');
    console.log("Logout Button Prssed!");
    window.location.href = "./Login"
  }
  const submitTodo = async (event) => {
    event.preventDefault();
    console.log("Function call Successfully on ToDO Yeaah!!!");
    const message = await (
      await fetch("http://localhost:4000/todo", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          primaryText,
          secondaryText,
        }),
      })
    ).json();
    if (message.status) setErrorMessage(message.message);
    else setErrorMessage("Error Messages.");
  };

  return (
    <div className="App-header" id="absolute-canvas">
      <List
        sx={{
          width: "100%",
          maxWidth: 500,
          bgcolor: "background.paper",
          borderRadius: "1rem",
        }}
      >
        <div className="top">{currentDate}</div>
        <ListItem
          alignItems="flex-start"
        >
          <ListItemButton 
          onClick={handleClick}
          sx={{ display: "flex", justifyContent: "center", paddingTop: "5%"}}
          >
            {isPrimaryEditing ? (
              <input
                type="time"
                value={primaryText}
                onChange={handlePrimaryChange}
                onBlur={handlePrimaryBlur}
                style={{ fontSize: '15px' }}
              />
            ) : (
              <ListItemText
                primary={primaryText}
                onClick={handlePrimaryClick}
              />
            )}
            {isSecondaryEditing ? (
              <input
                type="text"
                value={secondaryText}
                onChange={handleSecondaryChange}
                onBlur={handleSecondaryBlur}
                style={{ fontSize: '20px' }}
              />
            ) : (
              <ListItemText
                secondary={secondaryText}
                onClick={handleSecondaryClick}
              />
            )}
            <Avatar alt="Remy Sharp" src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
          </ListItemButton>
        </ListItem>
      </List>
      <br />
      <Button 
      sx={{ color: "aliceblue", backgroundColor: "rgb(52, 192, 243)", "&: hover": {backgroundColor: "rgb(52, 192, 243)"}}}
      onClick={submitTodo}>
      Add
      </Button>&nbsp;
      <Button 
      sx={{backgroundColor: "red", color: "white", "&: hover": {backgroundColor: "red"} }}
      onClick={Logout}
      >
      Logout
      </Button>
    </div>
  );
};

export default MyComponent;