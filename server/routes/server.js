const express = require("express");
const router = express.Router();

const Server = require("../models/Server");
const Channel = require("../models/Channel");

router.post("/", async (req, res) => {
  try {
    const newServer = await new Server(req.body);
    await newServer.save();
    const normalChannel = await new Channel({
      name: "Normal",
      server: newServer._id,
      user: newServer.user[0],
    });
    await normalChannel.save();
    return res
      .status(200)
      .json({ success: true, server: newServer, normalChannel });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ success: false, error });
  }
});

router.get("/", async (req, res) => {
  try {
    const server = await Server.find({}).populate("user").exec();
    return res.status(400).json({ success: true, server });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const serverId = req.params.id;
    const server = await Server.findOne({ _id: serverId })
      .populate("user")
      .exec();
    return res.status(200).json({ success: true, server });
  } catch (error) {
    return res.status(400).json({ success: false, error });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const serverId = req.params.id;
    const userId = req.body.user;
    const server = await Server.findByIdAndUpdate(
      { _id: serverId },
      { $push: { user: userId } }
    );
    return res.status(200).json({ success: true, server });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error });
  }
});

module.exports = router;
