/**
 * Interface TypeScript pour le modèle de données QCM (JSON/YAML)
 */
export interface QcmFile {
  title: string;
  chapters: QcmChapter[];
}

export interface QcmChapter {
  id: string;
  title: string;
  questions: QcmQuestion[];
}

export interface QcmQuestion {
  id: string;
  question: string;
  answers: string[];
  correct: number;
  explanation?: string;
}

export interface QcmChoice {
  id: string;
  text: string;
}
