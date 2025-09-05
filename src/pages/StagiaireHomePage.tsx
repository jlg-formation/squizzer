import React from "react";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import { fetchQcmFile } from "../utils/fetchQcmFile";

const StagiaireHomePage: React.FC = () => {
  const { config, setConfig } = useQcmConfigStore();
  React.useEffect(() => {
    // Récupère les paramètres de la query string
    const params = new URLSearchParams(window.location.search);
    const chapter = params.get("chapter") || "";
    const count = params.get("count") || "10";
    const seed = params.get("seed") || "";
    const url = params.get("fileUrl") || "";

    // Utilise l'utilitaire pour charger le titre
    const fetchTitle = async () => {
      const qcmData = await fetchQcmFile(url);
      setConfig({
        chapter,
        questionCount: Number(count),
        seed,
        url,
        qcmTitle: qcmData.title || "QCM",
      });
    };
    fetchTitle();
  }, [setConfig]);

  const handleStart = () => {
    // TODO: Naviguer vers la page de passage du QCM
  };
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
        <h2 className="mb-4 text-xl font-bold">{config.qcmTitle || "QCM"}</h2>
        <div className="mb-2 text-lg font-semibold">
          Chapitre : {config.chapter || ""}
        </div>
        <ButtonPrimary className="w-full" onClick={handleStart}>
          Commencer
        </ButtonPrimary>
      </div>
    </Layout>
  );
};

export default StagiaireHomePage;
