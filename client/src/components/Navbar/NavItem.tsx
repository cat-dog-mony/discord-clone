import React from "react";
import styled from "styled-components";

interface IProps {
  name: string;
  image?: string;
}

const NavItem: React.FC<IProps> = ({ name, image }) => {
  if (name.length > 2) {
    name = name.substring(0, 2);
  }

  return (
    <NavItemContainer>
      <SideEffectBar />
      <ServerItem>
        {image ? <ServerItemImage src={image} alt={name} /> : name}
      </ServerItem>
    </NavItemContainer>
  );
};

const NavItemContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center; 
  padding: 10px;
`;

const SideEffectBar = styled.span`
  visibility: hidden;
  position: absolute;
  top: 50%;
  left: -3px;
  width: 3px;
  height: 0%;
  background-color: white;
  border-radius: 0 4px 4px 0;
  transition: width 0.2s ease-out, height 0.2s ease-out, top 0.2s;

  ${NavItemContainer}:hover & {
    visibility: visible;
    top: 30%;
    width: 6px;
    height: 40%;
  }
`;

const ServerItem = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  width: 60px;
  height: 60px;
  background-color: #414348;
  border-radius: 50%;
  transition: border-radius 0.2s ease-out, background-color 0.15s ease-out;
  &:hover {
    background-color: #5f73d2;
    border-radius: 40%;
  }
`;

const ServerItemImage = styled.img`
  width: 80%;
  height: 80%;
`;

export default NavItem;
