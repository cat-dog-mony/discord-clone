import React from "react";
import { BiCube, BiUserPlus, BiCog } from "react-icons/bi";

import "./Channel.css";

interface IProps {
  isSelected: boolean;
  name: string;
  onSelectChannel: (name: string) => void;
}

const Channel: React.FC<IProps> = ({ isSelected, name, onSelectChannel }) => {
  return (
    <li
      className={`channel-item ${isSelected ? "selected" : ""}`}
      onClick={() => onSelectChannel(name)}
    >
      <BiCube />
      <div className="channel-item-name">{name}</div>
      <BiUserPlus />
      <BiCog />
    </li>
  );
};

export default Channel;
