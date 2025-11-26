import React from "react";

import { Link } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import Layout from "../layout/Layout";
import { Play } from "lucide-react";

const HomePage: React.FC = () => (
  <Layout>
    <div className="mx-auto max-w-xl rounded-md border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-150 dark:border-gray-700 dark:bg-gray-800">
      <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">Configure ton QCM</h2>
      <p className="mb-6">
        Bienvenue sur Squizzer ! Commence par configurer ton QCM pour la
        formation.
      </p>
      <Link to="/load-qcm" className="block w-full">
        <ButtonPrimary className="w-full">
          <Play className="mr-2 h-4 w-4" />
          Commencer
        </ButtonPrimary>
      </Link>
    </div>
  </Layout>
);

export default HomePage;
