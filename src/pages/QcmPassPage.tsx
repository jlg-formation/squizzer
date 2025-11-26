import React from "react";
import { useQcmProgressStore } from "../store/qcmProgressStore";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";
import ButtonSecondary from "../components/ButtonSecondary";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const QcmPassPage: React.FC = () => {
  const { currentQuestion, totalQuestions, setCurrentQuestion } =
    useQcmProgressStore();
  const navigate = useNavigate();
  const { config, setConfig } = useQcmConfigStore();
  const [selected, setSelected] = React.useState<number | null>(null);
  // Removed hovered state, use TailwindCSS hover: classes instead
  // Utilise directement les questions sélectionnées depuis le store config
  const questions = config.questions || [];
  const currentQ = questions[currentQuestion - 1];
  const handleChoice = (choice: number) => setSelected(choice);
  const handleValidate = () => {
    // Enregistre la réponse dans userAnswers (selected est toujours un number ici)
    if (typeof selected === "number") {
      const prevAnswers = Array.isArray(config.userAnswers)
        ? [...config.userAnswers]
        : [];
      prevAnswers[currentQuestion - 1] = selected;
      setConfig({ userAnswers: prevAnswers });
    }
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      navigate("/results");
    }
  };
  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
      setSelected(null);
    }
  };

  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-gray-200 bg-white p-8 text-center shadow-sm transition-colors duration-150 dark:border-gray-700 dark:bg-gray-800">
        <div className="mb-2 text-left">
          <ButtonSecondary
            className="text-base"
            onClick={handlePrevious}
            disabled={currentQuestion === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Précédent
          </ButtonSecondary>
        </div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-gray-100">
          Question {currentQuestion}/{totalQuestions}
        </h2>
        {currentQ && Array.isArray(currentQ.answers) && (
          <>
            <div className="mb-6 text-lg font-semibold text-gray-900 dark:text-gray-100">
              {currentQ.question}
            </div>
            <div className="mb-8 flex flex-col items-start justify-center gap-4">
              {currentQ.answers.map((answer, idx) => {
                const isSelected = selected === idx;
                return (
                  <label
                    key={idx}
                    className={`flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-lg transition-colors duration-150 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-900 dark:hover:bg-gray-800 ${isSelected ? "bg-gray-200 dark:bg-gray-700" : ""}`}
                  >
                    <input
                      type="radio"
                      name="qcm-choice"
                      value={idx}
                      checked={isSelected}
                      onChange={() => handleChoice(idx)}
                      className="mr-3 h-5 w-5 accent-gray-800 dark:accent-gray-200"
                    />
                    {answer}
                  </label>
                );
              })}
            </div>
          </>
        )}
        <div className="flex gap-4">
          <ButtonPrimary
            className="w-full text-lg"
            onClick={handleValidate}
            disabled={selected === null}
          >
            Valider
            <ArrowRight className="ml-2 h-4 w-4" />
          </ButtonPrimary>
        </div>
      </div>
    </Layout>
  );
};

export default QcmPassPage;
