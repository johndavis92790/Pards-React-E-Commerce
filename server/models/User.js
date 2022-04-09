const { Schema, model } = require("mongoose");

//user schema
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
});

const User = model("User", userSchema);

module.exports = User;
