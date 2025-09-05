import React from "react";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";

const StagiaireHomePage: React.FC = () => {
  const handleStart = () => {
    // TODO: Naviguer vers la page de passage du QCM
  };
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
        <h2 className="mb-4 text-xl font-bold">Bienvenue sur le QCM</h2>
        <ButtonPrimary className="w-full" onClick={handleStart}>
          Commencer
        </ButtonPrimary>
      </div>
    </Layout>
  );
};

export default StagiaireHomePage;
