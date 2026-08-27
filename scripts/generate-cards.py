"""Generate additional card images for HorizontalShowcase, environments, capabilities, platform."""
import os
import sys
import time

import torch
from diffusers import StableDiffusionXLPipeline

OUT = r"C:\Users\AIC_PECF WS1\Desktop\cennzo\public\images"
os.makedirs(OUT, exist_ok=True)

NEG = (
    "text, watermark, logo, visible human faces, crowd, glossy toy plastic, "
    "cyberpunk neon city, oversaturated colors, white background, cartoon, "
    "anime, extra limbs, distorted hands, blurry, low quality"
)

WAFEE = (
    "matte white armored humanoid robot, smooth visor head with glowing "
    "teal slit, exposed dark joints with amber rings, "
    "glowing blue backpack core"
)

STYLE = (
    "photorealistic cinematic lighting, high detail, dark graphite palette, "
    "electric blue accents"
)


def S(scene):
    return f"{scene}, {WAFEE}, {STYLE}"


SLOTS = [
    # --- 4 PRINCIPLE CARDS (WhySection / HorizontalShowcase) - portrait 864x1152 ---
    ("img-p1-human-compatible", 864, 1152, 301,
     S("robot carefully lifting a human-sized wrench in a factory, gentle precise motion, soft warm workshop lighting, tools on wall rack")),
    ("img-p2-modular", 864, 1152, 302,
     S("robot torso with chest panel open revealing swappable module slots, glowing connection points, dark engineering bench")),
    ("img-p3-intelligent", 864, 1152, 303,
     S("robot standing in dark room surrounded by floating holographic sensor data rings and scan planes, teal light patterns on floor")),
    ("img-p4-resilient", 864, 1152, 304,
     S("robot standing firm in heavy rain and wind on industrial rooftop, water streaming off armor panels, lightning flash in clouds")),

    # --- 5 ENVIRONMENT CARDS (EnvironmentsSection) - landscape 1408x896 to match panel ---
    ("img-env-earth", 1408, 896, 311,
     S("humanoid center frame facing camera, head and visor clearly visible, industrial pipe network behind, steam vents, workers background")),
    ("img-env-water", 1408, 896, 312,
     S("humanoid center frame facing camera, head and visor clearly visible, wet steel deck of offshore platform behind, waves, grey storm sky")),
    ("img-env-fire", 1408, 896, 313,
     S("humanoid center frame facing camera, head and visor clearly visible, glowing furnace of steel mill behind, molten sparks, dark interior")),
    ("img-env-air", 1408, 896, 314,
     S("humanoid center frame facing camera, head and visor clearly visible, high-rise scaffolding at sunset behind, city lights, safety cables")),
    ("img-env-space", 1408, 896, 315,
     S("humanoid center frame facing camera, head and visor clearly visible, spacecraft interior behind, Earth seen through round window")),

    # --- 6 CAPABILITY CARDS (WAFEE page TiltCards) - square 864x864 ---
    ("img-cap-mobility", 864, 864, 321,
     S("dynamic walking pose mid-stride on rough rocky terrain, one foot lifted, balance arm extended, dust particles")),
    ("img-cap-manipulation", 864, 864, 322,
     S("close-up of robotic hand gripping a standard industrial drill, fingers wrapped around handle, precision grip detail")),
    ("img-cap-perception", 864, 864, 323,
     S("head close-up with visible sensor arrays activating, teal scan beams radiating outward, data overlay effect")),
    ("img-cap-autonomy", 864, 864, 324,
     S("standing independently in empty warehouse corridor, path planning visualization on floor, decision confidence indicators")),
    ("img-cap-teleoperation", 864, 864, 325,
     S("mirroring human operator pose in split view, operator in VR headset on left, robot duplicating gesture on right")),
    ("img-cap-collaboration", 864, 864, 326,
     S("working alongside a workbench with scattered tools and parts, organizing components, workshop setting with pegboard wall")),

    # --- 5 WAFEE MISSION DOMAIN CARDS (WAFEE page HorizontalShowcase) - portrait 864x1152 ---
    ("img-wd-earth", 864, 1152, 331,
     S("surveying damage in earthquake-destroyed urban area, collapsed buildings, dust clouds, rescue operations")),
    ("img-wd-water", 864, 1152, 332,
     S("submerged chest-deep in murky water inside flooded tunnel, waterproof armor sealed, sonar pulses radiating")),
    ("img-wd-fire", 864, 1152, 333,
     S("entering burning building doorway, flames licking ceiling, heat shield active, thermal camera glow on visor")),
    ("img-wd-air", 864, 1152, 334,
     S("ascending external staircase on communications tower, extreme height, clouds at eye level, wind buffeting")),
    ("img-wd-space", 864, 1152, 335,
     S("walking on Martian surface with red dust, small habitat module in background, two moons in orange sky")),

    # --- 2 PLATFORM IMAGES (Platform page ModuleList panels) - portrait 864x1152 ---
    ("img-plat-core", 864, 1152, 341,
     S("exploded view showing internal structure: skeleton frame, actuator groups, compute board, power cells, sensor ring, all floating apart")),
    ("img-plat-modules", 864, 1152, 342,
     S("four mission module variants on display pedestals: inspection sensor head, thermal gripper, underwater sealed arm, heavy-duty clamp")),

    # --- 4 INDUSTRY CARDS (Industries HorizontalShowcase) - portrait 864x1152 ---
    ("img-ind-manufacturing", 864, 1152, 351,
     S("operating CNC machine interface on factory floor, sparks from cutting tool, precision metal parts on conveyor")),
    ("img-ind-energy", 864, 1152, 352,
     S("inspecting high-voltage transformer bank at power plant, arc flash protection gear, dramatic electrical infrastructure")),
    ("img-ind-mining", 864, 1152, 353,
     S("descending into open-pit mine on haul truck, terraced rock walls, heavy equipment, dusty atmosphere")),
    ("img-ind-construction", 864, 1152, 354,
     S("assisting on active construction site, steel beam structure rising, crane overhead, urban skyline in distance")),

    # --- additional INDUSTRY CARDS - portrait 864x1152 ---
    ("img-ind-utilities", 864, 1152, 361,
     S("monitoring electrical substation control equipment at night, glowing indicator panels, rows of gear cabinets, floodlight towers")),
    ("img-ind-oilgas", 864, 1152, 362,
     S("walking between storage tanks and process pipes in oil refinery twilight, flare stack glowing orange at distance, steam vents")),
    ("img-ind-logistics", 864, 1152, 363,
     S("working beside package sorting conveyor in bright modern warehouse, parcel flows on belts, barcode scanners flashing")),
    ("img-ind-marine", 864, 1152, 364,
     S("standing on container ship deck with cranes at dockside, shipping containers stacked, harbor cranes silhouetted at dusk")),
    ("img-ind-infrastructure", 864, 1152, 365,
     S("inspecting steel truss of highway bridge from maintenance catwalk, traffic light trails far below, cable nets, wind yane")),
    ("img-ind-government", 864, 1152, 366,
     S("coordinator at emergency operations table with large wall display, mission briefing room, rescue robots visible on screen")),
    ("img-ind-space", 864, 1152, 367,
     S("standing beside launchpad gantry at dawn facing distant rocket on pad, vapor clouds drifting, floodlights, clear sky")),
]


