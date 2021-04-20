import React from "react";
import MessageComponent from "./MessageComponent";
import styled from "styled-components";
import { Message } from "models/Message";

export interface IProps {
  messages: Message[];
}
const MessageWrapper: React.FC<IProps> = ({ messages }) => {
  let previousOwnerId: any = null;
  return (
    <MessageWrapperDiv>
      {messages.map((msg) => {
        const isFirstMsg = previousOwnerId !== msg.user.id;
        previousOwnerId = msg.user.id;
        return (
          <MessageComponent
            id={msg.id}
            key={msg.id}
            user={msg.user}
            content={msg.content}
            isFirst={isFirstMsg}
            timestamp={msg.timestamp}
          />
        );
      })}
    </MessageWrapperDiv>
  );
};

const MessageWrapperDiv = styled.div`
  flex-grow: 100;
  position: relative;
  flex-shrink: 10;
  overflow: scroll;
`;

export default MessageWrapper;
