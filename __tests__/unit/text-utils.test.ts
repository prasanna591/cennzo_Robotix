import { describe, it, expect } from "vitest";
import { parseWord } from "@/lib/text-utils";

describe("parseWord", () => {
  it("returns accent tone for words wrapped in asterisks", () => {
    const result = parseWord("*innovate*");
    expect(result).toEqual({ text: "innovate", tone: "text-accent" });
  });

  it("returns teal tone for words wrapped in tildes", () => {
    const result = parseWord("~future~");
    expect(result).toEqual({ text: "future", tone: "text-teal" });
  });

  it("returns empty tone for plain words", () => {
    const result = parseWord("robotics");
    expect(result).toEqual({ text: "robotics", tone: "" });
  });

  it("treats 2-char asterisk words as accented (>2 check is on length)", () => {
    const result = parseWord("*hi*");
    expect(result).toEqual({ text: "hi", tone: "text-accent" });
  });

  it("treats 2-char tilde words as teal (>2 check is on length)", () => {
    const result = parseWord("~ok~");
    expect(result).toEqual({ text: "ok", tone: "text-teal" });
  });

  it("handles empty string", () => {
    const result = parseWord("");
    expect(result).toEqual({ text: "", tone: "" });
  });

  it("handles single character", () => {
    const result = parseWord("a");
    expect(result).toEqual({ text: "a", tone: "" });
  });

  it("handles unmatched asterisks", () => {
    const result = parseWord("*hello");
    expect(result).toEqual({ text: "*hello", tone: "" });
  });

  it("handles unmatched tildes", () => {
    const result = parseWord("~world");
    expect(result).toEqual({ text: "~world", tone: "" });
  });

  it("handles mixed markers", () => {
    const result = parseWord("*test~");
    expect(result).toEqual({ text: "*test~", tone: "" });
  });
});
