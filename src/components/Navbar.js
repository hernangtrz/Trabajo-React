import React from "react";
import { Nav, NavLink } from "./styles/NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <NavLink as={Link} to="/dashboard">
        Conjuntos disponibles
      </NavLink>
      <NavLink as={Link} to="/dashboard/common-areas">
        Espacios comunes
      </NavLink>
      <NavLink as={Link} to="/dashboard/admin-payment">
        Pago administración
      </NavLink>
      <NavLink as={Link} to="/dashboard/payment-receipts">
        Recibos de pago
      </NavLink>
    </Nav>
  );
};

export default Navbar;
