import React from "react";
import { Nav, NavLink } from "./styles/NavbarStyles";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Nav>
      <NavLink as={Link} to="/dashboard/CasasDisponibles">
        Casas disponibles
      </NavLink>
      <NavLink as={Link} to="/dashboard/EspaciosComunes">
        Espacios comunes
      </NavLink>
      <NavLink as={Link} to="/dashboard/PagoAdministracion">
        Pago administración
      </NavLink>
      <NavLink as={Link} to="/dashboard/RecibosPago">
        Recibos de pago
      </NavLink>
    </Nav>
  );
};

export default Navbar;
