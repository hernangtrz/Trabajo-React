import React from "react";
import { Nav, NavLink } from "./styles/NavbarStyles";

const Navbar = () => {
  return (
    <Nav>
      <NavLink to="/dashboard">Home</NavLink>
      <NavLink to="/dashboard/profile">Profile</NavLink>
      <NavLink to="/dashboard/settings">Settings</NavLink>
      <NavLink to="/dashboard/logout">Logout</NavLink>
    </Nav>
  );
};

export default Navbar;
