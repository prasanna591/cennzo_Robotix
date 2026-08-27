import { describe, it, expect } from "vitest";
import { splitGraphemes } from "@/lib/graphemes";

describe("splitGraphemes", () => {
  it("splits a simple ASCII string into individual characters", () => {
    const result = splitGraphemes("hello");
    expect(result).toEqual(["h", "e", "l", "l", "o"]);
  });

  it("splits an empty string into an empty array", () => {
    const result = splitGraphemes("");
    expect(result).toEqual([]);
  });

  it("handles single character strings", () => {
    const result = splitGraphemes("a");
    expect(result).toEqual(["a"]);
  });

  it("handles strings with spaces", () => {
    const result = splitGraphemes("hi there");
    expect(result).toEqual(["h", "i", " ", "t", "h", "e", "r", "e"]);
  });

  it("handles Unicode characters", () => {
    const result = splitGraphemes("日本");
    expect(result).toEqual(["日", "本"]);
  });

  it("handles emoji", () => {
    const result = splitGraphemes("🤖");
    expect(result).toEqual(["🤖"]);
  });

  it("handles mixed ASCII and Unicode", () => {
    const result = splitGraphemes("abc日本def");
    expect(result).toEqual(["a", "b", "c", "日", "本", "d", "e", "f"]);
  });

  it("handles Tamil script", () => {
    const result = splitGraphemes("வணக்கம்");
    expect(result.length).toBeGreaterThan(0);
  });
});
