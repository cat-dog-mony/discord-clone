const express = require("express");
const router = express.Router();

const Channel = require("../models/Channel");

router.post("/:id/channels", async (req, res) => {
  try {
    const newChannel = await new Channel(req.body);
    await newChannel.save();
    return res.status(200).json({ success: true, channel: newChannel });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

router.get("/:id/channels", async (req, res) => {
  try {
    const server = req.params.id;
    const channels = await Channel.find({ server })
      .populate("user")
      .populate("server")
      .exec();
    return res.status(200).json({ success: true, channels });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

router.get("/:serverId/channels/:channelId", async (req, res) => {
  try {
    const channelId = req.params.channelId;
    const channel = await Channel.findOne({ _id, channel: channelId })
      .populate("user")
      .populate("server")
      .exec();
    return res.status(200).json({ success: true, channel });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

router.patch("/:serverId/channels/:channelId", async (req, res) => {
  try {
    const channelId = req.params.channelId;
    const userId = req.body.user;
    const channel = await Channel.findByIdAndUpdate(
      { _id: channelId },
      { $push: { user: userId } }
    );
    return res.status(200).json({ success: true, channel, user: userId });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error });
  }
});

module.exports = router;
