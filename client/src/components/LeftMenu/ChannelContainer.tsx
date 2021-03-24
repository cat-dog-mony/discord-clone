import React, { useState } from "react";
import { BiPlus, BiChevronRight } from "react-icons/bi";
import Channel from "./Channel";

import "./ChannelContainer.css";

const mockChannels = [
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

const ChannelContainer = () => {
  const [isExpandChannels, setIsExpandChannels] = useState(false);
  const [currentChannelName, setCurrenChannelName] = useState(
    mockChannels[0].name
  );

  const handleClickChannelSection = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsExpandChannels(!isExpandChannels);
  };

  const selectChannel = (channel: string) => {
    setCurrenChannelName(channel);
  };
  return (
    <>
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
        {/* TODO: Change key property to channel name */}
        {mockChannels.map((channel, idx) => {
          const { name } = channel;
          const isSelected = name === currentChannelName;
          if (isExpandChannels && !isSelected) {
            return null;
          } else {
            return (
              <Channel
                key={idx}
                isSelected
                name={name}
                onSelectChannel={selectChannel}
              />
            );
          }
        })}
      </ul>
    </>
  );
};

export default ChannelContainer;
