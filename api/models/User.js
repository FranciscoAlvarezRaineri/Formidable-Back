const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: String,
});

const User = mongoose.model("users", userSchema);
//                             | nombre del documento

module.exports = User;
