import React from "react";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";

const ConfigPage: React.FC = () => {
  const navigate = useNavigate();
  const { config, setConfig } = useQcmConfigStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const chapter = (form.elements[0] as HTMLInputElement).value;
    const questionCount = Number((form.elements[1] as HTMLInputElement).value);
    const seed = (form.elements[2] as HTMLInputElement).value;
    setConfig({ chapter, questionCount, seed });
    navigate("/qrcode");
  };

  // Exemple d'accès aux chapitres du QCM (à adapter selon la logique de chargement réelle)
  // On suppose que la store contient un tableau config.chapters: { id: string, title: string }[]
  const chapters = config.chapters || [];

  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8">
        <h2 className="mb-4 text-xl font-bold">Configuration du QCM</h2>
        <div className="mb-4 text-center font-mono text-lg font-semibold">
          QCM sélectionné : {config.qcmTitle}
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <select
            className="block w-full rounded border border-black px-2 py-1"
            defaultValue={config.chapter}
            name="chapter"
          >
            <option value="">-- Choisir un chapitre --</option>
            {chapters.map((ch: { id: string; title: string }) => (
              <option key={ch.id} value={ch.title}>
                {ch.title}
              </option>
            ))}
          </select>
          <input
            type="number"
            placeholder="Nombre de questions"
            className="block w-full rounded border border-black px-2 py-1"
            defaultValue={config.questionCount}
          />
          <input
            type="text"
            placeholder="Seed (aléatoire)"
            className="block w-full rounded border border-black px-2 py-1"
            defaultValue={config.seed}
          />
          <ButtonPrimary type="submit" className="w-full">
            Générer le QRCode
          </ButtonPrimary>
        </form>
      </div>
    </Layout>
  );
};

export default ConfigPage;
