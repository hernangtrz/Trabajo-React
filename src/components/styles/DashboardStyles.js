import styled from "styled-components";
import backgroundImage from "../../assets/background.jpg"; // Importar la imagen de fondo

export const DashboardContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #fff;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${backgroundImage});
  background-size: cover;
  z-index: -1;
`;
