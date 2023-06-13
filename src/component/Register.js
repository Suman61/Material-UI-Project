import React from "react";
import { useState } from "react";

function Register() {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmpassword, setConfirmPassword] = useState();

  const submitForm = (event) => {
    event.preventDefault();
    console.log(username + " " + password + " " + confirmpassword);
    fetch("http://localhost:3000/register", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        username,
        password,
        confirmpassword,
      }),
    });
  };

  return (
    <div className="RegisterPages">
      <div className="form-group-register">
        <form>
          <div className="input-container">
            <label style={{ color: "Black" }}>Username </label>
            <input
              type="text"
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Please type UserName"
            />
          </div>
          <div className="input-container">
            <label style={{ color: "Black" }}>Password </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Please type Password"
            />
          </div>
          <div className="input-container">
            <label style={{ color: "Black" }}>Confirm Password </label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Please type Confirm Password"
            />
          </div>
          <button
            className="button-container"
            type="submit"
            onClick={submitForm}
          >
            submit
          </button>
        </form>
        <br />
      </div>
    </div>
  );
}

export default Register;
