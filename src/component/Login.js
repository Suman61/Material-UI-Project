import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, InputAdornment } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from '@mui/material/IconButton';

export function Login(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const [visible, setVisible] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.success) {
          console.log("Login successful");
          localStorage.setItem("login", true);
          navigate("/component");
        } else {
          console.log("Invalid username or password");
          setErrorMessage("Invalid username or Password");
        }
      })
      .catch((error) => {
        console.log("Error occurred during login:", error);
      });
  };

  return (
    <div className="Login">
      <div className="form-group">
        <form>
          <div className="input-container">
            <label style={{ color: "black" }}>Username </label>
            <input
              style={{
                border: "2px solid gray",
                borderRadius: "4px",
                margin: "8px 0",
                width: "85%",
                padding: "12px 20px",
              }}
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="UserName"
            />
          </div>
          <div className="input-container">
            <label style={{ color: "black" , position: "relative"}}>Password </label>
            <input
              style={{
                border: "2px solid gray ",
                borderRadius: "4px",
                margin: "8px 0",
                width: "85%",
                padding: "12px 20px",
              }}
              type={visible ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <span
            style= {{color: "gray", position: "relative", top:"-40px", left:"135px"}}
            onClick={() => setVisible(!visible)}>
              {visible ? <Visibility /> : <VisibilityOff />}
            </span>
          </div>
          <div className="error-message">
            {errorMessage && (
              <span style={{ color: "Red" }}>{errorMessage}</span>
            )}
          </div>
        </form>
        <div className="d-flex justify-content-center">
        <Button
          onClick={handleLogin}
          sx={{
            color: "aliceblue",
            backgroundColor: "rgb(52, 192, 243)",
            "&: hover": { backgroundColor: "rgb(52, 192, 243)" },
          }}
        >
          Sign In
        </Button>
        &nbsp; 
        <Button
          onClick={() => navigate("/signup")}
          sx={{
            color: "aliceblue",
            backgroundColor: "rgb(52, 192, 243)",
            "&: hover": { backgroundColor: "rgb(52, 192, 243)" },
          }}
        >
          Sign Up
        </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
