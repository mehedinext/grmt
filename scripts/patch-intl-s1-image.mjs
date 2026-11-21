import { createClient } from '@sanity/client';
import sharp from 'sharp';
import fs from 'node:fs';

const client = createClient({ projectId: 'ji1ggnuz', dataset: 'production', apiVersion: '2024-01-01', token: process.env.SANITY_API_WRITE_TOKEN, useCdn: false });

const src = '/Users/mehedihasan/Downloads/WhatsApp Image 2026-11-21 at 05.45.43.jpeg';
if (!fs.existsSync(src)) { console.error('Missing:', src); process.exit(1); }

const out = '/tmp/intl-s1-new.jpg';
await sharp(src).resize({ width: 1600 }).jpeg({ quality: 82, mozjpeg: true }).toFile(out);
console.log('Resized ->', (fs.statSync(out).size/1024).toFixed(0)+'KB');

const asset = await client.assets.upload('image', fs.createReadStream(out), { filename: 'intl-more-than-music-camp.jpg' });
console.log('Uploaded:', asset.url);

await client.patch('siteSettings').set({
  intlS1Image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
}).commit();
console.log('✓ settings.intlS1Image patched');
