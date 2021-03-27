import React from "react";
import { IconContext } from "react-icons";
import { BiHash } from "react-icons/bi";
import "./HeaderBar.css";

interface IProps {
  name: string;
}

const HeaderBar: React.FC<IProps> = ({ name }) => {
  return (
    <div className="header-bar-container">
      <div className="chat-title">
        <IconContext.Provider value={{ className: "chat-hashtag" }}>
          <BiHash />
        </IconContext.Provider>
        <div className="text">{name}</div>
      </div>
    </div>
  );
};

export default HeaderBar;
