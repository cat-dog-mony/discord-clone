const mongoose = require("mongoose");
const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const serverSchema = new Schema({
  user: [
    {
      type: ObjectId,
      required: true,
      ref: "User",
      unique: [true, "You already in the room"],
    },
  ],
  name: { type: String, maxlegnth: 30 },
  invitationCode: String,
});

module.exports = mongoose.model("Server", serverSchema);
