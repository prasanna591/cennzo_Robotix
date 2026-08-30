import * as THREE from "three";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";
import { GLTFExporter } from "three/addons/exporters/GLTFExporter.js";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";

class FakeElement {
  constructor() {
    this.style = {};
    this.children = [];
  }
  setAttribute() {}
  addEventListener() {}
  removeEventListener() {}
  appendChild(child) {
    this.children.push(child);
    return child;
  }
  set src(_value) {}
  get complete() {
    return false;
  }
}

globalThis.document = {
  createElementNS: () => new FakeElement(),
  createElement: () => new FakeElement(),
};

globalThis.FileReader = class FakeFileReader {
  async readAsArrayBuffer(blob) {
    this.result = await blob.arrayBuffer();
    this.onloadend?.();
  }
};

const [, , input, output] = process.argv;

if (!input || !output) {
  console.error("Usage: node scripts/convert-fbx.mjs <in.fbx> <out.glb>");
  process.exit(1);
}

const raw = readFileSync(input);
const buffer = raw.buffer.slice(raw.byteOffset, raw.byteOffset + raw.byteLength);
const loader = new FBXLoader();
const object = loader.parse(buffer, path.dirname(input));

const TEXTURE_SLOTS = [
  "map",
  "roughnessMap",
  "metalnessMap",
  "normalMap",
  "bumpMap",
  "aoMap",
  "emissiveMap",
  "alphaMap",
  "displacementMap",
  "lightMap",
  "envMap",
  "specularMap",
];

object.traverse((node) => {
  if (!node.isMesh) return;
  const materials = Array.isArray(node.material) ? node.material : [node.material];
  for (const material of materials) {
    if (!material) continue;
    for (const key of TEXTURE_SLOTS) {
      const texture = material[key];
      if (texture) {
        texture.dispose?.();
        material[key] = null;
      }
    }
  }
});

object.updateMatrixWorld(true);
const box = new THREE.Box3().setFromObject(object);
const size = box.getSize(new THREE.Vector3());
const center = box.getCenter(new THREE.Vector3());
console.log(
  `Bounds: ${size.x.toFixed(3)} x ${size.y.toFixed(3)} x ${size.z.toFixed(3)}`
);
console.log(`Center: ${center.x.toFixed(3)}, ${center.y.toFixed(3)}, ${center.z.toFixed(3)}`);
console.log(`Children: ${object.children.length}`);

const exporter = new GLTFExporter();
const glb = await exporter.parseAsync(object, { binary: true, embedImages: true });
const outPath = path.resolve(output);
writeFileSync(outPath, Buffer.from(glb));
console.log(`Wrote ${(glb.byteLength / 1024 / 1024).toFixed(1)} MB -> ${outPath}`);