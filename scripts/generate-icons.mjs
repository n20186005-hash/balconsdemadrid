// Generates PWA/app icons (pure Node, no dependencies) using a minimal PNG encoder.
// Design: Balcóns de Madrid brand mark — dark green sky gradient, sand sun,
// two mountain silhouettes and a winding teal river (the Sil canyon).
//
// Usage: node scripts/generate-icons.mjs
import { deflateSync } from 'node:zlib';
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));

/* ------------------------------ PNG encoder ------------------------------ */
const CRC_TABLE = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c >>> 0;
  }
  return t;
})();

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) c = CRC_TABLE[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
}

function chunk(type, data) {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, 'ascii');
  const crcBuf = Buffer.alloc(4);
  crcBuf.writeUInt32BE(crc32(Buffer.concat([typeBuf, data])), 0);
  return Buffer.concat([len, typeBuf, data, crcBuf]);
}

function encodePNG(width, height, rgba) {
  const raw = Buffer.alloc(height * (1 + width * 4));
  for (let y = 0; y < height; y++) {
    const rowStart = y * (1 + width * 4);
    raw[rowStart] = 0; // filter: none
    rgba.copy(raw, rowStart + 1, y * width * 4, (y + 1) * width * 4);
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; // bit depth
  ihdr[9] = 6; // color type: RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/* -------------------------------- Drawing -------------------------------- */
const lerp = (a, b, t) => a + (b - a) * t;
const lerpColor = (c1, c2, t) => [
  Math.round(lerp(c1[0], c2[0], t)),
  Math.round(lerp(c1[1], c2[1], t)),
  Math.round(lerp(c1[2], c2[2], t)),
];

function inCircle(x, y, cx, cy, r) {
  const dx = x - cx;
  const dy = y - cy;
  return dx * dx + dy * dy <= r * r;
}

function pointInTriangle(x, y, ax, ay, bx, by, cx, cy) {
  const d1 = (x - bx) * (ay - by) - (ax - bx) * (y - by);
  const d2 = (x - cx) * (by - cy) - (bx - cx) * (y - cy);
  const d3 = (x - ax) * (cy - ay) - (cx - ax) * (y - ay);
  const hasNeg = d1 < 0 || d2 < 0 || d3 < 0;
  const hasPos = d1 > 0 || d2 > 0 || d3 > 0;
  return !(hasNeg && hasPos);
}

const BG_TOP = [26, 64, 45]; // #1a402d
const BG_BOTTOM = [13, 32, 20]; // #0d2014
const SUN = [232, 223, 209]; // #e8dfd1
const MOUNTAIN_BACK = [45, 90, 61]; // #2d5a3d
const MOUNTAIN_FRONT = [36, 72, 48]; // #234830
const RIVER = [74, 144, 164]; // #4a90a4

function drawIcon(size, maskable) {
  const px = Buffer.alloc(size * size * 4);
  // For maskable icons the artwork must live within the inner ~80% safe zone,
  // with the background extending to the canvas edges.
  const contentScale = maskable ? 0.78 : 1.0;
  const offset = (size * (1 - contentScale)) / 2;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      const fx = (x - offset) / contentScale;
      const fy = (y - offset) / contentScale;

      let color = lerpColor(BG_TOP, BG_BOTTOM, y / size);

      if (fx >= 0 && fy >= 0 && fx <= size && fy <= size) {
        // Sun
        if (inCircle(fx, fy, 0.5 * size, 0.24 * size, 0.13 * size)) color = SUN;
        // Back mountain
        if (pointInTriangle(fx, fy, 0.0 * size, 0.8 * size, 0.34 * size, 0.42 * size, 0.7 * size, 0.8 * size))
          color = MOUNTAIN_BACK;
        // Front mountain
        if (pointInTriangle(fx, fy, 0.3 * size, 0.82 * size, 0.62 * size, 0.52 * size, 1.0 * size, 0.82 * size))
          color = MOUNTAIN_FRONT;
        // Winding river
        if (fy > 0.68 * size) {
          const xc = size * (0.5 + 0.22 * Math.sin((fy / size) * Math.PI * 3 + 0.4));
          if (Math.abs(fx - xc) < 0.075 * size) color = RIVER;
        }
      }

      const idx = (y * size + x) * 4;
      px[idx] = color[0];
      px[idx + 1] = color[1];
      px[idx + 2] = color[2];
      px[idx + 3] = 255;
    }
  }
  return px;
}

/* --------------------------------- Output -------------------------------- */
const outDir = join(root, 'public', 'icons');
mkdirSync(outDir, { recursive: true });

writeFileSync(join(outDir, 'icon-192.png'), encodePNG(192, 192, drawIcon(192, false)));
writeFileSync(join(outDir, 'icon-512.png'), encodePNG(512, 512, drawIcon(512, false)));
writeFileSync(join(outDir, 'icon-maskable-512.png'), encodePNG(512, 512, drawIcon(512, true)));
writeFileSync(join(outDir, 'apple-touch-icon.png'), encodePNG(180, 180, drawIcon(180, false)));

console.log('Icons generated in public/icons/');
