const express = require("express");
const app = express();
const mongoose = require("mongoose");
const registerValidate = require("./validator");
app.use(express.json());
const cors = require("cors");
const { Link } = require("react-router-dom");
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

require("./Schema");

const User = mongoose.model("UserInfo");

// app.get("/", async (req, res) => {
//   return res.status(200).json({ message: "hello suman here" });
// });

app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" }); // Handle error case
  }
});

//username,password or email required

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
    // Check if the username and password match a user in the database
    const user = await User.findOne({ username: username, password: password });

    if (user) {
      // User credentials are valid
      res.json({ success: true });
      // return res.redirect("/component")
    } else {
      // User credentials are invalid
      res.json({ success: false });
    }
  } catch (error) {
    console.log("Error occurred during login:", error);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});


app.listen(3001, () => {
  console.log("Server Started");
});
