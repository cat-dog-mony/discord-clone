const SocketIo = require("socket.io");
const Channel = require("./models/Channel");
const Message = require("./models/Message");

module.exports = (server, app) => {
  const io = SocketIo(server);
  app.set("io", io);

  io.on("connection", (socket) => {
    socket.on("join", async ({ channel }, callback) => {
      try {
        const channelId = joinData.channel;
        const userId = joinData.user;
        const channel = await Channel.findByIdAndUpdate(
          { _id: channelId },
          { $push: { user: userId } }
        )
          .populate("user")
          .exec();
        await channel.save();
        socket.join(channel._id);
        io.to(channel._id).emit("message", {
          user: "system",
          text: `앗! 야생의 ${channel.user._id}이(가) 나타났다!`,
        });
        callback();
      } catch (error) {
        callback(error);
      }
    });
    socket.on("sendMessage", async ({ chatroomId, message }) => {
      const user = await User.findOne({ _id: socket.userId });
      const newMessage = new Message({
        chatroom: chatroomId,
        user: socket.userId,
        message,
      });
      io.to(chatroomId).emit("newMessage", {
        message,
        name: user.name,
        userId: socket.userId,
      });
      await newMessage.save();
    });
    socket.on("leaveRoom", async (joinData, callback) => {
      try {
        const channel = await Channel.findOneAndDelete({
          _id: joinData.channel,
          user: joinData.user,
        });
        await channel.save();
        socket.leave(channel._id);
        io.to(channel._id).emit("message", {
          user: "system",
          text: `${joinData.user}가 나갔습니다.`,
        });
        callback();
      } catch (error) {
        callback(error);
      }
    });
    socket.on("error", (error) => {
      console.error(error);
    });
    socket.on("disconnect", () => {
      console.log("클라이이언트 접속해제");
    });
    callback();
  });
};
