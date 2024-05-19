import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CasasDisponibles from "./components/CasasDisponibles";
import EspaciosComunes from "./components/EspaciosComunes";
import PagoAdministracion from "./components/PagoAdministracion";
import RecibosPago from "./components/RecibosPago";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === "admin" && password === "admin") {
      setIsAuthenticated(true);
    }
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            !isAuthenticated ? (
              <Login onLogin={handleLogin} />
            ) : (
              <Navigate to="/dashboard" />
            )
          }
        />
        <Route
          path="/dashboard/*"
          element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/dashboard/CasasDisponibles"
          element={<CasasDisponibles />}
        />
        <Route
          path="/dashboard/EspaciosComunes"
          element={<EspaciosComunes />}
        />
        <Route
          path="/dashboard/PagoAdministracion"
          element={<PagoAdministracion />}
        />
        <Route path="/dashboard/RecibosPago" element={<RecibosPago />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
