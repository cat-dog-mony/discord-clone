import React from "react";
import { BiX, BiChevronDown } from "react-icons/bi";

import "./LeftMenuTitleBar.css";

interface IProps {
  isShowPopup: boolean;
  setIsShowPopup: (flag: boolean) => void;
}

const LeftMenuTitleBar: React.FC<IProps> = ({
  isShowPopup,
  setIsShowPopup,
}) => {
  const handleClickTitleMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsShowPopup(!isShowPopup);
  };

  return (
    <div className="lefmenu-title-container" onClick={handleClickTitleMenu}>
      <div className="title">Server Name</div>
      <div className="title-icon">
        {isShowPopup ? <BiX /> : <BiChevronDown />}
      </div>
    </div>
  );
};

export default LeftMenuTitleBar;
