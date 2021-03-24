import React, { useState } from "react";
import { BiChevronDown, BiPlus, BiX, BiChevronRight } from "react-icons/bi";

import "./LeftMenu.css";

const LeftMenu = () => {
  const [showTitleMenu, setShowTitleMenu] = useState(false);
  const handleTitleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowTitleMenu(!showTitleMenu);
  };
  return (
    <div className="leftmenu">
      <div className="title-container" onClick={handleTitleClick}>
        <div className="title">Server Name</div>
        <div className="title-icon">
          {showTitleMenu ? <BiChevronDown /> : <BiX />}
        </div>
      </div>
      <div className="channel-section-header">
        <BiChevronRight className="channel-section-arrow" />
        <span>채팅 채널</span>
        <BiPlus className="channel-plus-btn" />
      </div>
      <ul className="channel-list">
        <li className="channel-list-item">
          <div></div>
          <div></div>
          <div></div>
        </li>
      </ul>
    </div>
  );
};

export default LeftMenu;
