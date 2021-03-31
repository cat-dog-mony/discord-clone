import React from "react";
import styled from "styled-components";

import { Cube, UserPlus, Cog } from "@styled-icons/boxicons-regular";

interface IProps {
  isSelected: boolean;
  name: string;
  onSelectChannel: (name: string) => void;
}

const Channel: React.FC<IProps> = ({ isSelected, name, onSelectChannel }) => {
  return (
    <ChannelContainer
      selected={isSelected}
      onClick={() => onSelectChannel(name)}
    >
      <Cube size="20" />
      <ChannelLabel>{name}</ChannelLabel>
      <UserPlus size="25" />
      <Cog size="25" />
    </ChannelContainer>
  );
};

interface ChannelContainerProps {
  selected: boolean;
}
const ChannelContainer = styled.li`
  opacity: ${(prop: ChannelContainerProps) => (prop.selected ? "1" : "0.5")};
  background-color: ${(prop: ChannelContainerProps) =>
    prop.selected ? "#2c2d34" : "transparent"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  margin: 5px 15px;
  padding: 10px 15px;
  border-radius: 6px;
  &:hover {
    opacity: 0.7;
    background-color: #2c2d34;
  }
`;

const ChannelLabel = styled.div`
  margin-left: 5px;
  flex-grow: 1;
  font: bold;
`;

export default Channel;
