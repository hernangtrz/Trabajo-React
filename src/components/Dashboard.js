import React from "react";
import { DashboardContainer, BackgroundImage } from "./styles/DashboardStyles";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <BackgroundImage />
      <Navbar />
      <div>
        <h2>Bienvenido a CONCERNET</h2>
        <p>Gestión de espacios y administración de un conjunto cerrado</p>
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
