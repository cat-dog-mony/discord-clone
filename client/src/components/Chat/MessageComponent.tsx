import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { Message } from "../../models/Message";
import styled from "styled-components";

const MessageComponent: React.FC<Message> = (props: Message) => {
  return (
    <MessageWrapperDiv>
      {props.isFirst === true && (
        <>
          <ProfileDiv>
            <BiUserCircle />
          </ProfileDiv>
          <UserInfoDiv>
            <UserNameDiv>{props.user.name}</UserNameDiv>
            <DateInfoDiv>{props.timestamp}</DateInfoDiv>
          </UserInfoDiv>
        </>
      )}
      <MessageContentDiv>{props.content}</MessageContentDiv>
    </MessageWrapperDiv>
  );
};

const MessageWrapperDiv = styled.div`
  position: relative;
  word-wrap: break-word;
  user-select: text;
  color: white;
  padding-left: 70px;
  padding-right: 50px;
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
`;

const ProfileDiv = styled.div`
  font-size: 2.5rem;
  position: absolute;
  left: 16px;
  margin-top: calc(4px - 0.125rem);
  border-radius: 50%;
  cursor: pointer;
  flex: 0 0 auto;
  overflow: hidden;
`;

const UserInfoDiv = styled.div`
  overflow: hidden;
  display: block;
  position: relative;
  line-height: 1.375rem;
  min-height: 1.375rem;
`;

const UserNameDiv = styled.div`
  margin-right: 0.25rem;
  font-weight: bold;
  display: inline;
`;

const DateInfoDiv = styled.div`
  font-size: 0.5rem;
  line-height: 1.375rem;
  color: grey;
  vertical-align: baseline;
  margin-left: 0.25rem;
  display: inline;
`;

const MessageContentDiv = styled.div`
  margin-left: -72px;
  padding-left: 72px;
  line-height: 1.375rem;
`;

export default MessageComponent;
