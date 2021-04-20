import React, { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

import HeaderBar from "./HeaderBar";
import InputWrapper from "./InputWrapper";
import MessageWrapper from "./MessageWrapper";
import styled from "styled-components";
import { Message } from "../../models/Message";
import { User } from "../../models/User";

const CHAT_ENDPOINT = "http://localhost:5000/";
let socket: Socket;

const Chat = () => {
  const [channel, setChannel] = useState([]);
  const [messages, setMessages] = useState<Message[]>([]);
  useEffect(() => {
    // get channel from query string
    const channel_id = "testchannel";
    const user = "testuser";
    socket = io(CHAT_ENDPOINT);

    // receive message
    socket.on("message", (message: Message) => {
      setMessages((messages) => [...messages, message]);
    });

    // join room
    socket.emit("join", { user, channel_id }, (data: any) => {});

    return () => {
      socket.close();
    };
  }, []);

  const handleSendMessage = (messageContent: string) => {
    // send message

    const message = {
      id: 1,
      user: "testuser",
      content: messageContent,
      isFirst: false,
      timestamp: new Date(),
    };
    const channel_id = "testchannel";
    if (socket) {
      socket.emit("sendMessage", message, channel_id, () => {
        // socket -> message -> received
      });
    }
  };

  return (
    // TODO: move it to higher level of component
    <CenterContainerDiv>
      <HeaderBar name={room.name} />
      <ChatContainerDiv>
        <MessageWrapper messages={messages} />
        <InputWrapper onSendMessage={handleSendMessage} />
      </ChatContainerDiv>
    </CenterContainerDiv>
  );
};

const CenterContainerDiv = styled.div`
  flex-grow: 1;
  background-color: var(--chat-bg-color);
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ChatContainerDiv = styled.div`
  position: relative;
  display: flex;
  height: 80%;
  flex-grow: 1;
  flex-direction: column;
`;

// dummy romm
const room = {
  name: "일반1",
};

// dummy user
const user: User = {
  id: 1,
  name: "Test User1",
  online: true,
};

export default Chat;
