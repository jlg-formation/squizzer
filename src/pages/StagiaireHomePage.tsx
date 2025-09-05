import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import { fetchQcmFile } from "../utils/fetchQcmFile";
import { selectQuestionsBySeed } from "../utils/selectQuestionsBySeed";
import { useQcmProgressStore } from "../store/qcmProgressStore";
import type { QcmQuestion } from "../types/qcmFile";
import { sleep } from "../utils/sleep";

const StagiaireHomePage: React.FC = () => {
  const hasFetched = React.useRef(false);
  const [loading, setLoading] = React.useState(true);
  const { config, setConfig } = useQcmConfigStore();
  const setTotalQuestions = useQcmProgressStore(
    (state) => state.setTotalQuestions,
  );
  const resetProgress = useQcmProgressStore((state) => state.resetProgress);
  const navigate = useNavigate();
  React.useEffect(() => {
    console.log("effect", hasFetched.current);
    if (hasFetched.current) return;
    hasFetched.current = true;
    console.log("Fetching QCM data...");
    // Récupère les paramètres de la query string
    const params = new URLSearchParams(window.location.search);
    const chapter = params.get("chapter") || "";
    const count = params.get("count") || "10";
    const seed = params.get("seed") || "";
    const url = params.get("fileUrl") || "";

    (async () => {
      await sleep(2000);
      const qcmData = await fetchQcmFile(url);
      const totalQuestions = Number(count);
      // Récupère les questions du chapitre sélectionné
      let selectedQuestions: QcmQuestion[] = [];
      if (qcmData.raw && qcmData.raw.chapters) {
        const chapterObj = qcmData.raw.chapters.find(
          (ch) => ch.title === chapter,
        );
        const chapterQuestions = chapterObj?.questions || [];

        selectedQuestions = selectQuestionsBySeed(
          chapterQuestions,
          totalQuestions,
          seed,
        );
      }
      setConfig({
        chapter,
        questionCount: totalQuestions,
        seed,
        url,
        qcmTitle: qcmData.title || "QCM",
        questions: selectedQuestions,
      });
      setTotalQuestions(totalQuestions);
      resetProgress();
      setLoading(false);
      console.log("QCM config loaded:", {
        chapter,
        questionCount: totalQuestions,
        seed,
        url,
        qcmTitle: qcmData.title || "QCM",
        questions: selectedQuestions,
      });
    })();
  }, [setConfig, setTotalQuestions, resetProgress]);

  const handleStart = () => {
    // Naviguer vers la page de passage du QCM
    navigate("/qcm");
  };
  return (
    <Layout>
      {loading ? (
        <div className="mx-auto max-w-xl animate-pulse rounded-md border border-black bg-white p-8 text-center">
          <div className="mb-6 text-xl font-bold text-gray-700">
            Chargement...
          </div>
          <div className="mx-auto mb-4 h-8 w-1/2 rounded bg-gray-200" />
          <div className="mx-auto mb-2 h-6 w-1/3 rounded bg-gray-100" />
          <div className="mt-8 h-12 w-full rounded bg-gray-100" />
        </div>
      ) : (
        <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
          <h2 className="mb-4 text-xl font-bold">{config.qcmTitle || "QCM"}</h2>
          <div className="mb-2 text-lg font-semibold">
            Chapitre : {config.chapter || ""}
          </div>
          <ButtonPrimary className="w-full" onClick={handleStart}>
            Commencer
          </ButtonPrimary>
        </div>
      )}
    </Layout>
  );
};

export default StagiaireHomePage;
