import React from "react";

import { Link } from "react-router-dom";
import ButtonPrimary from "../components/ButtonPrimary";
import Layout from "../layout/Layout";
import { Play } from "lucide-react";

const HomePage: React.FC = () => (
  <Layout>
    <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8">
      <h2 className="mb-4 text-2xl font-bold">Configure ton QCM</h2>
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
