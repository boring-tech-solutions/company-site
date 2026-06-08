import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const allPosts = await getCollection('posts');
  const posts = allPosts
    .filter((p) => !p.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.datePublished).getTime() -
        new Date(a.data.datePublished).getTime()
    );

  return rss({
    title: 'Boring Tech Solutions Blog',
    description:
      'AI automation insights and practical technology guidance for growing organizations',
    site: 'https://boringtechsolutions.com',
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: new Date(post.data.datePublished),
      link: `https://boringtechsolutions.com/blog/${post.data.slug}/`,
    })),
    customData: `<language>en-us</language>`,
  });
}
