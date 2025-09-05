import React from "react";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";

const QcmPassPage: React.FC = () => {
  // TODO: Afficher la question courante, gérer la réponse et la navigation
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
        <h2 className="mb-4 text-xl font-bold">Question 1/XX</h2>
        {/* TODO: Afficher la question et les choix */}
        <ButtonPrimary className="mt-4 w-full">Suivante</ButtonPrimary>
      </div>
    </Layout>
  );
};

export default QcmPassPage;
