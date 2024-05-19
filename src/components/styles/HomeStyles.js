import styled from "styled-components";
import background from "../../assets/background.jpg";

export const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  background-image: url(${background});
  background-size: cover;
  z-index: -1;
`;
