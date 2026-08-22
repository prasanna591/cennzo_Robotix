let segmenter: Intl.Segmenter | null | undefined;

function getSegmenter(): Intl.Segmenter | null {
  if (segmenter !== undefined) return segmenter;
  if (typeof Intl !== "undefined" && typeof Intl.Segmenter === "function") {
    segmenter = new Intl.Segmenter(undefined, { granularity: "grapheme" });
  } else {
    segmenter = null;
  }
  return segmenter;
}

export function splitGraphemes(text: string): string[] {
  const seg = getSegmenter();
  if (!seg) return Array.from(text);
  return Array.from(seg.segment(text), (s) => s.segment);
}
