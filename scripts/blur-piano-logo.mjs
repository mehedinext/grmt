// Blur the Blüthner logo on 406 piano image + re-upload a clean version.
// Output: piano-hero-no-logo.jpg (overwrites existing)
import sharp from "sharp";

const SRC = "public/gallery/406-Green_Room_Music_Concert_Summer_2025.jpg";
const OUT = "public/gallery/piano-final-performance.jpg";

const meta = await sharp(SRC).metadata();
console.log("src", meta.width, meta.height);

// Logo region (approx on 2400x1600 original): fallboard area where Blüthner cursive sits
// from the 600x400 proxy: x≈170-360, y≈230-275 → scale x4
const regionX = 760;
const regionY = 930;
const regionW = 540;
const regionH = 140;

const blurPatch = await sharp(SRC)
  .extract({ left: regionX, top: regionY, width: regionW, height: regionH })
  .blur(18)
  .toBuffer();

await sharp(SRC)
  .composite([{ input: blurPatch, left: regionX, top: regionY }])
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(OUT);

const outMeta = await sharp(OUT).metadata();
console.log("out", OUT, outMeta.width, outMeta.height);
