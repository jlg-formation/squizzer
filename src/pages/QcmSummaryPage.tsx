import React from "react";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import { useQcmProgressStore } from "../store/qcmProgressStore";
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
  const data = [{ name: "Bonnes réponses", value: correctCount }];
  if (correctCount < totalQuestions) {
    data.push({
      name: "Mauvaises réponses",
      value: totalQuestions - correctCount,
    });
  }
  const COLORS = ["#22c55e", "#ef4444"];
  const handleShowExplanation = () => {
    navigate("/explications");
  };
  // ...existing code...
  const { resetProgress } = useQcmProgressStore();
  const handleRetry = () => {
    resetProgress();
    navigate("/qcm");
  };
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
        <h2 className="mb-4 text-xl font-bold">Résumé du QCM</h2>
        <div className="mb-6 text-lg font-semibold">
          Score final : {correctCount}/{totalQuestions}
        </div>
        <div className="mb-8 flex justify-center">
          <ResponsiveContainer width={300} height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={90}
                outerRadius={120}
                dataKey="value"
                // Pas de label texte dans le camembert
              >
                {data.map((_, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[idx]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
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
