import React from "react";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";

const QcmSummaryPage: React.FC = () => {
  // TODO: Afficher le score, le graphique et le bouton explications
  const handleShowExplanation = () => {
    // TODO: Naviguer vers la page d'explications
  };
  const handleRetry = () => {
    // TODO: Relancer le QCM avec la même config
  };
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
        <h2 className="mb-4 text-xl font-bold">Résumé du QCM</h2>
        {/* TODO: Afficher le score et le graphique */}
        <ButtonPrimary className="mb-2 w-full" onClick={handleShowExplanation}>
          Explications
        </ButtonPrimary>
        <ButtonPrimary className="w-full" onClick={handleRetry}>
          Refaire le QCM
        </ButtonPrimary>
      </div>
    </Layout>
  );
};

export default QcmSummaryPage;
