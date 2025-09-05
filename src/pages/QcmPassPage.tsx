import React from "react";
import { useQcmProgressStore } from "../store/qcmProgressStore";
import { useQcmConfigStore } from "../store/qcmConfigStore";
import Layout from "../layout/Layout";
import ButtonPrimary from "../components/ButtonPrimary";

const QcmPassPage: React.FC = () => {
  const { currentQuestion, totalQuestions } = useQcmProgressStore();
  const { config } = useQcmConfigStore();
  const [selected, setSelected] = React.useState<string | null>(null);
  const [hovered, setHovered] = React.useState<string | null>(null);
  // Utilise directement les questions sélectionnées depuis le store config
  const questions = config.questions || [];
  const currentQ = questions[currentQuestion - 1];
  const handleChoice = (choice: string) => setSelected(choice);
  return (
    <Layout>
      <div className="mx-auto max-w-xl rounded-md border border-black bg-white p-8 text-center">
        <h2 className="mb-4 text-xl font-bold">
          Question {currentQuestion}/{totalQuestions}
        </h2>
        {currentQ && (
          <>
            <div className="mb-6 text-lg font-semibold">{currentQ.text}</div>
            <div className="mb-8 flex flex-col items-start justify-center gap-4">
              {currentQ.choices.map((choice) => {
                const isSelected = selected === choice.id;
                const isHovered = hovered === choice.id;
                let bg = "bg-white";
                if (isSelected) bg = "bg-gray-300";
                else if (isHovered) bg = "bg-gray-100";
                return (
                  <label
                    key={choice.id}
                    className={`flex cursor-pointer items-center rounded-md border border-gray-300 px-4 py-2 text-lg transition-colors duration-150 ${bg}`}
                    onMouseEnter={() => setHovered(choice.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    <input
                      type="radio"
                      name="qcm-choice"
                      value={choice.id}
                      checked={isSelected}
                      onChange={() => handleChoice(choice.id)}
                      className="mr-3 h-5 w-5 accent-gray-800"
                    />
                    {choice.text}
                  </label>
                );
              })}
            </div>
          </>
        )}
        <ButtonPrimary className="w-full text-lg">Valider &rarr;</ButtonPrimary>
      </div>
    </Layout>
  );
};

export default QcmPassPage;
