import React from "react";
import "./NavItem.css";

interface IProps {
  name: string;
  img?: string;
}

const NavItem: React.FC<IProps> = ({ name, img }) => {
  if (name.length > 2) {
    name = name.substring(0, 2);
  }

  return (
    <div className="nav-item">
      <span className="hover-effect-bar" />
      <div className="server-item">
        {img ? (
          <img className="server-item-image" src={img} alt={name} />
        ) : (
          name
        )}
      </div>
    </div>
  );
};

export default NavItem;
