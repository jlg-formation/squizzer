import { describe, it, expect } from "bun:test";
import {
  selectQuestionsBySeed,
  shuffleQuestionAnswers,
  selectAndShuffleQuestions,
} from "./selectQuestionsBySeed";

// Exemple de questions conformes à QcmQuestion
const questions = [
  {
    id: "1",
    question: "Question 1",
    answers: ["A", "B", "C"],
    correct: 0,
  },
  {
    id: "2",
    question: "Question 2",
    answers: ["D", "E", "F"],
    correct: 1,
  },
  {
    id: "3",
    question: "Question 3",
    answers: ["G", "H", "I"],
    correct: 2,
  },
  {
    id: "4",
    question: "Question 4",
    answers: ["J", "K", "L"],
    correct: 0,
  },
];

describe("selectQuestionsBySeed", () => {
  it("should return the same selection for the same seed", () => {
    const seed = "abc123";
    const result1 = selectQuestionsBySeed(questions, 2, seed);
    const result2 = selectQuestionsBySeed(questions, 2, seed);
    expect(result1).toEqual(result2);
  });

  it("should return different selections for different seeds", () => {
    const result1 = selectQuestionsBySeed(questions, 2, "seed1");
    const result2 = selectQuestionsBySeed(questions, 2, "seed2");
    expect(result1).not.toEqual(result2);
  });

  it("should not select more questions than available", () => {
    const result = selectQuestionsBySeed(questions, 10, "abc");
    expect(result.length).toBeLessThanOrEqual(questions.length);
  });

  it("should return an empty array if count is 0", () => {
    const result = selectQuestionsBySeed(questions, 0, "abc");
    expect(result).toEqual([]);
  });

  it("should return an array of length equal to count if count <= questions.length", () => {
    const count = 3;
    const result = selectQuestionsBySeed(questions, count, "seed42");
    expect(result.length).toBe(count);
  });

  it("should return an array of length equal to questions.length if count > questions.length", () => {
    const count = questions.length + 5;
    const result = selectQuestionsBySeed(questions, count, "seed99");
    expect(result.length).toBe(questions.length);
  });
});

describe("shuffleQuestionAnswers", () => {
  const question = {
    id: "test-q1",
    question: "Test question",
    answers: ["Answer A", "Answer B", "Answer C", "Answer D"],
    correct: 2,
  };

  it("should shuffle answers deterministically with the same seed", () => {
    const seed = "test-seed";
    const result1 = shuffleQuestionAnswers(question, seed);
    const result2 = shuffleQuestionAnswers(question, seed);

    expect(result1.answers).toEqual(result2.answers);
    expect(result1.correct).toBe(result2.correct);
  });

  it("should produce different results with different seeds", () => {
    const result1 = shuffleQuestionAnswers(question, "seed1");
    const result2 = shuffleQuestionAnswers(question, "seed2");
    const result3 = shuffleQuestionAnswers(question, "seed3");

    // Au moins une des comparaisons devrait être différente
    const sameOrder12 = result1.answers.every(
      (answer, index) => answer === result2.answers[index],
    );
    const sameOrder13 = result1.answers.every(
      (answer, index) => answer === result3.answers[index],
    );
    const sameOrder23 = result2.answers.every(
      (answer, index) => answer === result3.answers[index],
    );

    // Au moins deux des trois résultats devraient être différents
    const allSame = sameOrder12 && sameOrder13 && sameOrder23;
    expect(allSame).toBe(false);
  });

  it("should maintain the correct answer index after shuffle", () => {
    const seed = "test-seed";
    const result = shuffleQuestionAnswers(question, seed);

    // La bonne réponse devrait toujours être "Answer C"
    expect(result.answers[result.correct]).toBe("Answer C");
  });

  it("should preserve all original answers", () => {
    const seed = "test-seed";
    const result = shuffleQuestionAnswers(question, seed);

    // Toutes les réponses originales devraient être présentes
    for (const originalAnswer of question.answers) {
      expect(result.answers).toContain(originalAnswer);
    }
    expect(result.answers.length).toBe(question.answers.length);
  });

  it("should handle questions with different numbers of answers", () => {
    const questionWith2Answers = {
      id: "test-q2",
      question: "Test question with 2 answers",
      answers: ["True", "False"],
      correct: 1,
    };

    const seed = "test-seed";
    const result = shuffleQuestionAnswers(questionWith2Answers, seed);

    expect(result.answers.length).toBe(2);
    expect(result.answers[result.correct]).toBe("False");
  });
});

describe("selectAndShuffleQuestions", () => {
  it("should select and shuffle questions deterministically", () => {
    const seed = "test-seed";
    const count = 2;

    const result1 = selectAndShuffleQuestions(questions, count, seed);
    const result2 = selectAndShuffleQuestions(questions, count, seed);

    expect(result1).toEqual(result2);
    expect(result1.length).toBe(count);
  });

  it("should shuffle answers in selected questions", () => {
    const seed = "test-seed";
    const count = 1;

    const result = selectAndShuffleQuestions(questions, count, seed);

    // Vérifier que la question sélectionnée a bien ses réponses mélangées
    expect(result.length).toBe(1);
    const selectedQuestion = result[0];

    // La bonne réponse devrait toujours pointer vers le bon texte
    const originalQuestion = questions.find(
      (q) => q.id === selectedQuestion.id,
    );
    if (originalQuestion) {
      expect(selectedQuestion.answers[selectedQuestion.correct]).toBe(
        originalQuestion.answers[originalQuestion.correct],
      );
    }
  });
});
