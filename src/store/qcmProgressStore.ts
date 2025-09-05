import { create } from "zustand";

interface QcmProgressState {
  currentQuestion: number;
  totalQuestions: number;
  setCurrentQuestion: (index: number) => void;
  setTotalQuestions: (count: number) => void;
  resetProgress: () => void;
}

export const useQcmProgressStore = create<QcmProgressState>((set) => ({
  currentQuestion: 1,
  totalQuestions: 1,
  setCurrentQuestion: (index) => set({ currentQuestion: index }),
  setTotalQuestions: (count) => set({ totalQuestions: count }),
  resetProgress: () => set({ currentQuestion: 1 }),
}));
