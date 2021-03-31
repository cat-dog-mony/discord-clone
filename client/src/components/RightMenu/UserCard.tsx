import React from "react";

import { User } from "../../models/User";
import { Crown, UserCircle } from "@styled-icons/boxicons-regular";
import styled from "styled-components";

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
        <UserCircleIcon />
        {online && <span className="online-circle" />}
      </div>
      <span className="user-name">{user.name}</span>
      {owner && <CrownIcon />}
    </li>
  );
};

const UserCircleIcon = styled(UserCircle)`
  width: 40px;
  position: relative;
  color: white;
  margin-right: 5px;
`;

const CrownIcon = styled(Crown)`
  width: 25px;
  color: yellow;
`;

export default UserCard;
