import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { MessageProps } from "../../models/Message";
import MessageComponent from "./MessageComponent";
import "./MessageWrapper.css";

const MessageWrapper: React.FC<MessageProps> = ({ messages }: MessageProps) => {
  return (
    <div className="message-wrapper">
      <div className="scroller">
        {messages.map((msg) => {
          return (
            <MessageComponent
              id={msg.id}
              key={msg.id}
              user={msg.user}
              content={msg.content}
              isFirst={msg.isFirst}
              timestamp={msg.timestamp}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MessageWrapper;
