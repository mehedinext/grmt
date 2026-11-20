import { createClient } from '@sanity/client';
import sharp from 'sharp';
import fs from 'node:fs';

const client = createClient({
  projectId: 'ji1ggnuz',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

const src = '/Users/mehedihasan/Downloads/045c779e4e2eeb01d4c92d69589fe6ea3137ac67-4958x3305.jpg';
if (!fs.existsSync(src)) { console.error('Source missing:', src); process.exit(1); }

const out = '/tmp/mt-card-new.jpg';
await sharp(src)
  .resize({ width: 2000 })
  .jpeg({ quality: 85, mozjpeg: true })
  .toFile(out);

const info = fs.statSync(out);
console.log('Resized ->', out, (info.size / 1024).toFixed(0) + 'KB');

const asset = await client.assets.upload('image', fs.createReadStream(out), {
  filename: 'music-theory-card.jpg',
});
console.log('Uploaded:', asset.url);

await client.patch('course-music-theory').set({
  image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
  heroImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
}).commit();
console.log('✓ course-music-theory.image + heroImage patched');
