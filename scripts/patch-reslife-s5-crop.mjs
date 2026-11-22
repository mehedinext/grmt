import { createClient } from '@sanity/client';
import sharp from 'sharp';
import fs from 'node:fs';

const client = createClient({ projectId: 'ji1ggnuz', dataset: 'production', apiVersion: '2024-01-01', token: process.env.SANITY_API_WRITE_TOKEN, useCdn: false });

const src = '/Users/mehedihasan/Downloads/WhatsApp Image 2026-11-21 at 05.11.32.jpeg';
const meta = await sharp(src).metadata();
const topCrop = Math.round(meta.height * 0.08); // trim 8% from top
const out = '/tmp/reslife-s5-cropped.jpg';
await sharp(src)
  .extract({ left: 0, top: topCrop, width: meta.width, height: meta.height - topCrop })
  .resize({ width: 1600 })
  .jpeg({ quality: 82, mozjpeg: true })
  .toFile(out);
console.log('Cropped+resized ->', (fs.statSync(out).size/1024).toFixed(0)+'KB');

const asset = await client.assets.upload('image', fs.createReadStream(out), { filename: 'residential-s5-cropped.jpg' });
console.log('Uploaded:', asset.url);

await client.patch('siteSettings').set({
  resLifeImage3: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
}).commit();
console.log('✓ settings.resLifeImage3 patched (cropped)');
