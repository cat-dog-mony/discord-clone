import React from "react";
import UserList from "./UserCardList";
import "./RightMenu.css";
import { User } from "../../models/User";

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
    <div className="rightmenu">
      <div className="user-list-label"> 온라인</div>
      <UserList online={true} users={onlineUsers} ownerId={channelOwnerId} />
      <div className="user-list-label"> 오프라인</div>
      <UserList online={false} users={offlineUsers} ownerId={channelOwnerId} />
    </div>
  );
};

export default RightMenu;
