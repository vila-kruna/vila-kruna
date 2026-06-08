import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public/content/blog');

export type Post = {
  slug: string;
  title: string;
  date: string;
  thumbnail: string;
  summary: string;
  content: string;
};

export function getPostSlugs() {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
  const slugs = files.map(f => f.replace(/\.(sr|en)\.md$/, '').replace(/\.md$/, ''));
  return Array.from(new Set(slugs));
}

export function getPostBySlug(slug: string, locale: 'sr' | 'en' = 'sr'): Post {
  const realSlug = slug.replace(/\.(sr|en)\.md$/, '').replace(/\.md$/, '');
  
  const localePath = path.join(postsDirectory, `${realSlug}.${locale}.md`);
  const defaultPath = path.join(postsDirectory, `${realSlug}.md`);
  
  let fileContents = '';
  if (fs.existsSync(localePath)) {
    fileContents = fs.readFileSync(localePath, 'utf8');
  } else if (fs.existsSync(defaultPath)) {
    fileContents = fs.readFileSync(defaultPath, 'utf8');
  } else {
    return {
      slug: realSlug,
      title: 'Not found',
      date: new Date().toISOString(),
      thumbnail: '',
      summary: '',
      content: '',
    };
  }
  
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    title: data.title || 'Untitled',
    date: data.date || new Date().toISOString(),
    thumbnail: data.image || data.thumbnail || '',
    summary: data.summary || '',
    content,
  };
}

export function getAllPosts(locale: 'sr' | 'en' = 'sr'): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, locale))
    .filter((post) => post.title !== 'Not found')
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
