import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { Message } from "../../models/Message";
import "./MessageComponent.css"


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
            <div className="date-info">
              {props.timestamp}
            </div>
          </div>
        </>
      }
      <div className="message-context">
        {props.content}
      </div>
    </div>
  )
};

export default MessageComponent;