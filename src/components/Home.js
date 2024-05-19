import React from "react";
import {
  HomeContainer,
  Title,
  Subtitle,
  BackgroundImage,
} from "./styles/HomeStyles";

const Home = () => {
  return (
    <HomeContainer>
      <Title>CONCERNET</Title>
      <Subtitle>
        Gestión de espacios y administración de un conjunto cerrado
      </Subtitle>
      <BackgroundImage />
    </HomeContainer>
  );
};

export default Home;
