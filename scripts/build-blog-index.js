const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '../content/blog');
const OUTPUT_FILE = path.join(BLOG_DIR, 'index.json');

// Helper to extract frontmatter block from a markdown string
function extractFrontmatter(content) {
  const frontmatter = {};
  if (content.startsWith('---')) {
    const endIndex = content.indexOf('---', 3);
    if (endIndex !== -1) {
      const block = content.substring(3, endIndex).trim();
      block.split('\n').forEach(line => {
        const colonIndex = line.indexOf(':');
        if (colonIndex > -1) {
          const key = line.substring(0, colonIndex).trim();
          let value = line.substring(colonIndex + 1).trim();
          // Remove surrounding quotes if they exist
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.substring(1, value.length - 1);
          }
          frontmatter[key] = value;
        }
      });
    }
  }
  return frontmatter;
}

function buildIndex() {
  console.log('Building blog index...');
  
  if (!fs.existsSync(BLOG_DIR)) {
    console.warn(`Directory not found: ${BLOG_DIR}`);
    return;
  }

  const posts = [];
  const files = fs.readdirSync(BLOG_DIR);

  files.forEach(file => {
    // Only process Markdown files
    if (file.endsWith('.md')) {
      const filePath = path.join(BLOG_DIR, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      const frontmatter = extractFrontmatter(content);
      const slug = path.basename(file, '.md');
      
      posts.push({
        slug,
        title: frontmatter.title || '',
        date: frontmatter.date || '',
        image: frontmatter.image || '',
        summary: frontmatter.summary || ''
      });
    }
  });

  // Sort posts by date descending
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  // Write to index.json
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(posts, null, 2), 'utf8');
  console.log(`Generated ${OUTPUT_FILE} with ${posts.length} posts.`);
}

buildIndex();
