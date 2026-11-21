import { createClient } from '@sanity/client';
import sharp from 'sharp';
import fs from 'node:fs';

const client = createClient({ projectId: 'ji1ggnuz', dataset: 'production', apiVersion: '2024-01-01', token: process.env.SANITY_API_WRITE_TOKEN, useCdn: false });

const src = '/Users/mehedihasan/Downloads/no-cliumbia-logo.jpg';
if (!fs.existsSync(src)) { console.error('Missing:', src); process.exit(1); }

const out = '/tmp/reslife-band-new.jpg';
await sharp(src).resize({ width: 2000 }).jpeg({ quality: 85, mozjpeg: true }).toFile(out);
console.log('Resized ->', (fs.statSync(out).size/1024).toFixed(0)+'KB');

const asset = await client.assets.upload('image', fs.createReadStream(out), { filename: 'residential-band-no-columbia.jpg' });
console.log('Uploaded:', asset.url);

await client.patch('siteSettings').set({
  resLifeBandImage: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
}).commit();
console.log('✓ settings.resLifeBandImage patched');
