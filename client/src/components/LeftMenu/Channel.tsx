import React from "react";
import styled from "styled-components";

import { BiCube, BiUserPlus, BiCog } from "react-icons/bi";

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
      <BiCube />
      <ChannelLabel>{name}</ChannelLabel>
      <BiUserPlus />
      <BiCog />
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
