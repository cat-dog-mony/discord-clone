import React from "react";
import styled from "styled-components";

import ActionIcon from "../Common/TopBarMenuIcon";

interface IProps {
  isShowPopup: boolean;
  setIsShowPopup: (flag: boolean) => void;
}

const LeftMenuTopBar: React.FC<IProps> = ({ isShowPopup, setIsShowPopup }) => {
  const handleClickTitleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsShowPopup(!isShowPopup);
  };

  return (
    <LeftMenuTopBarContainer onClick={handleClickTitleMenu}>
      <TopBarTitle>Server Name</TopBarTitle>
      <TopBarIcon>
        <ActionIcon down={isShowPopup} />
      </TopBarIcon>
    </LeftMenuTopBarContainer>
  );
};

const LeftMenuTopBarContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 70px;
  padding: 0 15px;
  box-shadow: 0 1px 0 rgba(4, 4, 5, 0.2), 0 1.5px 0 rgba(6, 6, 7, 0.05),
    0 2px 0 rgba(4, 4, 5, 0.05);
`;

const TopBarTitle = styled.div`
  position: relative;
  flex-grow: 1;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
`;

const TopBarIcon = styled.div`
  display: flex;
  align-items: center;
  font-size: 40px;
  font-weight: bold;
  color: white;
`;

export default LeftMenuTopBar;
