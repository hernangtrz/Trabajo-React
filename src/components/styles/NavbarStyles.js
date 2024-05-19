import styled from "styled-components";
import { Link } from "react-router-dom";

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 200px; /* Ancho de la barra de navegación */
  background-color: #333;
  padding-top: 20px;
`;

export const NavLink = styled(Link)`
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #555;
  }
`;
