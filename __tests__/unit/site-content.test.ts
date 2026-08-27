import { describe, it, expect } from "vitest";
import {
  PRIMARY_NAV,
  MOBILE_NAV,
  FOOTER_EXPLORE,
  FOOTER_COMPANY,
  FOOTER_LEGAL,
  ENVIRONMENTS,
  WAFEE_ATTRIBUTES,
  PRINCIPLES,
  TECHNOLOGY_SYSTEMS,
  APPLICATION_DOMAINS,
  REFERENCE_PLATFORM,
  WAFEE_CAPABILITIES,
  VALUES,
  PARTNER_TYPES,
  INDUSTRIES,
} from "@/lib/content/site";

describe("site content", () => {
  describe("PRIMARY_NAV", () => {
    it("has 5 navigation items", () => {
      expect(PRIMARY_NAV).toHaveLength(5);
    });

    it("each item has label and href", () => {
      for (const item of PRIMARY_NAV) {
        expect(item.label).toBeTruthy();
        expect(item.href).toBeTruthy();
        expect(item.href).toMatch(/^\//);
      }
    });
  });

  describe("MOBILE_NAV", () => {
    it("has more items than primary nav", () => {
      expect(MOBILE_NAV.length).toBeGreaterThan(PRIMARY_NAV.length);
    });

    it("starts with home link", () => {
      expect(MOBILE_NAV[0].href).toBe("/");
    });
  });

  describe("FOOTER_EXPLORE", () => {
    it("has navigation items", () => {
      expect(FOOTER_EXPLORE.length).toBeGreaterThan(0);
    });
  });

  describe("FOOTER_COMPANY", () => {
    it("has navigation items", () => {
      expect(FOOTER_COMPANY.length).toBeGreaterThan(0);
    });
  });

  describe("FOOTER_LEGAL", () => {
    it("has legal links", () => {
      expect(FOOTER_LEGAL.length).toBeGreaterThan(0);
    });

    it("all link to /legal", () => {
      for (const item of FOOTER_LEGAL) {
        expect(item.href).toMatch(/^\/legal/);
      }
    });
  });

  describe("ENVIRONMENTS", () => {
    it("has 5 environments", () => {
      expect(ENVIRONMENTS).toHaveLength(5);
    });

    it("has expected environment names", () => {
      const names = ENVIRONMENTS.map((e) => e.name);
      expect(names).toContain("Earth");
      expect(names).toContain("Water");
      expect(names).toContain("Fire");
      expect(names).toContain("Air");
      expect(names).toContain("Space");
    });

    it("each has id, index, name, domain, description, status", () => {
      for (const env of ENVIRONMENTS) {
        expect(env.id).toBeTruthy();
        expect(env.index).toBeTruthy();
        expect(env.name).toBeTruthy();
        expect(env.domain).toBeTruthy();
        expect(env.description).toBeTruthy();
        expect(env.status).toBeTruthy();
      }
    });
  });

  describe("WAFEE_ATTRIBUTES", () => {
    it("has attributes", () => {
      expect(WAFEE_ATTRIBUTES.length).toBeGreaterThan(0);
    });
  });

  describe("PRINCIPLES", () => {
    it("has 4 principles", () => {
      expect(PRINCIPLES).toHaveLength(4);
    });

    it("each has index, title, description", () => {
      for (const p of PRINCIPLES) {
        expect(p.index).toBeTruthy();
        expect(p.title).toBeTruthy();
        expect(p.description).toBeTruthy();
      }
    });
  });

  describe("TECHNOLOGY_SYSTEMS", () => {
    it("has 8 systems", () => {
      expect(TECHNOLOGY_SYSTEMS).toHaveLength(8);
    });

    it("each has id, index, name, summary", () => {
      for (const sys of TECHNOLOGY_SYSTEMS) {
        expect(sys.id).toBeTruthy();
        expect(sys.index).toBeTruthy();
        expect(sys.name).toBeTruthy();
        expect(sys.summary).toBeTruthy();
      }
    });
  });

  describe("APPLICATION_DOMAINS", () => {
    it("has application domains", () => {
      expect(APPLICATION_DOMAINS.length).toBeGreaterThan(0);
    });
  });

  describe("REFERENCE_PLATFORM", () => {
    it("has platform specs", () => {
      expect(REFERENCE_PLATFORM.length).toBeGreaterThan(0);
    });

    it("each has label, value, note", () => {
      for (const spec of REFERENCE_PLATFORM) {
        expect(spec.label).toBeTruthy();
        expect(spec.value).toBeTruthy();
        expect(spec.note).toBeTruthy();
      }
    });
  });

  describe("WAFEE_CAPABILITIES", () => {
    it("has 6 capabilities", () => {
      expect(WAFEE_CAPABILITIES).toHaveLength(6);
    });

    it("each has index, name, description", () => {
      for (const cap of WAFEE_CAPABILITIES) {
        expect(cap.index).toBeTruthy();
        expect(cap.name).toBeTruthy();
        expect(cap.description).toBeTruthy();
      }
    });
  });

  describe("VALUES", () => {
    it("has values", () => {
      expect(VALUES.length).toBeGreaterThan(0);
    });

    it("each has title and description", () => {
      for (const v of VALUES) {
        expect(v.title).toBeTruthy();
        expect(v.description).toBeTruthy();
      }
    });
  });

  describe("PARTNER_TYPES", () => {
    it("has partner types", () => {
      expect(PARTNER_TYPES.length).toBeGreaterThan(0);
    });

    it("each has index, title, description", () => {
      for (const p of PARTNER_TYPES) {
        expect(p.index).toBeTruthy();
        expect(p.title).toBeTruthy();
        expect(p.description).toBeTruthy();
      }
    });
  });

  describe("INDUSTRIES", () => {
    it("has industries", () => {
      expect(INDUSTRIES.length).toBeGreaterThan(0);
    });
  });
});
