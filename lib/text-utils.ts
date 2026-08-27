export function parseWord(word: string): { text: string; tone: string } {
  if (word.length > 2 && word.startsWith("*") && word.endsWith("*")) {
    return { text: word.slice(1, -1), tone: "text-accent" };
  }
  if (word.length > 2 && word.startsWith("~") && word.endsWith("~")) {
    return { text: word.slice(1, -1), tone: "text-teal" };
  }
  return { text: word, tone: "" };
}
