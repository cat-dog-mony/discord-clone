import React from "react";
import { MessageProps } from "../../models/Message";
import MessageComponent from "./MessageComponent";
import styled from "styled-components";

const MessageWrapper: React.FC<MessageProps> = ({ messages }: MessageProps) => {
  return (
    <MessageWrapperDiv>
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
    </MessageWrapperDiv>
  );
};

const MessageWrapperDiv = styled.div`
  flex-grow: 100;
  position: relative;
  flex-shrink: 10;
`;

export default MessageWrapper;
