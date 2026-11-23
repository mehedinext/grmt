import { createClient } from '@sanity/client';
const client = createClient({ projectId: 'ji1ggnuz', dataset: 'production', apiVersion: '2024-01-01', token: process.env.SANITY_API_WRITE_TOKEN, useCdn: false });

const URL = 'https://docs.google.com/forms/d/e/1FAIpQLScMZ4lqBWovMnSUA0X7bh6HZOnb0bWPjQzsqVlHLZfx6IYh2Q/viewform';

// Any field that previously pointed at /apply gets the Google Form URL
const current = await client.fetch(`*[_id == "siteSettings"][0]{ navCtaHref, heroCta2Href, heroSlide2Cta2Href, ctaCta1Href }`);
console.log('Before:', current);

const patch = {};
for (const [k, v] of Object.entries(current ?? {})) {
  if (v === '/apply' || v === 'apply' || !v) patch[k] = URL;
}
if (Object.keys(patch).length) {
  await client.patch('siteSettings').set(patch).commit();
  console.log('✓ Patched:', patch);
} else {
  console.log('Nothing to patch - no /apply refs in those fields');
}
