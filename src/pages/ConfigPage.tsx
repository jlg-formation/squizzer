import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";

const ConfigPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/qrcode");
  };

  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8">
        <h2 className="mb-4 text-xl font-bold">Configuration du QCM</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Chapitre"
            className="block w-full rounded border border-black px-2 py-1"
          />
          <input
            type="number"
            placeholder="Nombre de questions"
            className="block w-full rounded border border-black px-2 py-1"
          />
          <input
            type="text"
            placeholder="Seed (aléatoire)"
            className="block w-full rounded border border-black px-2 py-1"
          />
          <button
            type="submit"
            className="w-full rounded border border-black bg-white px-4 py-2 font-mono hover:bg-gray-100"
          >
            Générer le QRCode
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default ConfigPage;
