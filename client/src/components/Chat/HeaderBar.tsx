import React from "react";
import { IconContext } from "react-icons";
import { BiHash } from "react-icons/bi";
import styled from "styled-components";

interface IProps {
  name: string;
}

const HeaderBar: React.FC<IProps> = ({ name }) => {
  return (
    <HeaderBarContainerDiv>
      <div className="chat-title">
        <IconContext.Provider value={{ className: "chat-hashtag" }}>
          <BiHash />
        </IconContext.Provider>
        <div className="text">{name}</div>
      </div>
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

export default HeaderBar;
