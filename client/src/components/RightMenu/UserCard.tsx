import React from "react";

import { BiUserCircle, BiCrown } from "react-icons/bi";
import { User } from "../../models/User";

import "./UserCard.css";

interface IProps {
  online: boolean;
  user: User;
  owner: boolean;
}

const UserCard: React.FC<IProps> = ({ online, user, owner }) => {
  return (
    <li className={`user-card ${!online ? "offline" : ""}`}>
      <div className="user-icon">
        <BiUserCircle />
        {online && <span className="online-circle" />}
      </div>
      <span className="user-name">{user.name}</span>
      {owner && (
        <span className="channel-owner-icon">
          <BiCrown />
        </span>
      )}
    </li>
  );
};

export default UserCard;
