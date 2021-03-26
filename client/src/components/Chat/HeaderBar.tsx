import React from "react";
import { IconContext } from "react-icons";
import { BiHash } from "react-icons/bi";


interface IProps {
  name: string;
}

const HeaderBar: React.FC<IProps> = ({ name }) => {
  return (
    <div className="headerBarContainer">
      <div className="chatTitle">
        <IconContext.Provider
          value={{ className: 'chatHashtag' }}
        >
          <BiHash />
        </IconContext.Provider>
        <div className="chatTitleText">
          { name }
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;