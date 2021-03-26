const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  fullname: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 20,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    minlength: 8,
    maxlength: 20,
  },
  nickname: {
    type: String,
    minlength: 8,
    maxlength: 20,
    required: true,
    unique: true,
  },
  token: String,
  image: String,
});

module.exports = mongoose.model("User", userSchema);
