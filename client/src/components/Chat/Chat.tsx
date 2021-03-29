import React from "react";
import HeaderBar from "./HeaderBar";
import { Message } from "../../models/Message";
import { User } from "../../models/User";
import InputWrapper from "./InputWrapper";
import MessageWrapper from "./MessageWrapper";
import styled from "styled-components";

const CHAT_ENDPOINT = "http://localhost:5000/";
let socket;

// dummy user
const user: User = {
  id: 1,
  name: "Test User1",
  online: true,
};

// dummy message
const messages: Message[] = [
  {
    id: 1,
    user: user,
    content: "this is test message",
    isFirst: true,
    timestamp: "2021-03-27",
  },
  {
    id: 2,
    user: user,
    content:
      "this is test message. And Long message. kslnflnf sdnsdkl nsdafklsdakfl dffn",
    isFirst: false,
  },
  {
    id: 3,
    user: user,
    content: "this is test message 3",
    isFirst: false,
  },
  {
    id: 4,
    user: user,
    content: "this is test message 3 sklfdnsf sd from other user",
    isFirst: false,
  },
];

// dummy romm
const room = {
  name: "일반1",
};

const Chat = () => {
  return (
    // TODO: move it to higher level of component
    <CenterContainerDiv>
      <InnerContainerDiv>
        <HeaderBar name={room.name} />
        <ChatContainerDiv>
          <MessageWrapper messages={messages} />
          <InputWrapper />
        </ChatContainerDiv>
      </InnerContainerDiv>
    </CenterContainerDiv>
  );
};

const CenterContainerDiv = styled.div`
  width: 100px;
  flex-grow: 1;
  background-color: var(--chat-bg-color);
`;

const InnerContainerDiv = styled.div`
  height: 100vh;
  background-color: var(--chat-bg-color);
  display: flex;
  flex-direction: column;
`;

const ChatContainerDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export default Chat;
