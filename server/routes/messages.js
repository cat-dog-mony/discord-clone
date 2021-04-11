const express = require("express");
const router = express.Router();
const Messages = require("../models/Message");

router.get("/:serverId/channels/:channelId/messages", async (req, res) => {
  try {
    const channel = req.params.channelId;
    const messages = await Messages.find({ channel }).populate("user").exec();
    return res.status(200).json({ success: true, messages });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

module.exports = router;
