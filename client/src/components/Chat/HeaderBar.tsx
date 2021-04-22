import React from "react";
import styled from "styled-components";
import { Hashtag } from "@styled-icons/fa-solid";

interface IProps {
  name: string;
}

const HeaderBar: React.FC<IProps> = ({ name }) => {
  return (
    <HeaderBarContainerDiv>
      <ChatTitleDiv>
        <HashTagIcon />
        <ChatTextDiv>{name}</ChatTextDiv>
      </ChatTitleDiv>
    </HeaderBarContainerDiv>
  );
};

const HeaderBarContainerDiv = styled.div`
  height: 70px;
  box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
    0 2px 0 rgba(4, 4, 5, 0.05);
  padding: 0 15px;
  display: flex;
`;

const ChatTitleDiv = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

const HashTagIcon = styled(Hashtag)`
  display: inline;
  width: 15px;
  color: grey;
  padding: 0 10px 0 0;
`;

const ChatTextDiv = styled.div`
  display: inline;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
`;

export default HeaderBar;
