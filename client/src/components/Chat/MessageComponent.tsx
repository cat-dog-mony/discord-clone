import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { Message } from "../../models/Message";


const MessageComponent: React.FC<Message> = (props: Message) => {
  return (
    <div className="message">
      {props.isFirst === true &&
        <>
          <div className="profile">
            <BiUserCircle />
          </div>
          <div className="userinfo">
            <div className="username">
              {props.user.name}
            </div>
            <div className="dateInfo">
              {props.timestamp}
            </div>
          </div>
        </>
      }
      <div className="messageContent">
        {props.content}
      </div>
    </div>
  )
};

export default MessageComponent;