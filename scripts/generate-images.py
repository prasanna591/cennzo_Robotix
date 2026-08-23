"""Generate all 21 site images with SDXL 1.0 on local GPU (compact <=70-token prompts)."""
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
    ("img-01-wafee-platform", 1680, 720, 101,
     S("full-body hero pose standing on dark reflective studio floor, low camera angle, strong blue rim light, faint engineering grid")),
    ("img-02-extreme-environments", 1680, 720, 102,
     S("tiny figure crossing vast volcanic fissure landscape at dusk, glowing lava cracks in black basalt, drifting ash, teal ambient light")),
    ("img-03-lab", 1280, 720, 103,
     S("torso mounted open on assembly stand in night robotics lab, engineer seen from behind adjusting its forearm, glowing telemetry monitors bokeh")),
    ("img-04-sensory-closeup", 1280, 720, 104,
     S("extreme macro close-up of visor head, glowing teal sensor slit, machined hex fasteners, softbox strip reflection, black falloff")),
    ("img-05-system-architecture", 1680, 720, 105,
     "technical side-profile x-ray diagram of white armored humanoid robot, glowing chest compute core and actuator chains, thin blueprint leader lines to abstract unlabeled markers, hairline circuit traces on dark graphite, flat even lighting, premium engineering poster, no text"),
    ("img-06-mission-configs", 1680, 720, 106,
     S("three copies on pedestals in dark showroom: left tall sensor mast, center clean, right heat-shielded heavy gripper, teal blue amber bay lighting")),
    ("img-d1-inspection", 1152, 864, 201,
     S("inspecting factory pipework from gantry catwalk, wrist scanner projecting thin teal scan plane onto pipes, amber sodium work lights")),
    ("img-d2-energy", 1152, 864, 202,
     S("standing before transformer stacks in night substation, sweeping orange beacon light, rain-slick reflective ground, venting steam")),
    ("img-d3-disaster", 1152, 864, 203,
     S("searching collapsed concrete building, flashlight beam cutting thick dust clouds, twisted rebar silhouettes, grey monochrome rubble")),
    ("img-d4-fire", 1152, 864, 204,
     S("wearing silver heat-shielded shroud facing burning refinery flare, swirling ember particles, flames reflecting off shield, heavy smoke")),
    ("img-d5-marine", 1152, 864, 205,
     S("gripping handrail on offshore wind platform deck in gale, sea spray bursting over railing, giant turbine nacelle beyond, steel-blue grade")),
    ("img-d6-mining", 1152, 864, 206,
     S("beside large drilling rig in underground mine tunnel, white headlamp beams cutting through floating rock dust, rails vanishing into darkness")),
    ("img-d7-logistics", 1152, 864, 207,
     S("walking dark automated warehouse aisle between towering racks, cool LED strip rows receding in perspective, small mobile robots in background")),
    ("img-d8-defense", 1152, 864, 208,
     S("on desert proving-ground berm at dawn beside antenna mast and range marker flags, distant dust column, desaturated olive grade, no weapons")),
    ("img-d9-space", 1152, 864, 209,
     S("tethered on lunar surface inspecting solar array panel, harsh sunlight casting pitch-black shadows, star field and small blue Earth")),
    ("img-09-industrial-floor", 1680, 720, 110,
     S("mid-stride across busy factory floor between CNC cells and AGV lanes, motion-blurred forklift far left, distant workers in PPE from behind")),
    ("img-10-digital-twin", 1280, 720, 111,
     S("split frame vertical light seam: robot on treadmill rig in dark lab left, glowing teal wireframe digital twin mirroring pose in holographic grid right")),
    ("img-11-test-chamber", 1280, 720, 112,
     S("viewed through round observation window, strapped into vibration test rig amid illuminated dust cloud, frost on one side amber heat lamps on other, condensation on glass")),
    ("img-12-culture", 1280, 720, 113,
     S("candid scene of team gathered around bright workshop bench examining its forearm module, seen from behind, whiteboard sketches, plants, golden window light")),
    ("img-13-ecosystem", 1680, 720, 114,
     S("on central pedestal encircled by six floating frosted-glass panels etched abstract icons, luminous arcs, constellation dots black void")),
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

