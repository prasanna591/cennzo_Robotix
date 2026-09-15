import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Cennzo Robotix",
    short_name: "Cennzo",
    description:
      "Intelligent machines for the real world. Meet WAFEE — the unified multi-environment humanoid platform",
    start_url: "/",
    display: "standalone",
    background_color: "#f7f8fa",
    theme_color: "#f7f8fa",
    icons: [
      {
        src: "/icon.png",
        sizes: "245x239",
        type: "image/png",
      },
    ],
  };
}
