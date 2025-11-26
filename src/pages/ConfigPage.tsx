import React from "react";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";
import { QrCode } from "lucide-react";

const ConfigPage: React.FC = () => {
  const navigate = useNavigate();
  const { config, setConfig } = useQcmConfigStore();
  const [formData, setFormData] = React.useState({
    chapter: config.chapter || "",
    questionCount: config.questionCount || 10,
    seed: config.seed || "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setConfig(formData);
    navigate("/qrcode");
  };

  // Exemple d'accès aux chapitres du QCM (à adapter selon la logique de chargement réelle)
  // On suppose que la store contient un tableau config.chapters: { id: string, title: string }[]
  const chapters = config.chapters || [];

  // Vérifier si tous les champs requis sont remplis
  const isFormValid = formData.chapter !== "" && formData.questionCount > 0;

  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-gray-200 bg-white p-8 shadow-sm transition-colors duration-150 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">Configuration du QCM</h2>
        <div className="mb-4 text-center font-mono text-lg font-semibold text-gray-900 dark:text-gray-100">
          QCM sélectionné : {config.qcmTitle}
        </div>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <select
            className="block w-full rounded border border-gray-300 bg-white px-2 py-1 text-gray-900 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            value={formData.chapter}
            name="chapter"
            onChange={(e) =>
              setFormData({ ...formData, chapter: e.target.value })
            }
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
            className="block w-full rounded border border-gray-300 bg-white px-2 py-1 text-gray-900 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            value={formData.questionCount}
            min="1"
            onChange={(e) =>
              setFormData({
                ...formData,
                questionCount: Number(e.target.value),
              })
            }
          />
          <input
            type="text"
            placeholder="Seed (aléatoire)"
            className="block w-full rounded border border-gray-300 bg-white px-2 py-1 text-gray-900 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
            value={formData.seed}
            onChange={(e) => setFormData({ ...formData, seed: e.target.value })}
          />
          <ButtonPrimary
            type="submit"
            className="w-full"
            disabled={!isFormValid}
          >
            <QrCode className="mr-2 h-4 w-4" />
            Générer le QRCode
          </ButtonPrimary>
        </form>
      </div>
    </Layout>
  );
};

export default ConfigPage;
