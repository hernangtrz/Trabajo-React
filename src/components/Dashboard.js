import React from "react";
import { DashboardContainer } from "./styles/DashboardStyles";
import Navbar from "./Navbar";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Navbar />
      <h2>Welcome to the Dashboard</h2>
    </DashboardContainer>
  );
};

export default Dashboard;
