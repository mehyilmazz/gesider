// Uye sirket logolarini tek formata cevirir:
// 320x160 (2:1) beyaz tuval, contain + ic bosluk, optimize WebP.
// Kullanim: npm run logos:normalize
import { mkdir, readdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "public/gesider-sirket-logo";
const OUT = path.join(SRC, "normalized");
const CANVAS_W = 320;
const CANVAS_H = 160;
const PADDING = 0.12; // her kenardan ic bosluk orani

await mkdir(OUT, { recursive: true });

const files = (await readdir(SRC, { withFileTypes: true }))
  .filter((e) => e.isFile() && /\.(jpe?g|png|webp)$/i.test(e.name))
  .map((e) => e.name);

for (const file of files) {
  const name = path.parse(file).name;
  const innerW = Math.round(CANVAS_W * (1 - PADDING * 2));
  const innerH = Math.round(CANVAS_H * (1 - PADDING * 2));

  const logo = await sharp(path.join(SRC, file))
    .flatten({ background: "#ffffff" }) // seffaf PNG'ler beyaz zemine
    .trim({ threshold: 12 }) // logonun etrafindaki bos beyazligi kirp
    .toBuffer();

  const resized = await sharp(logo)
    .resize(innerW, innerH, { fit: "inside", withoutEnlargement: false })
    .toBuffer();

  const info = await sharp(resized).metadata();
  await sharp({
    create: {
      width: CANVAS_W,
      height: CANVAS_H,
      channels: 3,
      background: "#ffffff",
    },
  })
    .composite([
      {
        input: resized,
        left: Math.round((CANVAS_W - info.width) / 2),
        top: Math.round((CANVAS_H - info.height) / 2),
      },
    ])
    .webp({ quality: 88 })
    .toFile(path.join(OUT, `${name}.webp`));

  console.log(`${file} -> normalized/${name}.webp`);
}

console.log(`\n${files.length} logo normalize edildi.`);
