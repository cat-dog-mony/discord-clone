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
  channel: {
    type: ObjectId,
    required: true,
    ref: "Channel",
  },
  content: String,
  time: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", chatSchema);
