import React from "react";
import { EmojiSmileFill } from "@styled-icons/bootstrap/EmojiSmileFill";
import styled from "styled-components";

const InputWrapper = () => {
  return (
    <InputBoxWrapperDiv>
      <InputBoxDiv>
        <InnerInput>
          <TextWrapperDiv>
            <ChatInput placeholder="Message #general" />
          </TextWrapperDiv>
          <EmojiSmileFillIcon />
        </InnerInput>
      </InputBoxDiv>
    </InputBoxWrapperDiv>
  );
};

const InputBoxWrapperDiv = styled.div`
  position: relative;
  padding: 0 16px;
  margin-top: -8px;
  flex-grow: 1;
  flex-shrink: 0;
  padding-left: 16px;
  padding-right: 16px;
`;

const InputBoxDiv = styled.div`
  margin-bottom: 24px;
  background-color: var(--chat-bg-color);
  border-radius: 8px;
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: scroll;
`;

const InnerInput = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: flex-center;
  position: relative;
  background-color: var(--chat-input-bg-color);
  min-height: 2.5vh;
`;

const EmojiSmileFillIcon = styled(EmojiSmileFill)`
  width: 20px;
  color: #cfcfcf;
  padding-right: 10px;
`;

const TextWrapperDiv = styled.div`
  vertical-align: middle;
  flex: 8;
  display: flex;
`;

const ChatInput = styled.input`
  background-color: var(--chat-input-bg-color);
  -webkit-appearance: none !important;
  box-shadow: none;
  border: none;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  color: white;
  flex-grow: 1;

  &:focus {
    outline: none;
  }
`;

export default InputWrapper;
