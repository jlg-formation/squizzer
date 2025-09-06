import React, { useEffect, useState } from "react";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import { useQcmProgressStore } from "../store/qcmProgressStore";
import type { QcmQuestion } from "../types/qcmFile";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import { FileText, RotateCcw } from "lucide-react";
import Confetti from "react-confetti";

const QcmSummaryPage: React.FC = () => {
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(true);

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
  // Arrêter les confettis après 5 secondes et jouer le son selon la tranche de score
  useEffect(() => {
    const scorePercent =
      totalQuestions > 0 ? (correctCount / totalQuestions) * 100 : 0;
    let soundFile = "audio/score-low.mp3";
    if (scorePercent === 100) soundFile = "audio/score-perfect.mp3";
    else if (scorePercent >= 80) soundFile = "audio/score-high.mp3";
    else if (scorePercent >= 50) soundFile = "audio/score-medium.mp3";
    // Joue le son correspondant
    const audio = new Audio(soundFile);
    audio.play();

    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [correctCount, totalQuestions]);
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
      {showConfetti && correctCount / totalQuestions >= 0.8 && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={1200}
          recycle={false}
          colors={["#22c55e", "#8b5cf6", "#06b6d4", "#f59e0b", "#ef4444"]}
          gravity={0.3}
        />
      )}
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
          <FileText className="mr-2 h-4 w-4" />
          Explications
        </ButtonPrimary>
        <ButtonSecondary className="w-full" onClick={handleRetry}>
          <RotateCcw className="mr-2 h-4 w-4" />
          Refaire le QCM
        </ButtonSecondary>
      </div>
    </Layout>
  );
};

export default QcmSummaryPage;
