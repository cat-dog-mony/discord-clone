import React, { useState } from "react";
import LeftMenuTitleBar from "./LeftMenuTitleBar";
import ChannelContainer from "./ChannelContainer";

import "./LeftMenu.css";

const LeftMenu = () => {
  const [isShowTitleMenu, setIsShowTitleMenu] = useState(false);

  return (
    <div className="leftmenu">
      <LeftMenuTitleBar
        isShowTitleMenu={isShowTitleMenu}
        setIsShowTitleMenu={setIsShowTitleMenu}
      />
      <ChannelContainer />
    </div>
  );
};

export default LeftMenu;
