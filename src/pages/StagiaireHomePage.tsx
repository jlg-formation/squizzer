import React from "react";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";
import { useQcmConfigStore } from "../store/qcmConfigStore";

const StagiaireHomePage: React.FC = () => {
  const { config, setConfig } = useQcmConfigStore();
  React.useEffect(() => {
    // Récupère les paramètres de la query string
    const params = new URLSearchParams(window.location.search);
    const chapter = params.get("chapter") || "";
    const count = params.get("count") || "10";
    const seed = params.get("seed") || "";
    const url = params.get("fileUrl") || "";

    // Fetch le fichier QCM pour récupérer le titre
    const fetchTitle = async () => {
      let qcmTitle = "QCM";
      if (url) {
        try {
          const res = await fetch(url);
          const text = await res.text();
          if (url.endsWith(".yaml")) {
            const yamlModule = await import("yaml");
            const data = yamlModule.default.parse(text);
            qcmTitle = data.title || qcmTitle;
          } else if (url.endsWith(".json")) {
            const data = JSON.parse(text);
            qcmTitle = data.title || qcmTitle;
          }
        } catch {
          // ignore fetch error, fallback to default title
        }
      }
      setConfig({ chapter, questionCount: Number(count), seed, url, qcmTitle });
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
