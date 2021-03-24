import React, { useState } from "react";
import {
  BiChevronDown,
  BiPlus,
  BiX,
  BiChevronRight,
  BiCube,
  BiUserPlus,
  BiCog,
} from "react-icons/bi";

import "./LeftMenu.css";

const channels = [
  { name: "일반1" },
  { name: "일반2" },
  { name: "일반3" },
  { name: "일반4" },
  { name: "일반5" },
  { name: "일반6" },
  { name: "일반7" },
  { name: "일반8" },
  { name: "일반9" },
];

const LeftMenu = () => {
  const [isShowTitleMenu, setIsShowTitleMenu] = useState(false);
  const [isExpandChannels, setIsExpandChannels] = useState(false);
  const [currentChannelName, setCurrenChannelName] = useState(channels[0].name);

  const handleClickTitleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsShowTitleMenu(!isShowTitleMenu);
  };

  const handleClickChannelSection = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpandChannels(!isExpandChannels);
  };

  const selectChannel = (channel: string) => {
    setCurrenChannelName(channel);
  };

  return (
    <div className="leftmenu">
      <div className="title-container" onClick={handleClickTitleMenu}>
        <div className="title">Server Name</div>
        <div className="title-icon">
          {isShowTitleMenu ? <BiChevronDown /> : <BiX />}
        </div>
      </div>
      <div
        className="channel-section-header"
        onClick={handleClickChannelSection}
      >
        <BiChevronRight
          className={`channel-section-arrow ${
            isExpandChannels ? "expanded" : ""
          }`}
        />
        <span>채팅 채널</span>
        <BiPlus className="channel-plus-btn" />
      </div>
      <ul className="channel-list">
        {channels.map((channel, idx) => {
          const { name } = channel;
          const isSelected = name === currentChannelName;
          if (isExpandChannels && !isSelected) return null;
          return (
            <li
              className={`channel-item ${isSelected ? "selected" : ""}`}
              onClick={() => selectChannel(name)}
            >
              <BiCube />
              <div className="channel-item-name">{name}</div>
              <BiUserPlus />
              <BiCog />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftMenu;
