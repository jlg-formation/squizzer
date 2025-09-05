/**
 * Sleep for a given number of milliseconds.
 * @param ms Number of milliseconds to wait
 * @returns Promise<void>
 */
export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
