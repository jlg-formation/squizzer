import React from "react";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import type { QcmQuestion } from "../types/qcmFile";
import { useNavigate } from "react-router-dom";
import { useQcmProgressStore } from "../store/qcmProgressStore";
import { RotateCcw } from "lucide-react";

const QcmExplanationPage: React.FC = () => {
  const { resetProgress } = useQcmProgressStore();
  const navigate = useNavigate();
  // Affiche le tableau récapitulatif des questions/réponses/explications
  const { config } = useQcmConfigStore();
  const questions: QcmQuestion[] = config.questions || [];
  const userAnswers: number[] = Array.isArray(config.userAnswers)
    ? (config.userAnswers as number[])
    : [];
  const handleRetry = () => {
    resetProgress();
    navigate("/qcm");
  };
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
        <h2 className="mb-4 text-xl font-bold">Explications du QCM</h2>
        <div className="mb-8 text-left">
          <h3 className="mb-2 text-lg font-bold">Explications détaillées :</h3>
          <ul className="list-disc pl-6">
            {questions.map((q: QcmQuestion, idx: number) => {
              const isWrong = userAnswers[idx] !== q.correct;
              return (
                <li
                  key={q.id}
                  className="mb-2"
                  style={
                    isWrong
                      ? {
                          border: "2px solid #dc2626", // rouge-600
                          borderRadius: "0.5rem",
                          padding: "0.75rem",
                          background: "#fff1f1",
                        }
                      : {}
                  }
                >
                  <span className="font-semibold">
                    Q{idx + 1} : {q.question}
                  </span>
                  <br />
                  <span>
                    <span
                      className={
                        userAnswers[idx] === q.correct
                          ? "text-green-600"
                          : "text-red-600"
                      }
                    >
                      Votre réponse :{" "}
                      {typeof userAnswers[idx] === "number"
                        ? q.answers[userAnswers[idx]]
                        : "-"}
                    </span>
                    <br />
                    <span className="text-gray-700">
                      Bonne réponse : {q.answers[q.correct]}
                    </span>
                    {q.explanation && (
                      <>
                        <br />
                        <span className="text-gray-500">
                          Explication : {q.explanation}
                        </span>
                      </>
                    )}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
        <ButtonPrimary className="mt-4 w-full" onClick={handleRetry}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Refaire le QCM
        </ButtonPrimary>
      </div>
    </Layout>
  );
};

export default QcmExplanationPage;
