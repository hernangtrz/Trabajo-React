import styled from "styled-components";
import backgroundImage from "../assets/background.jpg"; // Importar la imagen de fondo

export const DashboardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  filter: brightness(
    0.5
  ); /* Oscurece un poco la imagen para resaltar el contenido */
  z-index: -1;
`;
