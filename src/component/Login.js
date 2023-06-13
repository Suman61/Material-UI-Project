import React from "react";
import { useState } from "react";
import { Route, Router } from "react-router-dom";
import MyComponent from "./demo";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";

export default function Login(props) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username + " " + password);
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
          <button
            className="button-container"
            type="submit"
            onClick={handleSubmit}
          >
            Login
          </button>
        </form>
        <br />
        <button onClick={() => props.onFormSwitch("register")}>Sign Up</button>
      </div>
    </div>
  );
}
