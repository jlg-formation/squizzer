import React from "react";
import { useQcmProgressStore } from "../store/qcmProgressStore";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";
import { useNavigate } from "react-router-dom";

const QcmPassPage: React.FC = () => {
  const { currentQuestion, totalQuestions, setCurrentQuestion } =
    useQcmProgressStore();
  const navigate = useNavigate();
  const { config } = useQcmConfigStore();
  const [selected, setSelected] = React.useState<number | null>(null);
  // Removed hovered state, use TailwindCSS hover: classes instead
  // Utilise directement les questions sélectionnées depuis le store config
  const questions = config.questions || [];
  const currentQ = questions[currentQuestion - 1];
  console.log("currentQ: ", currentQ);
  const handleChoice = (choice: number) => setSelected(choice);
  const handleValidate = () => {
    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
      setSelected(null);
    } else {
      navigate("/results");
    }
  };
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
        <h2 className="mb-4 text-xl font-bold">
          Question {currentQuestion}/{totalQuestions}
        </h2>
        {currentQ && Array.isArray(currentQ.answers) && (
          <>
            <div className="mb-6 text-lg font-semibold">
              {currentQ.question}
            </div>
            <div className="mb-8 flex flex-col items-start justify-center gap-4">
              {currentQ.answers.map((answer, idx) => {
                const isSelected = selected === idx;
                return (
                  <label
                    key={idx}
                    className={`flex cursor-pointer items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-lg transition-colors duration-150 hover:bg-gray-100 ${isSelected ? "bg-gray-300" : ""}`}
                  >
                    <input
                      type="radio"
                      name="qcm-choice"
                      value={idx}
                      checked={isSelected}
                      onChange={() => handleChoice(idx)}
                      className="mr-3 h-5 w-5 accent-gray-800"
                    />
                    {answer}
                  </label>
                );
              })}
            </div>
          </>
        )}
        <ButtonPrimary className="w-full text-lg" onClick={handleValidate}>
          Valider &rarr;
        </ButtonPrimary>
      </div>
    </Layout>
  );
};

export default QcmPassPage;
