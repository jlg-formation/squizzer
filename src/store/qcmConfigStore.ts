import { create } from "zustand";
import type { QcmChapter } from "../types/qcmFile";

export interface QcmConfig {
  qcmTitle: string;
  chapter: string;
  questionCount: number;
  seed: string;
  url: string;
  chapters?: QcmChapter[];
  questions?: import("../types/qcmFile").QcmQuestion[];
  userAnswers?: number[];
}

interface QcmConfigState {
  config: QcmConfig;
  setConfig: (config: Partial<QcmConfig>) => void;
  resetConfig: () => void;
}

const defaultConfig: QcmConfig = {
  qcmTitle: "",
  chapter: "",
  questionCount: 10,
  seed: "hello",
  url: "",
  chapters: [],
};

export const useQcmConfigStore = create<QcmConfigState>((set) => ({
  config: defaultConfig,
  setConfig: (cfg) => set((state) => ({ config: { ...state.config, ...cfg } })),
  resetConfig: () => set({ config: defaultConfig }),
}));
