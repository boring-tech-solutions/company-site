import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(_context: APIContext) {
  const allPosts = await getCollection('posts');
  const posts = allPosts.filter((p) => !p.data.draft);

  const today = new Date().toISOString().split('T')[0];

  const postEntries = posts
    .map((post) => {
      const lastmod = post.data.dateModified || post.data.datePublished || today;
      return `  <url>
    <loc>https://boringtechsolutions.com/blog/${post.data.slug}/</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://boringtechsolutions.com/blog/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
${postEntries}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
