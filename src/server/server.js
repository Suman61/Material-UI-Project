const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
const mongoUrl =
  "mongodb+srv://suman1106:<12345>@cluster0.gdvte43.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

require("./userDetails");

const User = mongoose.model("UserInfo");

app.post("/regis", async (req, res) => {
  const [username, password, confirmpassword] = req.body;
  try {
    await User.create({
      username,
      password,
      confirmpassword,
    });
    res.send({ status: "OK" });
  } catch (error) {
    res.send({ Status: "error" });
  }
});

app.listen(3000, () => {
  console.log("Server Started");
});
