import React, { useState } from "react";
import styled from "styled-components";

import LeftMenuTitleBar from "./LeftMenuTopBar";
import ChannelList from "./ChannelList";
import LeftMenuPopup from "./LeftMenuPopup";

const LeftMenu = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <LeftMenuContainer>
      <LeftMenuTitleBar
        isShowPopup={isShowPopup}
        setIsShowPopup={setIsShowPopup}
      />
      <LeftMenuContentContainer>
        <ChannelList />
        <LeftMenuPopup isShow={isShowPopup} />
      </LeftMenuContentContainer>
    </LeftMenuContainer>
  );
};

const LeftMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  background-color: var(--leftmenu-bg-color);
`;

const LeftMenuContentContainer = styled.div`
  position: relative;
  flex-grow: 1;
`;

export default LeftMenu;
