import React from "react";
import { BiChevronDown, BiX } from "react-icons/bi";

import "./LeftMenu.css";

interface IProps {
  isShowTitleMenu: boolean;
  setIsShowTitleMenu: (flag: boolean) => void;
}

const LeftMenuTitleBar: React.FC<IProps> = ({
  isShowTitleMenu,
  setIsShowTitleMenu,
}) => {
  const handleClickTitleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsShowTitleMenu(!isShowTitleMenu);
  };

  return (
    <div className="title-container" onClick={handleClickTitleMenu}>
      <div className="title">Server Name</div>
      <div className="title-icon">
        {isShowTitleMenu ? <BiChevronDown /> : <BiX />}
      </div>
    </div>
  );
};

export default LeftMenuTitleBar;
