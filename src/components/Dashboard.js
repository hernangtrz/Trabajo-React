import React from "react";
import {
  DashboardContainer,
  BackgroundImage,
  Title,
  Subtitle,
} from "./styles/DashboardStyles";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <BackgroundImage />
      <Navbar />
      <div>
        <Title>
          <h2>Bienvenido a CONCERNET</h2>
        </Title>
        <Subtitle>
          <p>Gestión de espacios y administración de un conjunto cerrado</p>
        </Subtitle>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
