import { describe, it, expect } from "bun:test";
import { selectQuestionsBySeed } from "./selectQuestionsBySeed";

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
