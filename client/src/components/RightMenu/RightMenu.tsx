import React from "react";
import UserCardList from "./UserCardList";

import styled from "styled-components";

import { User } from "models/User";

const channelOwnerId = 1;

const users: User[] = [
  {
    id: 1,
    name: "Test User1",
    online: true,
  },
  {
    id: 2,
    name: "Test User2",
    online: true,
  },
  {
    id: 3,
    name: "Test User3",
    online: false,
  },
];

const RightMenu = () => {
  const offlineUsers: User[] = [];
  const onlineUsers: User[] = [];

  users.forEach((user) => {
    if (user.online) {
      onlineUsers.push(user);
    } else {
      offlineUsers.push(user);
    }
  });

  return (
    <RightMenuContainerDiv>
      <UserSectionLabelDiv>온라인</UserSectionLabelDiv>
      <UserCardList
        online={true}
        users={onlineUsers}
        ownerId={channelOwnerId}
      />
      <UserSectionLabelDiv>오프라인</UserSectionLabelDiv>
      <UserCardList
        online={false}
        users={offlineUsers}
        ownerId={channelOwnerId}
      />
    </RightMenuContainerDiv>
  );
};

const RightMenuContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  padding: 40px 10px;
  background-color: var(--rightmenu-bg-color);
`;

const UserSectionLabelDiv = styled.div`
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
  opacity: 0.7;
  margin-left: 10px;
`;

export default RightMenu;
