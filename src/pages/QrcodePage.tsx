import React from "react";
import { QRCodeSVG } from "qrcode.react";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import { Copy } from "lucide-react";

const QrcodePage: React.FC = () => {
  const { config } = useQcmConfigStore();
  // Générer l'URL du QCM à partir de la config et de la base du site
  // Combine le domaine + protocole + base Vite
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const baseUrl = import.meta.env.BASE_URL || "/";
  const qcmUrl = `${origin}${baseUrl}start?chapter=${encodeURIComponent(config.chapter)}&count=${config.questionCount}&seed=${encodeURIComponent(config.seed)}&fileUrl=${encodeURIComponent(config.url || "")}`;
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(qcmUrl);
      // Optionnel : afficher une notification ou feedback
    } catch {
      // Optionnel : gérer l'erreur
    }
  };
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-gray-200 bg-white p-8 text-center shadow-sm transition-colors duration-150 dark:border-gray-700 dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">QR Code d'accès au QCM</h2>
        <div
          className="mb-4 flex w-full items-center justify-center rounded border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900"
          style={{ minHeight: 240 }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: 320,
              aspectRatio: "1 / 1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <QRCodeSVG
              value={qcmUrl}
              width="100%"
              height="100%"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
        <input
          type="text"
          value={qcmUrl}
          readOnly
          className="mb-4 block w-full rounded border border-gray-300 bg-white px-2 py-1 font-mono text-gray-900 transition-colors duration-150 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100"
        />
        <ButtonPrimary className="w-full" onClick={handleCopy}>
          <Copy className="mr-2 h-4 w-4" />
          Copier le lien
        </ButtonPrimary>
      </div>
    </Layout>
  );
};

export default QrcodePage;
