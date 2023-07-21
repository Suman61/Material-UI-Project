const express = require("express");
const app = express();
const Todo = require("./model/TodoSchema");
const User = require("./model/RegistrationSchema");
const mongoose = require("mongoose");
const registerValidate = require("./middleware/validator");
app.use(express.json());
const cors = require("cors");
const BASE_URL = process.env.BASE_URL;

app.use(cors());
const mongoUrl =
  "mongodb+srv://return0:12345@cluster0.fpghiok.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

app.get("/users", async (req, res) => {   
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" }); 
  }
});

app.post("/register", registerValidate, async (req, res) => {
  const { username, password, confirmpassword, email } = req.body;
  try {
    await User.create({
      username,
      password,
      confirmpassword,
      email,
    });
    res.status(200).send({ status: true, message: "registered successfully" });
  } catch (error) {
    res
      .status(500)
      .send({ status: false, message: "error while registering" + error });
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username, password: password });

    if (user) {
      res.json({ success: true });
    } else {
      res.json({ success: false });
    }
  } catch (error) {
    console.log("Error occurred during login:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

app.post("/todo", async (req, res) => {
  const { username, primaryText, secondaryText  } = req.body;
  try {
    await Todo.create({
      username,
      primaryText,
      secondaryText,
    });

    if(primaryText === "Time" || secondaryText === "Name"){
      res.status().send({ status: false, message: "Please fill the List"});

    }
    else  res.status(200).send({ status: true, message: "registered successfully"});

  } catch (error) {
    res
      .status(500)
      .send({ status: false, message: "error while registering" + error });
  }
});

app.get("/todo2", async (req, res) => {
  try {
    const users = await Todo.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
});

app.listen(4000, () => {
  console.log("Server Started");
});
