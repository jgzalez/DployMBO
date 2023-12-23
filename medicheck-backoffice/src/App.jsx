import { useState } from "react";
import { DashBoardPage } from "./components/DashBoardPage";
import { UsersPage } from "./components/UsersPage";
import { PlansPage } from "./components/PlansPage";
import { InsurancePage } from "./components/InsurancePage";
import { ProductsPage } from "./components/ProductsPage";
import { EstablishmentPage } from "./components/EstablishmentPage";
import { CoveragePage } from "./components/CoveragePage";
import { IncidentsPage } from "./components/IncidentsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/dashboard" element={<DashBoardPage />} />
          <Route path="/" element={<InsurancePage />} />
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
