"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import { useNaturalAspect } from "@/hooks/use-natural-aspect";

const FALLBACK_HEIGHT = 176;

export function MediaStrip({
  src,
  alt = "",
  sizes,
  className = "",
  style,
  children,
}: {
  src?: string;
  alt?: string;
  sizes: string;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  const natural = useNaturalAspect(src);

  return (
    <div
      className={`relative shrink-0 overflow-hidden ${className}`}
      style={{
        ...style,
        aspectRatio: natural ? `${natural}` : undefined,
        height: natural ? undefined : FALLBACK_HEIGHT,
      }}
    >
      {src && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className="object-contain object-center"
        />
      )}
      {children}
    </div>
  );
}