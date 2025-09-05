import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoadQcmPage from "./pages/LoadQcmPage";
import ConfigPage from "./pages/ConfigPage";
import QrcodePage from "./pages/QrcodePage";
import StagiaireHomePage from "./pages/StagiaireHomePage";
import QcmPassPage from "./pages/QcmPassPage";
import QcmSummaryPage from "./pages/QcmSummaryPage";
import QcmExplanationPage from "./pages/QcmExplanationPage";

const AppRouter: React.FC = () => (
  <BrowserRouter basename="/squizzer/">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/load-qcm" element={<LoadQcmPage />} />
      <Route path="/config" element={<ConfigPage />} />
      <Route path="/qrcode" element={<QrcodePage />} />
      {/* Routes stagiaire */}
      <Route path="/start" element={<StagiaireHomePage />} />
      <Route path="/qcm" element={<QcmPassPage />} />
      <Route path="/results" element={<QcmSummaryPage />} />
      <Route path="/explications" element={<QcmExplanationPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
