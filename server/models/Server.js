const mongoose = require("mongoose");
const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const serverSchema = new Schema({
  user: {
    type: ObjectId,
    required: true,
    ref: "User",
  },
  name: { String, maxlegnth: 20 },
  invitationCode: String,
});

module.exports = mongoose.model("Server", serverSchema);
