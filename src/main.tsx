import React from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import SpendAccounting from './pages/SpendAccounting/SpendAccounting';
import Homepage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import DeclareObjects from './pages/Declare/DeclareObjects';
import IncomeAccounting from './pages/IncomeAccounting/IncomeAccounting';
import DetailReport from './pages/DetailReport/DetailReport';
import SynthesisReport from './pages/SynthesisReport/SynthesisReport';
import DeclareAssets from './pages/Declare/DeclareAssets';
import DeclareIncomeSpending from './pages/Declare/DeclareIncomeSpending';

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />}>
          <Route index element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/detailreport" element={<DetailReport />} />
          <Route path="/synthesisreport" element={<SynthesisReport />} />
          <Route path="/declare/assets" element={<DeclareAssets />} />
          <Route path="/declare/incomeandspending" element={<DeclareIncomeSpending />} />
          <Route path="/declare/objects" element={<DeclareObjects />} />
          <Route path="/incomeaccounting/:id" element={<IncomeAccounting />} />
          <Route path="/spendaccounting/:id" element={<SpendAccounting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  )
