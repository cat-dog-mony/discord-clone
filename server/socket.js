const SocketIo = require("socket.io");
const Channel = require("./models/Channel");
const Message = require("./models/Message");

const user_ids = [{ username: "testuser" }];
const channels = [{ id: "testchannel" }];
const message = {
  id: 0,
  user: "system",
  content: "welcome to the room",
  isFirst: false,
  timestamp: new Date(),
};

module.exports = (server, app) => {
  const io = SocketIo(server, {
    cors: {
      origin: "*",
    },
  });
  app.set("io", io);

  io.on("connection", (socket) => {
    socket.on("chat", (data) => {
      console.log(data);
      socket.broadcast.emit("chat", "test chat");
    });

    socket.on("join", ({ user, channel_id }, callback) => {
      console.log(user, channel_id);
      // if user is not in channel
      // TODO: change to use db
      // const user_ids = Channel.find(
      // );
      // TODO: user_ids에 유저가 있는지 확인

      socket.join(channel_id);
      io.to(channel_id).emit("message", message);
    });

    socket.on("sendMessage", (message, channel_id, callback) => {
      console.log(message.content);
      // const user = User.findOne({ username: message.user });
      // const channel_id = io.sockets.manager.rooms;
      // const newMessage = new Message({
      //   chatroom: chatroomId,
      //   user: user.id,
      //   message,
      // });
      io.to(channel_id).emit("message", message);
    });

    // socket.on("sendMessage", async ({ chatroomId, message }) => {
    //   const user = await User.findOne({ _id: socket.userId });
    //   const newMessage = new Message({
    //     chatroom: chatroomId,
    //     user: socket.userId,
    //     message,
    //   });
    //   io.to(chatroomId).emit("newMessage", {
    //     message,
    //     name: user.name,
    //     userId: socket.userId,
    //   });
    //   await newMessage.save();
    // });
    // socket.on("join", async ({ joinData }, callback) => {
    //   try {
    //     const channelId = joinData.channel;
    //     const userId = joinData.user;

    //     const channel = await Channel.findByIdAndUpdate(
    //       { _id: channelId },
    //       { $push: { user: userId } }
    //     )
    //       .populate("user")
    //       .exec();
    //     await channel.save();
    //     socket.join(channel._id);
    //     io.to(channel._id).emit("message", {
    //       user: "system",
    //       text: `앗! 야생의 ${channel.user._id}이(가) 나타났다!`,
    //     });
    //     callback();
    //   } catch (error) {
    //     callback(error);
    //   }
    // });
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
  });
};
