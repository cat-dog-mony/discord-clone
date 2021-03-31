import React from "react";
import styled from "styled-components";

import { UserPlus } from "@styled-icons/boxicons-regular";

interface IProps {
  isShow: boolean;
}

const LeftMenuPopup: React.FC<IProps> = ({ isShow }) => {
  return (
    <LeftMenuPopUpContainer isShow={isShow}>
      <PopUpItemContainer>
        <PopUpItem>
          <PopUpItemLabel>초대하기</PopUpItemLabel>
          <PopUpItemIcon>
            <UserPlus size="30" />
          </PopUpItemIcon>
        </PopUpItem>
        <PopUpItem>
          <PopUpItemLabel>채널 만들기</PopUpItemLabel>
          <PopUpItemIcon>
            <UserPlus size="30" />
          </PopUpItemIcon>
        </PopUpItem>
        <PopUpItem>
          <PopUpItemLabel>서버 설정</PopUpItemLabel>
          <PopUpItemIcon>
            <UserPlus size="30" />
          </PopUpItemIcon>
        </PopUpItem>
      </PopUpItemContainer>
    </LeftMenuPopUpContainer>
  );
};

interface ContainerProps {
  isShow: boolean;
}

const LeftMenuPopUpContainer = styled.div`
  display: ${(props: ContainerProps) => (props.isShow ? "block" : "none")};
  width: ${(props: ContainerProps) => (props.isShow ? "90%" : "0%")};
  min-height: 200px;
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  background-color: #131316;
  border-radius: 10px;
  transition: width 0.05s ease, display 0s;
`;

const PopUpItemContainer = styled.div`
  margin-top: 30px;
  margin-right: 20px;
  margin-left: 20px;
  margin-bottom: 30px;
`;

const PopUpItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  height: 30px;
  margin-bottom: 5px;
  border-radius: 6px;
  font-size: 1.3rem;
  color: white;
  opacity: 0.7;

  &:hover {
    background-color: #4b5b9f;
    opacity: 1;
  }
`;

const PopUpItemLabel = styled.div`
  flex-grow: 1;
  font-weight: bold;
`;

const PopUpItemIcon = styled.div`
  font-size: 2rem;
`;

export default LeftMenuPopup;
