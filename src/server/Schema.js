const mongoose = require("mongoose");

const UserDetailIsSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
    confirmpassword: String,
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailIsSchema);
