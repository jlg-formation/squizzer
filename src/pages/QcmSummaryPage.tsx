import React from "react";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import type { QcmQuestion } from "../types/qcmFile";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";

const QcmSummaryPage: React.FC = () => {
  const navigate = useNavigate();
  const { config } = useQcmConfigStore();
  // On suppose que les réponses de l'utilisateur sont stockées dans config.userAnswers: number[]
  // et que config.questions contient les questions tirées
  const questions: QcmQuestion[] = config.questions || [];
  // Typage strict : userAnswers est optionnel dans config
  const userAnswers: number[] = Array.isArray(config.userAnswers)
    ? (config.userAnswers as number[])
    : [];
  const totalQuestions = questions.length;
  const correctCount = questions.reduce(
    (acc, q, idx) => acc + (userAnswers[idx] === q.correct ? 1 : 0),
    0,
  );
  const data = [
    { name: "Bonnes réponses", value: correctCount },
    { name: "Mauvaises réponses", value: totalQuestions - correctCount },
  ];
  const COLORS = ["#22c55e", "#ef4444"];
  const handleShowExplanation = () => {
    navigate("/explications");
  };
  const handleRetry = () => {
    // Reset la progression et les réponses utilisateur
    window.location.href = "/qcm";
  };
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
        <h2 className="mb-4 text-xl font-bold">Résumé du QCM</h2>
        <div className="mb-6 text-lg font-semibold">
          Score final : {correctCount}/{totalQuestions}
        </div>
        <div className="mb-8 flex justify-center">
          <ResponsiveContainer width={200} height={200}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                dataKey="value"
                label={({ name, percent }) =>
                  `${name}: ${percent !== undefined ? (percent * 100).toFixed(0) : 0}%`
                }
              >
                {data.map((_, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mb-8 text-left">
          <h3 className="mb-2 text-lg font-bold">Explications détaillées :</h3>
          <ul className="list-disc pl-6">
            {questions.map((q, idx) => (
              <li key={q.id} className="mb-2">
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
            ))}
          </ul>
        </div>
        <ButtonPrimary className="mb-2 w-full" onClick={handleShowExplanation}>
          Explications
        </ButtonPrimary>
        <ButtonPrimary className="w-full" onClick={handleRetry}>
          Refaire le QCM
        </ButtonPrimary>
      </div>
    </Layout>
  );
};

export default QcmSummaryPage;
