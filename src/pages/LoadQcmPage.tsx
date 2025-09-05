import React from "react";

import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

// ...existing code...
const PREDEFINED_QCMS = [
  { name: "QCM Réseaux", url: "https://squizzer.com/qcm/reseaux.json" },
  { name: "QCM Linux", url: "https://squizzer.com/qcm/linux.yaml" },
  { name: "QCM Sécurité", url: "https://squizzer.com/qcm/securite.json" },
];

const LoadQcmPage: React.FC = () => {
  const [selectedQcm, setSelectedQcm] = React.useState<string>("");
  const [customUrl, setCustomUrl] = React.useState<string>("");

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
          onChange={(e) => setSelectedQcm(e.target.value)}
        >
          <option value="">-- Choisir dans le catalogue --</option>
          {PREDEFINED_QCMS.map((qcm) => (
            <option key={qcm.url} value={qcm.url}>
              {qcm.name}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="URL du QCM (JSON ou YAML)"
          className="mb-4 block w-full rounded border border-black px-2 py-1"
          value={customUrl}
          onChange={(e) => setCustomUrl(e.target.value)}
        />
        <Link
          to="/config"
          className="block w-full rounded border border-black bg-white px-4 py-2 text-center font-mono hover:bg-gray-100"
        >
          Continuer
        </Link>
      </div>
    </Layout>
  );
};

export default LoadQcmPage;