def main():
    only = sys.argv[1:] if len(sys.argv) > 1 else None

    def log(msg):
        print(msg, flush=True)

    def load(mode):
        kw = dict(dtype=torch.float16, variant="fp16", use_safetensors=True)
        p = StableDiffusionXLPipeline.from_pretrained(
            "stabilityai/stable-diffusion-xl-base-1.0", **kw
        )
        if mode == "gpu":
            p = p.to("cuda")
        else:
            p.enable_model_cpu_offload()
        p.vae.enable_slicing()
        p.vae.enable_tiling()
        p.set_progress_bar_config(disable=True)
        return p

    free_b, total_b = torch.cuda.mem_get_info()
    free_gb = free_b / 1024**3
    mode = "gpu" if free_gb >= 7.0 else "offload"
    log(f"VRAM free {free_gb:.1f} GB -> mode={mode}")

    pipe = load(mode)

    done = 0
    for name, w, h, seed, prompt in SLOTS:
        if only and not any(o in name for o in only):
            continue
        real_tok = len(pipe.tokenizer(prompt)["input_ids"])
        flag = "  << TOO LONG" if real_tok > 75 else ""
        path = os.path.join(OUT, f"{name}.webp")
        if os.path.exists(path):
            log(f"skip {name}")
            continue
        t0 = time.time()
        try:
            img = pipe(
                prompt=prompt,
                negative_prompt=NEG,
                width=w,
                height=h,
                num_inference_steps=30,
                guidance_scale=6.0,
                generator=torch.Generator("cuda").manual_seed(seed),
            ).images[0]
        except Exception as e:
            log(f"RETRY {name} after error: {type(e).__name__}: {str(e)[:200]}")
            del pipe
            torch.cuda.empty_cache()
            mode = "offload"
            pipe = load(mode)
            img = pipe(
                prompt=prompt,
                negative_prompt=NEG,
                width=w,
                height=h,
                num_inference_steps=30,
                guidance_scale=6.0,
                generator=torch.Generator("cuda").manual_seed(seed),
            ).images[0]
        img.save(path, "WEBP", quality=82)
        kb = os.path.getsize(path) // 1024
        log(f"OK {name}.webp {kb}KB tokens={real_tok}{flag} {time.time()-t0:.0f}s mode={mode}")
        done += 1

    log(f"generated {done}")


if __name__ == "__main__":
    main()
