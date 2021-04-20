import React, { useState } from "react";
import { EmojiSmileFill } from "@styled-icons/bootstrap/EmojiSmileFill";
import styled from "styled-components";

interface IProp {
  onSendMessage: (messageContent: string) => void;
}

const InputWrapper: React.FC<IProp> = ({ onSendMessage }) => {
  const [content, setContent] = useState("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && content !== "") {
      onSendMessage(content);
      setContent("");
    }
  };

  return (
    <InputBoxWrapperDiv>
      <InputBoxDiv>
        <TextWrapperDiv>
          <ChatInput
            placeholder="Message #general"
            onChange={handleChangeInput}
            value={content}
            onKeyDown={handleKeyDown}
          />
        </TextWrapperDiv>
        <EmojiSmileFillIcon />
      </InputBoxDiv>
    </InputBoxWrapperDiv>
  );
};

const InputBoxWrapperDiv = styled.div`
  height: 8%;
`;

const InputBoxDiv = styled.div`
  padding-left: 16px;
  display: flex;
  align-items: flex-center;
  position: relative;
  background-color: var(--chat-input-bg-color);
  min-height: 70%;
  border-radius: 5px;
  margin: 0 15px;
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
