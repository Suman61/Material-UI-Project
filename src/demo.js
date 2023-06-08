import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Box, ListItemButton } from "@mui/material";
import { useState } from "react";
import {
  CenterFocusStrong,
  Check,
  CircleRounded,
  Delete,
  Edit,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
// import makeStyles from "@mui/material";

// const useStyles = makeStyles((theme) => ({
//   iconButton: {
//     borderRadius: "50%",
//   },
// }));

const MyComponent = () => {
  // const classes = useStyles();
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="App-header" id="absolute-canvas">
      <List
        sx={{
          width: "100%",
          maxWidth: 300,
          bgcolor: "background.paper",
          borderRadius: "1rem",
        }}
      >
        <div className="top">11 August, sunday</div>
        <ListItem
          alignItems="flex-start"
          sx={{
            "&:hover": {
              transform: "scale(1.5)",
              backgroundColor: "#fff",
              borderLeftStyle: "solid",
              borderLeftColor: "skyblue",
            },
          }}
        >
          <ListItemButton>
            <ListItemText
              primary={
                <React.Fragment>
                  <Typography
                    sx={{
                      display: "inline",
                    }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  {"9:45"}
                </React.Fragment>
              }
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.secondary"
                  ></Typography>
                  {"Teamwork"}
                </React.Fragment>
              }
            />
            <Avatar
              alt="Remy Sharp"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          alignItems="flex-start"
          sx={{
            "&:hover": {
              transform: "scale(1.5)",
              backgroundColor: "white",
              borderLeftStyle: "solid",
              borderLeftColor: "skyblue",
            },
          }}
        >
          <ListItemButton onClick={handleClick}>
            <ListItemText
              secondary="Meet Emma"
              primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  {"12:31"}
                </React.Fragment>
              }
            />
            {isClicked && (
              <Box display="flex" alignItems="center">
                <Box
                  sx={{
                    display: "block",
                    position: "absolute",
                    bottom: "100%",
                    top: "10%",
                    left: "50%",
                    width: "4em",
                    height: "4em",
                    margin: "-2em",
                  }}
                >
                  <IconButton>
                    <Check
                      sx={{
                        marginLeft: "400%",
                        color: "skyblue",
                      }}
                    />
                  </IconButton>
                  <IconButton>
                    <Edit sx={{ color: "skyblue", marginLeft: "100%" }} />
                  </IconButton>
                  <IconButton>
                    <Delete sx={{ marginLeft: "500%", color: "skyblue" }} />
                  </IconButton>
                </Box>
              </Box>
            )}
            <Avatar
              alt="Travis Howard"
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem
          alignItems="flex-start"
          sx={{
            "&:hover": {
              transform: "scale(1.5)",
              backgroundColor: "#fff",
              borderLeftStyle: "solid",
              borderLeftColor: "skyblue",
            },
          }}
        >
          <ListItemButton>
            <ListItemText
              style={{ textDecoration: "line-through" }}
              secondary="Have Meeting"
              primary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  ></Typography>
                  {"8:20"}
                </React.Fragment>
              }
            />
            <Avatar
              alt="Cindy Baker"
              src="https://images.pexels.com/photos/2726111/pexels-photo-2726111.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </ListItemButton>
        </ListItem>
      </List>
    </div>
  );
};

export default MyComponent;
