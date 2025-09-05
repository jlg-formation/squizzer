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
  chapterId: string;
  text: string;
  choices: QcmChoice[];
  answer: string; // id de la bonne réponse
  explanation?: string;
}

export interface QcmChoice {
  id: string;
  text: string;
}
