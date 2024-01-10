import { useState } from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { DashBoardPage } from "./components/Pages/DashboardPage/DashBoardPage";
import { UsersPage } from "./components/Pages/UsersPage/UsersPage";
import { PlansPage } from "./components/Pages/PlansPage/PlansPage";
import { InsurancePage } from "./components/Pages/InsurancePage/InsurancePage";
import { ProductsPage } from "./components/Pages/ProductsPage/ProductsPage";
import { EstablishmentPage } from "./components/Pages/EstablishmentPage/EstablishmentPage";
import { CoveragePage } from "./components/Pages/CoveragePage/CoveragePage";
import { IncidentsPage } from "./components/Pages/IncidentsPage/IncidentsPage";
import { LoginPage } from "./components/Pages/LoginPage/LoginPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/insurance" element={<InsurancePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/establishment" element={<EstablishmentPage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/coverage" element={<CoveragePage />} />
          <Route path="/plans" element={<PlansPage />} />
          <Route path="/incidents" element={<IncidentsPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
