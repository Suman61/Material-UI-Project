const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  username: String,
  primaryText: String,
  secondaryText: String,
});

module.exports = mongoose.model("Todo", TodoSchema, "Todo");
