// Nov 20 2026 batch patch:
// 1. heroSlide3Eyebrow -> "More Than Just a Summer Camp"
// 2. stats: swap s2 (3 Courses) <-> s4 (Stamford School)
// 3. course grades: Piano + Singing get a 2nd eyebrow line
// 4. partner-1 Steinway logo: upload /Users/mehedihasan/Downloads/steinway gold.png
import { createClient } from '@sanity/client';
import fs from 'node:fs';

const client = createClient({
  projectId: 'ji1ggnuz',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_WRITE_TOKEN,
  useCdn: false,
});

// 1. Hero slide 3 eyebrow
await client.patch('siteSettings').set({ heroSlide3Eyebrow: 'More Than Just a Summer Camp' }).commit();
console.log('✓ heroSlide3Eyebrow updated');

// 2. Stats swap — swap positions of 3 Courses and Stamford School
const settings = await client.fetch('*[_id == "siteSettings"][0]{ stats }');
const stats = (settings?.stats ?? []).map(s => ({ ...s }));
const idx3C = stats.findIndex(s => s.val === '3 Courses');
const idxSS = stats.findIndex(s => s.val === 'Stamford School');
if (idx3C >= 0 && idxSS >= 0) {
  const tmp = stats[idx3C];
  stats[idx3C] = stats[idxSS];
  stats[idxSS] = tmp;
  await client.patch('siteSettings').set({ stats }).commit();
  console.log('✓ stats swapped: 3 Courses ↔ Stamford School');
} else {
  console.log('⚠ stats swap: one or both items not found; skipping');
}

// 3. Course grades
await client.patch('course-piano').set({
  grade: "Piano Assessment Video Audition Required\nMinimum Playing Standard: ABRSM Grade 5 Equivalent",
}).commit();
console.log('✓ course-piano.grade updated');

await client.patch('course-vocal-performance').set({
  grade: "Singing Assessment Video Audition Required\nNo Prior Singing Experience Required",
}).commit();
console.log('✓ course-vocal-performance.grade updated');

// 4. Steinway logo upload (partner-1)
const steinwayPath = '/Users/mehedihasan/Downloads/steinway gold.png';
if (fs.existsSync(steinwayPath)) {
  const asset = await client.assets.upload('image', fs.createReadStream(steinwayPath), {
    filename: 'steinway-educational-partner-gold.png',
  });
  await client.patch('partner-1').set({
    logo: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
  }).commit();
  console.log('✓ partner-1 Steinway logo replaced ->', asset.url);
} else {
  console.log('⚠ Steinway logo file missing at', steinwayPath);
}

console.log('All patches done.');
