import React, { useState } from "react";
import LeftMenuTitleBar from "./LeftMenuTitleBar";
import ChannelContainer from "./ChannelContainer";

import "./LeftMenu.css";
import { BiUserPlus } from "react-icons/bi";

const LeftMenu = () => {
  const [isShowPopup, setIsShowPopup] = useState(false);

  return (
    <div className="leftmenu">
      <LeftMenuTitleBar
        isShowPopup={isShowPopup}
        setIsShowPopup={setIsShowPopup}
      />
      <div className="leftmenu-content-container">
        <ChannelContainer />
        <div className={`leftmenu-popup ${isShowPopup ? "visible" : ""}`}>
          <ul className="popup-item-list">
            <li className="popup-item">
              <span className="popup-item-label">초대하기</span>
              <BiUserPlus className="popup-item-icon" />
            </li>
            <li className="popup-item">
              <span className="popup-item-label">채널 만들기</span>
              <BiUserPlus className="popup-item-icon" />
            </li>
            <li className="popup-item">
              <span className="popup-item-label">서버 설정</span>
              <BiUserPlus className="popup-item-icon" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
