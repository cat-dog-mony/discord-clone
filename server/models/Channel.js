const mongoose = require("mongoose");
const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const channelSchema = new Schema({
  user: [
    {
      type: ObjectId,
      required: true,
      ref: "User",
    },
  ],
  server: {
    type: ObjectId,
    required: true,
    ref: "Server",
  },
  name: String,
});

module.exports = mongoose.model("Channel", channelSchema);
