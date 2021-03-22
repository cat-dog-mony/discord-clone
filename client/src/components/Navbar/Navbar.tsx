import React from "react";
import "./Navbar.css";
import NavItem from "./NavItem";

const servers = [
  { name: "Cat" },
  { name: "Dog" },
  { name: "Cat" },
  { name: "Dog" },
];

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavItem name="Home" img="./logo192.png" />
      <span className="item-seperator" />
      {servers.map((server, idx) => (
        <NavItem key={idx} name={server.name} />
      ))}
      {servers && <span className="item-seperator" />}
      <NavItem name="+" />
    </nav>
  );
};

export default Navbar;
