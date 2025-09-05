/**
 * Fetches a QCM file (YAML or JSON) and returns its parsed content.
 * @param url URL of the QCM file
 * @returns Promise<{ title?: string; chapters?: any[]; raw?: any }>
 */
export async function fetchQcmFile(
  url: string,
): Promise<{ title?: string; chapters?: any[]; raw?: any }> {
  if (!url) return {};
  try {
    const res = await fetch(url);
    const text = await res.text();
    if (url.endsWith(".yaml")) {
      const yamlModule = await import("yaml");
      const data = yamlModule.default.parse(text);
      return { title: data.title, chapters: data.chapters, raw: data };
    } else if (url.endsWith(".json")) {
      const data = JSON.parse(text);
      return { title: data.title, chapters: data.chapters, raw: data };
    }
    return {};
  } catch {
    return {};
  }
}
