import React from "react";

import { Link } from "react-router-dom";
import Layout from "../layout/Layout";

const LoadQcmPage: React.FC = () => (
  <Layout>
    <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8">
      <h2 className="mb-4 text-xl font-bold">Choisis un QCM</h2>
      <p className="mb-4">
        Charge un fichier QCM (JSON ou YAML) ou donne une URL :
      </p>
      <input
        type="file"
        className="mb-4 block w-full rounded border border-black px-2 py-1"
      />
      <input
        type="text"
        placeholder="URL du QCM"
        className="mb-4 block w-full rounded border border-black px-2 py-1"
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

export default LoadQcmPage;
