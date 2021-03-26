const mongoose = require("mongoose");
const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const chatSchema = new Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  room: {
    type: ObjectId,
    required: true,
    ref: "Room",
  },
  text: String,
  image: String,
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", chatSchema);
