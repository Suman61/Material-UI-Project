import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function MyCheck() {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:4000/todo2")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="Table">
      <div className="topFetch"
      >{localStorage.getItem("username")}'s ToDo List</div>
      <table
      
        style={{
          border: "White",
          padding: "20px",
          borderCollapse: "separate",
          borderSpacing: "100px 15px",
          borderRadius: "0px 0px 15px 15px",
          background:"White",
        }}
      >
        <thead>
          <tr>
            <th>Time</th>
            <th>Work</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo._id}>
              <td>{todo.primaryText}</td>
              <td
              style={{color:"Gray"}}
              >{todo.secondaryText}</td>
            </tr>
          ))}
        </tbody>
      </table>&nbsp;
      <Button
      sx={{
        color: "aliceblue",
        backgroundColor: "rgb(52, 192, 243)",
        "&: hover": { backgroundColor: "rgb(52, 192, 243)" },
      }}
      onClick={() => navigate("/component")}>Back</Button>
    </div>
  );
}

export default MyCheck;
