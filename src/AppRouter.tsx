import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoadQcmPage from "./pages/LoadQcmPage";
import ConfigPage from "./pages/ConfigPage";
import QrcodePage from "./pages/QrcodePage";

const AppRouter: React.FC = () => (
  <BrowserRouter basename="/squizzer/">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/load-qcm" element={<LoadQcmPage />} />
      <Route path="/config" element={<ConfigPage />} />
      <Route path="/qrcode" element={<QrcodePage />} />
      {/* Ajout des routes stagiaire plus tard */}
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
