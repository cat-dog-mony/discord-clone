import React from "react";
import HeaderBar from "./HeaderBar"
import { Message } from "../../models/Message";
import { User } from "../../models/User";
import "./Chat.css";
import InputWrapper from "./InputWrapper";
import MessageWrapper from "./MessageWrapper";

const CHAT_ENDPOINT = 'http://localhost:5000/';
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
    timestamp: "2021-03-27"
  },
  {
    id: 2,
    user: user,
    content: "this is test message. And Long message. kslnflnf sdnsdkl nsdafklsdakfl dffn",
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
]

// dummy romm
const room = {
  name: '일반1',
}

const Chat = () => {
  return (
    // TODO: move it to higher level of component
    <div className="centerContainer">
      <div className="container">
        <HeaderBar name={room.name}/>
        <div className="chatContainer">
          <MessageWrapper messages={messages} />
          <InputWrapper />
        </div>
      </div>
    </div>
  )
};

export default Chat;