"""Generate PWA icons from the app icon SVG using cairosvg or Pillow fallback."""
import os
import sys
from pathlib import Path

PUBLIC = Path(__file__).resolve().parent.parent / "public"
ICON_SVG = Path(__file__).resolve().parent.parent / "app" / "icon.svg"
SIZES = {"favicon-192.png": 192, "favicon-512.png": 512, "apple-touch-icon.png": 180}


def generate_with_cairosvg():
    import cairosvg
    for name, size in SIZES.items():
        out = PUBLIC / name
        cairosvg.svg2png(
            url=str(ICON_SVG),
            write_to=str(out),
            output_width=size,
            output_height=size,
        )
        print(f"Generated {name} ({size}x{size})")


def generate_with_pillow():
    from PIL import Image, ImageDraw
    for name, size in SIZES.items():
        img = Image.new("RGBA", (size, size), (11, 18, 32, 255))
        draw = ImageDraw.Draw(img)
        pad = size * 0.15
        r = size * 0.2
        accent = (0, 168, 168)
        gradient = (21, 94, 239)
        cx, cy = size * 0.55, size * 0.5
        draw.arc(
            [cx - r, cy - r, cx + r, cy + r],
            0, 300, fill=gradient, width=max(int(size * 0.06), 2),
        )
        dot_r = size * 0.04
        draw.ellipse(
            [cx + r * 0.9 - dot_r, cy - dot_r, cx + r * 0.9 + dot_r, cy + dot_r],
            fill=accent,
        )
        out = PUBLIC / name
        img.save(str(out), "PNG")
        print(f"Generated {name} ({size}x{size})")


if __name__ == "__main__":
    try:
        generate_with_cairosvg()
    except ImportError:
        print("cairosvg not available, trying Pillow...")
        try:
            generate_with_pillow()
        except ImportError:
            print("Neither cairosvg nor Pillow available.")
            print("Install one: pip install cairosvg  OR  pip install Pillow")
            sys.exit(1)
