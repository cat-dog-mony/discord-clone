import React from "react";
import { User } from "../../models/User";
import UserCard from "./UserCard";
import "./UserCardList.css";

interface IProps {
  online: boolean;
  ownerId: number;
  users: User[];
}

const UserCardList: React.FC<IProps> = ({ online, ownerId, users }) => {
  return (
    <ul className="user-list">
      {users.map((user) => {
        return (
          <UserCard online={online} user={user} owner={user.id === ownerId} />
        );
      })}
    </ul>
  );
};

export default UserCardList;
