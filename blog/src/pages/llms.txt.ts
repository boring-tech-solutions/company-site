import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(_context: APIContext) {
  const allPosts = await getCollection('posts');
  const posts = allPosts
    .filter((p) => !p.data.draft)
    .sort(
      (a, b) =>
        new Date(b.data.datePublished).getTime() -
        new Date(a.data.datePublished).getTime()
    );

  const postLines = posts
    .map(
      (post) =>
        `- ${post.data.title} (${post.data.datePublished})\n  https://boringtechsolutions.com/blog/${post.data.slug}/\n  ${post.data.description}`
    )
    .join('\n\n');

  const content = `# Boring Tech Solutions Blog

## About
Boring Tech Solutions (BTS) helps small and mid-sized organizations adopt AI automation and practical technology without unnecessary complexity. We build on proven, reliable foundations so the technology your organization depends on compounds in value over time rather than requiring constant replacement.

## Blog
This blog covers AI automation insights, practical technology guidance, and lessons from real-world implementations for growing organizations.

Blog index: https://boringtechsolutions.com/blog/
RSS feed: https://boringtechsolutions.com/blog/rss.xml

## Published Posts

${postLines}

## Contact
Website: https://boringtechsolutions.com
Contact: https://boringtechsolutions.com/contact
`;

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
