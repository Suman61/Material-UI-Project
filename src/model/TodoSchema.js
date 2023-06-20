const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  primaryText: String,
  secondaryText: String,
});

module.exports = mongoose.model("Todo", TodoSchema, "Todo");
