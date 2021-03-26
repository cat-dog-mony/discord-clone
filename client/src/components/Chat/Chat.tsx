import React from "react";
import { IconContext } from "react-icons";
import { BiHash, BiUserCircle, BiSmile } from "react-icons/bi";
import "./Chat.css";

const CHAT_ENDPOINT = 'http://localhost:5000/';
let socket;

// dummy user
const user = {
  id: 1,
  name: "Test User1",
  online: true,
}

// dummy message
const messages = [
  {
    id: 1,
    userId: 1,
    message: "this is test message",
  },
  {
    id: 2,
    userId: 1,
    message: "this is test message. And Long message. kslnflnf sdnsdkl nsdafklsdakfl dffn",
  },
  {
    id: 3,
    userId: 1,
    message: "this is test message 3",
  },
  {
    id: 4,
    userId: 2,
    message: "this is test message 3 sklfdnsf sd from other user",
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
        <div className="headerBarContainer">
          <div className="chatTitle">
            <IconContext.Provider
              value={{ className: 'chatHashtag' }}
            >
              <BiHash />
            </IconContext.Provider>
            <div className="chatTitleText">
              { room.name }
            </div>
          </div>
        </div>

        <div className="chatContainer">

          <div className="messageWrapper">
            <div className="scroller">
              <div className="message">
                <div className="profile">
                  <BiUserCircle />
                </div>
                <div className="userinfo">
                  <div className="username">
                    seul
                  </div>
                  <div className="dateInfo">
                    03/20/2021
                  </div>
                </div>

                <div className="messageContent">
                  test message
                </div>
              </div>
              <div className="message">
                <div className="messageContent">
                  test messagesndf kl nadklfasdkf ndasf nsdakl fnsdaklf skdlf nsdaklf nsdklfs
                </div>
              </div>

            </div>
          </div>

          <div className="inputWrapper">
            <div className="inputBox">
              <div className="innerInput">
                <div className="textArea">
                  <input className="chatInput" placeholder="Message #general"/>
                </div>
                <div className="imojiArea">
                  <IconContext.Provider
                    value={{ className: 'smileEmoji' }}
                  >
                    <BiSmile />
                  </IconContext.Provider>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
};

export default Chat;
