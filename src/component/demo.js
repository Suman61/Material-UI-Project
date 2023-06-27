import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import { Button, ListItemButton } from "@mui/material";
import { useState } from "react";
import { MessageSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const MyComponent = () => {

  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState();
  const [errorMessage, setErrorMessage] = useState("");

  const handleClick = () => {
    setIsClicked(true);
  };

  const [isPrimaryEditing, setIsPrimaryEditing] = useState(false);
  const [isSecondaryEditing, setIsSecondaryEditing] = useState(false);
  const [primaryText, setPrimaryText] = useState("Time");
  const [secondaryText, setSecondaryText] = useState("Name");

  const handlePrimaryClick = (event) => {
    event.stopPropagation();
    setIsPrimaryEditing(true);
  };

  const handleSecondaryClick = (event) => {
    event.stopPropagation();
    setIsSecondaryEditing(true);
  };

  const handlePrimaryBlur = (event) => {
    event.stopPropagation();
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
    localStorage.removeItem('login');
    console.log("Logout Button Prssed!");
    window.location.href = "./Login"
  }
  const submitTodo = async (event) => {
    event.preventDefault();
    console.log("Function call Successfully on ToDO ");
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
    <div className="topnav">
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
          sx ={{ alignItems:"flex-start"}}
        >
          <ListItemButton 
          disablePadding
          onClick={handleClick}
          sx={{ width:"40%",display: "flex", paddingTop: "5%", textAlign:"center"}}
          >
            {isPrimaryEditing ? (
              <input
                type="time"
                value={primaryText}
                onChange={handlePrimaryChange}
                onBlur={handlePrimaryBlur}
                style={{fontSize: "20px"}}
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
                style={{width:"40%",fontSize: "20px", border: "2px solid gray", alignItems:"center", textAlign:"center"}}
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
      <div className="d-flex justify-content-center">
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
      </Button>&nbsp;
      <Button 
      sx={{backgroundColor: "Black", color: "white", "&: hover": {backgroundColor: "Black"} }}
      onClick={()=> navigate("/check")}
      >
      check
      </Button>
      </div>
    </div>
    </div>
  );
};

export default MyComponent;