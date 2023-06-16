const mongoose = require("mongoose");

const UserDetailIsSchema = new mongoose.Schema(
  {
    username: {type:String,required:true},
    password: {type:String,required:true},
    confirmpassword: {type:String,required:true},
    email:{type:String,required:true}
  },
  {
    collection: "UserInfo",
  }
);

mongoose.model("UserInfo", UserDetailIsSchema,"UserInfo");
