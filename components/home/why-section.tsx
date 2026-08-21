"use client";

import { HorizontalShowcase } from "@/components/sections/horizontal-showcase";
import { PRINCIPLES } from "@/lib/content/site";

const ITEMS = PRINCIPLES.map((principle) => ({
  title: principle.title,
  tag: principle.index,
  body: principle.description,
}));

export function WhySection() {
  return (
    <HorizontalShowcase
      eyebrow="Why Cennzo"
      lines={["Built For The Mission,", "Not The ~Demo.~"]}
      items={ITEMS}
    >
      <p className="mt-6 max-w-2xl text-body leading-relaxed text-mist">
        Cennzo Robotix approaches humanoid robotics as a systems-engineering
        problem. Mechanical design, actuation, power, thermal management,
        sensing, control, AI, communications, materials and safety cannot be
        developed independently — so we design WAFEE as{" "}
        <span className="font-semibold text-bone">one integrated system</span>,
        where every subsystem contributes to mission performance.
      </p>
    </HorizontalShowcase>
  );
}
