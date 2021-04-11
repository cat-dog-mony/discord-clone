import Chat from "components/Chat/Chat";
import LeftMenu from "components/LeftMenu/LeftMenu";
import Navbar from "components/Navbar/Navbar";
import RightMenu from "components/RightMenu/RightMenu";
import React from "react";
import styled from "styled-components";

const MainPage = () => {
  return (
    <MainContainer>
      <Navbar />
      <LeftMenu />
      <Chat />
      <RightMenu />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export default MainPage;
