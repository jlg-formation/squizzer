import type { QcmQuestion } from "../types/qcmFile";

/**
 * Sélectionne de façon déterministe {count} questions aléatoire d'un chapitre donné, selon un seed.
 *
 * @param questions Toutes les questions du QCM
 * @param chapterId L'id du chapitre
 * @param count Nombre de questions à sélectionner
 * @param seed Chaîne de seed
 * @returns Tableau de questions
 */
export function selectQuestionsBySeed(
  questions: QcmQuestion[],
  count: number,
  seed: string,
): QcmQuestion[] {
  // Shuffle déterministe
  const seededRandom = mulberry32(hashCode(seed));
  const result: QcmQuestion[] = [];
  const usedIndices = new Set<number>();
  while (result.length < Math.min(count, questions.length)) {
    const idx = Math.floor(seededRandom() * questions.length);
    if (!usedIndices.has(idx)) {
      usedIndices.add(idx);
      result.push(questions[idx]);
    }
  }
  return result;
}

/**
 * Mélange les réponses d'une question de façon déterministe selon un seed.
 * Met à jour l'index de la bonne réponse en conséquence.
 *
 * @param question La question à traiter
 * @param seed Chaîne de seed pour le mélange déterministe
 * @returns Une nouvelle question avec les réponses mélangées
 */
export function shuffleQuestionAnswers(
  question: QcmQuestion,
  seed: string,
): QcmQuestion {
  // Créer un seed spécifique pour cette question
  const questionSeed = `${seed}-${question.id}`;
  const seededRandom = mulberry32(hashCode(questionSeed));

  // Créer une copie des réponses avec leurs indices originaux
  const answersWithIndices = question.answers.map((answer, index) => ({
    answer,
    originalIndex: index,
  }));

  // Mélange déterministe (Fisher-Yates shuffle)
  const shuffled = [...answersWithIndices];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(seededRandom() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Trouver le nouvel index de la bonne réponse
  const newCorrectIndex = shuffled.findIndex(
    (item) => item.originalIndex === question.correct,
  );

  return {
    ...question,
    answers: shuffled.map((item) => item.answer),
    correct: newCorrectIndex,
  };
}

/**
 * Sélectionne et mélange les questions selon un seed.
 * Combine la sélection aléatoire de questions avec le mélange des réponses.
 *
 * @param questions Toutes les questions du chapitre
 * @param count Nombre de questions à sélectionner
 * @param seed Chaîne de seed pour la randomisation
 * @returns Tableau de questions sélectionnées avec réponses mélangées
 */
export function selectAndShuffleQuestions(
  questions: QcmQuestion[],
  count: number,
  seed: string,
): QcmQuestion[] {
  // Sélectionner les questions
  const selectedQuestions = selectQuestionsBySeed(questions, count, seed);

  // Mélanger les réponses de chaque question
  return selectedQuestions.map((question) =>
    shuffleQuestionAnswers(question, seed),
  );
}

// Hash simple pour seed string -> number
function hashCode(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return hash >>> 0;
}

// PRNG mulberry32
function mulberry32(a: number) {
  return function () {
    let t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
