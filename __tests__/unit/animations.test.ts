import { describe, it, expect } from "vitest";
import {
  DURATION,
  EASE,
  transitionFast,
  transitionStandard,
  transitionCinematic,
  fadeUp,
  fadeIn,
  scaleReveal,
  lineDraw,
  staggerContainer,
  viewportOnce,
  pageEnter,
  drawStroke,
  pulseDot,
} from "@/lib/animations";

describe("animation constants", () => {
  describe("DURATION", () => {
    it("has correct fast duration", () => {
      expect(DURATION.fast).toBe(0.22);
    });

    it("has correct standard duration", () => {
      expect(DURATION.standard).toBe(0.55);
    });

    it("has correct cinematic duration", () => {
      expect(DURATION.cinematic).toBe(1.1);
    });
  });

  describe("EASE", () => {
    it("has 4-element ease arrays", () => {
      expect(EASE.out).toHaveLength(4);
      expect(EASE.inOut).toHaveLength(4);
      expect(EASE.mechanical).toHaveLength(4);
    });

    it("values are between 0 and 1", () => {
      for (const ease of Object.values(EASE)) {
        for (const v of ease) {
          expect(v).toBeGreaterThanOrEqual(0);
          expect(v).toBeLessThanOrEqual(1);
        }
      }
    });
  });
});

describe("transition presets", () => {
  it("transitionFast uses fast duration", () => {
    expect(transitionFast.duration).toBe(DURATION.fast);
    expect(transitionFast.ease).toBe(EASE.out);
  });

  it("transitionStandard uses standard duration", () => {
    expect(transitionStandard.duration).toBe(DURATION.standard);
    expect(transitionStandard.ease).toBe(EASE.out);
  });

  it("transitionCinematic uses cinematic duration", () => {
    expect(transitionCinematic.duration).toBe(DURATION.cinematic);
    expect(transitionCinematic.ease).toBe(EASE.out);
  });
});

describe("variants", () => {
  it("fadeUp has hidden and visible states", () => {
    expect(fadeUp).toHaveProperty("hidden");
    expect(fadeUp).toHaveProperty("visible");
  });

  it("fadeUp hidden state has opacity 0 and y offset", () => {
    expect(fadeUp.hidden).toEqual({ opacity: 0, y: 32 });
  });

  it("fadeIn has hidden and visible states", () => {
    expect(fadeIn).toHaveProperty("hidden");
    expect(fadeIn).toHaveProperty("visible");
  });

  it("scaleReveal has hidden and visible states", () => {
    expect(scaleReveal).toHaveProperty("hidden");
    expect(scaleReveal).toHaveProperty("visible");
  });

  it("scaleReveal hidden starts slightly scaled up", () => {
    expect(scaleReveal.hidden).toEqual({ opacity: 0, scale: 1.05 });
  });

  it("lineDraw uses scaleX", () => {
    expect(lineDraw.hidden).toEqual({ scaleX: 0 });
  });

  it("pageEnter has hidden and visible states", () => {
    expect(pageEnter).toHaveProperty("hidden");
    expect(pageEnter).toHaveProperty("visible");
  });

  it("drawStroke works with custom delay parameter", () => {
    const visibleFn = drawStroke.visible as (i: number) => object;
    const result = visibleFn(2);
    expect(result).toHaveProperty("pathLength", 1);
    expect(result).toHaveProperty("opacity", 1);
  });

  it("pulseDot visible has repeat Infinity", () => {
    const visible = pulseDot.visible as Record<string, unknown>;
    expect(visible.transition).toHaveProperty("repeat", Infinity);
  });
});

describe("staggerContainer", () => {
  it("returns hidden and visible variants", () => {
    const variants = staggerContainer();
    expect(variants).toHaveProperty("hidden");
    expect(variants).toHaveProperty("visible");
  });

  it("uses default stagger value", () => {
    const variants = staggerContainer();
    const visible = variants.visible as Record<string, unknown>;
    const transition = visible.transition as Record<string, unknown>;
    expect(transition.staggerChildren).toBe(0.08);
    expect(transition.delayChildren).toBe(0);
  });

  it("accepts custom stagger and delay", () => {
    const variants = staggerContainer(0.15, 0.5);
    const visible = variants.visible as Record<string, unknown>;
    const transition = visible.transition as Record<string, unknown>;
    expect(transition.staggerChildren).toBe(0.15);
    expect(transition.delayChildren).toBe(0.5);
  });
});

describe("viewportOnce", () => {
  it("has correct viewport settings", () => {
    expect(viewportOnce).toEqual({ once: true, margin: "-12% 0px" });
  });
});
