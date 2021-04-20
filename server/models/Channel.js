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

channelSchema.statics.userJoinChannel = async function (channelId, userId) {
  try {
    const channel = this.findByIdAndUpdate(
      { _id: channelId },
      { $push: { user: userId } }
    )
      .populate("user")
      .exec();
    await channel.save();
    return channel;
  } catch (error) {
    return error;
  }
};

module.exports = mongoose.model("Channel", channelSchema);
