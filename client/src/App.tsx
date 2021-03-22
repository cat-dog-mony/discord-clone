import React from "react";
import "./App.css";
import Chat from "./components/Chat/Chat";
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Navbar from "./components/Navbar/Navbar";
import RightMenu from "./components/RightMenu/RightMenu";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <LeftMenu />
      <Chat />
      <RightMenu />
    </div>
  );
}

export default App;
