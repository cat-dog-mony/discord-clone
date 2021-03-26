const mongoose = require("mongoose");
const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const roomSchema = new Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  title: { String, maxlegnth: 20 },
  image: String,
});

module.exports = mongoose.model("Chat", roomSchema);
