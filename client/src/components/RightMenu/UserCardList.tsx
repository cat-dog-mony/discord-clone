import React from "react";
import styled from "styled-components";
import { User } from "../../models/User";
import UserCard from "./UserCard";

interface IProps {
  online: boolean;
  ownerId: number;
  users: User[];
}

const UserCardList: React.FC<IProps> = ({ online, ownerId, users }) => {
  return (
    <UserListContainerDiv>
      {users.map((user) => {
        return (
          <UserCard online={online} user={user} owner={user.id === ownerId} />
        );
      })}
    </UserListContainerDiv>
  );
};

const UserListContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 20px;
`;

export default UserCardList;
