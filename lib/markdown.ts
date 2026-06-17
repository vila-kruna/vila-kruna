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

/**
 * Convert a title to a URL-safe ASCII slug.
 * Handles Serbian đ/Đ, strips diacritics (č→c, š→s, ž→z, etc.),
 * and removes special characters like ², :, (), etc.
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/đ/g, 'dj')                // Serbian đ is not decomposed by NFD
    .normalize('NFD')                    // decompose diacritics (č→c+caron, š→s+caron, etc.)
    .replace(/[\u0300-\u036f]/g, '')     // strip combining marks
    .replace(/[^a-z0-9\s-]/g, '')       // remove remaining non-alphanumeric (strips ², :, etc.)
    .replace(/\s+/g, '-')               // spaces to hyphens
    .replace(/-+/g, '-')                // collapse multiple hyphens
    .replace(/^-|-$/g, '');             // trim leading/trailing hyphens
}

/**
 * Get all unique base filenames (without locale suffix and extension).
 * e.g. "my-post.sr.md" and "my-post.en.md" both yield "my-post".
 */
function getFileSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const files = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.md'));
  const slugs = files.map(f => f.replace(/\.(sr|en)\.md$/, '').replace(/\.md$/, ''));
  return Array.from(new Set(slugs));
}

/**
 * Read a post by its file-based slug (the filename prefix) for a given locale.
 * Returns null if the file doesn't exist for that locale.
 * The returned post.slug is derived from the locale-specific title (not the filename).
 */
function getPostByFileSlug(fileSlug: string, locale: 'sr' | 'en'): Post | null {
  const localePath = path.join(postsDirectory, `${fileSlug}.${locale}.md`);
  const defaultPath = path.join(postsDirectory, `${fileSlug}.md`);

  let fileContents = '';
  if (fs.existsSync(localePath)) {
    fileContents = fs.readFileSync(localePath, 'utf8');
  } else if (fs.existsSync(defaultPath)) {
    fileContents = fs.readFileSync(defaultPath, 'utf8');
  } else {
    return null;
  }

  const { data, content } = matter(fileContents);
  const title = data.title || '';

  if (!title) return null;

  return {
    slug: slugify(title),
    title,
    date: data.date || new Date().toISOString(),
    thumbnail: data.image || data.thumbnail || '',
    summary: data.summary || '',
    content,
  };
}

export function getAllPosts(locale: 'sr' | 'en' = 'sr'): Post[] {
  const fileSlugs = getFileSlugs();
  const posts = fileSlugs
    .map((fileSlug) => getPostByFileSlug(fileSlug, locale))
    .filter((post): post is Post => post !== null)
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getPostBySlug(slug: string, locale: 'sr' | 'en' = 'sr'): Post {
  const allPosts = getAllPosts(locale);
  const found = allPosts.find(post => post.slug === slug);

  if (found) return found;

  return {
    slug,
    title: 'Not found',
    date: new Date().toISOString(),
    thumbnail: '',
    summary: '',
    content: '',
  };
}
