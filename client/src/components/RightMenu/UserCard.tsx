import React from "react";

import { User } from "models/User";
import { Crown, UserCircle } from "@styled-icons/boxicons-regular";
import styled from "styled-components";

interface IProps {
  online: boolean;
  user: User;
  owner: boolean;
}

const UserCard: React.FC<IProps> = ({ online, user, owner }) => {
  return (
    <UserCardDiv online={online}>
      <UserIconSectionDiv>
        <UserCircleIcon />
        {online && <OnlineCircleSpan />}
      </UserIconSectionDiv>
      <UserNameLabelSpan>{user.name}</UserNameLabelSpan>
      {owner && <CrownIcon />}
    </UserCardDiv>
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

interface UserCardDivProps {
  online?: boolean;
}

const UserCardDiv = styled.li`
  margin-bottom: 3px;
  flex-grow: 1;
  padding: 7px;
  color: white;
  display: flex;
  align-items: center;
  opacity: ${(props: UserCardDivProps) => (props.online ? "1" : "0.5")};
  &:hover {
    background-color: #2c2d34;
    border-radius: 6px;
  }
`;

const UserIconSectionDiv = styled.div`
  position: relative;
  font-size: 3rem;
  color: white;
  margin-right: 5px;
`;

const OnlineCircleSpan = styled.div`
  position: absolute;
  bottom: 5px;
  right: -5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 5px solid #232529;
  background-color: green;
`;

const UserNameLabelSpan = styled.span`
  font-size: 1rem;
  opacity: 0.7;
  font-weight: bold;
  margin-right: 5px;
`;

export default UserCard;
