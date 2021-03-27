import React from "react";
import Chat from "./components/Chat/Chat";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Navbar from "./components/Navbar/Navbar";
import RightMenu from "./components/RightMenu/RightMenu";
import styled from "styled-components";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <LeftMenu />
      <Chat />
      <RightMenu />
    </AppContainer>
  );
}

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

export default App;
