import React from "react";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";

const QrcodePage: React.FC = () => (
  <Layout>
    <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
      <h2 className="mb-4 text-xl font-bold">QR Code d'accès au QCM</h2>
      <div className="mb-4 flex h-40 w-full items-center justify-center border border-black bg-gray-50">
        [QR CODE]
      </div>
      <input
        type="text"
        value="https://squizzer.com/quizz?..."
        readOnly
        className="mb-4 block w-full rounded border border-black px-2 py-1 font-mono"
      />
      <ButtonPrimary className="w-full">Copier le lien</ButtonPrimary>
    </div>
  </Layout>
);

export default QrcodePage;
