import { createClient } from '@sanity/client';
const client = createClient({ projectId: 'ji1ggnuz', dataset: 'production', apiVersion: '2024-01-01', token: process.env.SANITY_API_WRITE_TOKEN, useCdn: false });

const hrefByName = {
  "Duke of Edinburgh's Award": "https://www.dukeofed.org/",
  "The Duke of Edinburgh's Award": "https://www.dukeofed.org/",
  "Arts Award": "https://www.artsaward.org.uk/site/?id=64",
  "The Congressional Award": "https://congressionalaward.org/",
};

const s = await client.fetch(`*[_id=="siteSettings"][0]{ heroSlide3Awards }`);
const awards = (s?.heroSlide3Awards ?? []).map(a => ({ ...a, href: a.href || hrefByName[a.name] || "" }));
await client.patch('siteSettings').set({ heroSlide3Awards: awards }).commit();
console.log('✓ heroSlide3Awards href fields set:', awards.map(a => `${a.name} -> ${a.href}`));
