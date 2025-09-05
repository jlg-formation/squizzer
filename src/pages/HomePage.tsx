import React from "react";

import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const HomePage: React.FC = () => (
  <Layout>
    <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8">
      <h2 className="mb-4 text-2xl font-bold">Configure ton QCM</h2>
      <p className="mb-6">
        Bienvenue sur Squizzer ! Commence par configurer ton QCM pour la
        formation.
      </p>
      <Link
        to="/load-qcm"
        className="block w-full rounded border border-black bg-white px-4 py-2 text-center font-mono hover:bg-gray-100"
      >
        Commencer
      </Link>
    </div>
  </Layout>
);

export default HomePage;
