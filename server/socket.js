const SocketIo = require("socket.io");
const Channel = require("./models/Channel");
const Message = require("./models/Message");


module.exports = (server) => {
  const io = SocketIo(server);

  io.on("connection", (socket) => {
    socket.on("test", (data) => {
      console.log(data);
    });

    socket.on("join", async (joinData, callback) => {
      try {
        const channelId = joinData.channel;
        const userId = joinData.user;
        const channel = await Channel.userJoinChannel(channelId, userId);
        socket.join(channel._id);
        io.to(channel._id).emit("message", {
          user: "system",
          text: `앗! 야생의 ${channel.user._id}이(가) 나타났다!`,
        }); 
        callback(channel);
      } catch (error) {
        callback(error);
      }
    });

    socket.on("sendMessage", async (messageData) => {
      const user = await User.findOne({ _id: socket.id });
      const newMessage = new Message({
        chatroom: messageData.channelId,
        //배열안에 들어있어야 하는데 이게 맞나?
        user: socket.id,
        content: messageData.content,
      });
      io.to(messageData.channelId).emit("newMessage", {
        content: messageData.content,
        name: user.name,
        id: socket.id,
      });
      await newMessage.save();
    });

    socket.on("leaveRoom", async (joinData, callback) => {
      try {
        const channel = await Channel.findOneAndUpdate(
          {
            _id: joinData.channel,
          },
          {
            $pull: { user: userId },
          }
        );
        await channel.save();
        socket.leave(joinData.channel);
        io.to(joinData.channel).emit("message", {
          user: "system",
          text: `${joinData.user}가 나갔습니다.`,
        });
        callback(channel);
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
