import React from "react";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import { fetchQcmFile } from "../utils/fetchQcmFile";
import { useNavigate } from "react-router-dom";
import type { QcmQuestion, QcmChapter } from "../types/qcmFile";

// import { Link } from "react-router-dom"; // plus utilisé
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";
import { ArrowRight } from "lucide-react";

// ...existing code...
const PREDEFINED_QCMS = [
  {
    name: "QCM Réseaux",
    url: "https://raw.githubusercontent.com/jlg-formation/squizzer/refs/heads/master/public/reseaux.yaml",
  },
  {
    name: "QCM Linux",
    url: "https://raw.githubusercontent.com/jlg-formation/squizzer/refs/heads/master/public/linux.yaml",
  },
  {
    name: "QCM Sécurité",
    url: "https://raw.githubusercontent.com/jlg-formation/squizzer/refs/heads/master/public/securite.yaml",
  },
  {
    name: "QCM Deep Learning",
    url: "https://raw.githubusercontent.com/jlg-formation/squizzer/refs/heads/master/public/drn.yaml",
  },
  { name: "Autre", url: "" },
];

const LoadQcmPage: React.FC = () => {
  const [selectedQcm, setSelectedQcm] = React.useState<string>("");
  const [customUrl, setCustomUrl] = React.useState<string>("");
  const setConfig = useQcmConfigStore((s) => s.setConfig);
  const navigate = useNavigate();

  React.useEffect(() => {
    // Met à jour la config QCM à chaque changement d'URL ou de sélection
    const selected = PREDEFINED_QCMS.find((qcm) => qcm.url === customUrl);
    setConfig({
      url: customUrl,
      qcmTitle:
        selected && selected.name !== "Autre"
          ? selected.name
          : "QCM personnalisé",
    });
  }, [customUrl, setConfig]);

  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8">
        <h2 className="mb-4 text-xl font-bold">Choisis un QCM</h2>
        <p className="mb-4">
          Sélectionne un QCM prédéfini ou indique une URL :
        </p>
        <select
          className="mb-4 block w-full rounded border border-black px-2 py-1"
          value={selectedQcm}
          onChange={(e) => {
            setSelectedQcm(e.target.value);

            const selected = PREDEFINED_QCMS.find(
              (qcm) => qcm.url === e.target.value,
            );
            if (selected) {
              setCustomUrl(selected.url);
            }
          }}
        >
          <option value="">-- Choisir dans le catalogue --</option>
          {PREDEFINED_QCMS.map((qcm) => (
            <option key={qcm.url} value={qcm.url}>
              {qcm.name}
            </option>
          ))}
        </select>
        <input
          type="url"
          placeholder="URL du QCM (YAML)"
          value={customUrl}
          onChange={(e) => setCustomUrl(e.target.value)}
          className="block w-full rounded border border-black px-2 py-1"
        />
        <div className="my-6" />
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            if (!/^https?:\/\/.+\.(yaml|json)$/.test(customUrl)) return;
            try {
              const qcmData = await fetchQcmFile(customUrl);
              console.log("qcmData: ", qcmData);
              const chapters = (qcmData.chapters || []).map(
                (ch: Partial<QcmChapter>, idx: number) => ({
                  id: ch.id || String(idx),
                  title: ch.title || `Chapitre ${idx + 1}`,
                  questions: Array.isArray(ch.questions)
                    ? (ch.questions as QcmQuestion[])
                    : [],
                }),
              );
              setConfig({
                chapters,
                qcmTitle: qcmData.title,
                questions:
                  qcmData.chapters?.flatMap((ch: Partial<QcmChapter>) =>
                    Array.isArray(ch.questions)
                      ? (ch.questions as QcmQuestion[])
                      : [],
                  ) || [],
              });
              navigate("/config");
            } catch (err) {
              console.log("err: ", err);
              alert("Erreur lors du chargement du QCM");
            }
          }}
          className="block w-full"
        >
          <ButtonPrimary
            className="w-full"
            disabled={!/^https?:\/\/.+\.(yaml|json)$/.test(customUrl)}
            type="submit"
          >
            <ArrowRight className="mr-2 h-4 w-4" />
            Continuer
          </ButtonPrimary>
        </form>
      </div>
    </Layout>
  );
};

export default LoadQcmPage;
