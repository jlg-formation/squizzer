import React from "react";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";

const QcmExplanationPage: React.FC = () => {
  // TODO: Afficher le tableau récapitulatif des questions/réponses/explications
  const handleRetry = () => {
    // TODO: Relancer le QCM avec la même config
  };
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
        <h2 className="mb-4 text-xl font-bold">Explications du QCM</h2>
        {/* TODO: Tableau récapitulatif */}
        <ButtonPrimary className="mt-4 w-full" onClick={handleRetry}>
          Refaire le QCM
        </ButtonPrimary>
      </div>
    </Layout>
  );
};

export default QcmExplanationPage;
