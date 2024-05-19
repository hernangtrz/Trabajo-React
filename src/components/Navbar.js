import React from "react";
import { Nav, NavLink } from "./styles/NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <NavLink as={Link} to="/dashboard/casas-disponbles">
        Casas disponibles
      </NavLink>
      <NavLink as={Link} to="/dashboard/espacios-comunes">
        Espacios comunes
      </NavLink>
      <NavLink as={Link} to="/dashboard/pago-administracion">
        Pago administración
      </NavLink>
      <NavLink as={Link} to="/dashboard/recibos-pago">
        Recibos de pago
      </NavLink>
    </Nav>
  );
};

export default Navbar;
