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
