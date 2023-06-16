import React from "react";
import { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import MyComponent from "./demo";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


export default function Login(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault()
    // Make a POST request to the login endpoint
    axios
      .post("http://localhost:3001/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        // Check the response from the server
        if (response.data.success) {
          // User login successful
          console.log("Login successful");
          navigate('/component');
        } else {
          // User login failed
          console.log("Invalid username or password");
          setErrorMessage(
            "Invalid username or Password"
          );
        }
      })
      .catch((error) => {
        console.log("Error occurred during login:", error);
      });
  };
  

  return (
    <div className="HomePages">
      <div className="form-group">
        <form>
          <div className="input-container">
            <label style={{ color: "Black" }}>Username </label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="UserName"
            />
          </div>
          <div className="input-container">
            <label style={{ color: "Black" }}>Password </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div className="error-message">
            {errorMessage && (
              <span style={{ color: "Red" }}>{errorMessage}</span>
            )}
          </div>
          <button
            className="button-container"
            type="submit"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
        <br />
        <button onClick={() => props.onFormSwitch("Register")}>Sign Up</button>
      </div>
    </div>
  );
}
