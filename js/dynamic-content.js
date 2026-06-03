/**
 * Dynamic Content Renderer for Vila Kruna
 * Fetches JSON/Markdown content files managed by Sveltia CMS
 * and renders them into HTML slot containers.
 */
document.addEventListener('DOMContentLoaded', () => {
  const isSubdir = window.location.pathname.includes('/en/');
  const lang = document.body.classList.contains('lang-en') ? 'en' : 'sr';
  const basePath = isSubdir ? '..' : '.';

  // ─────────────────────────────────────────────
  // 1. PROMO BANNER RENDERER (homepage only)
  // ─────────────────────────────────────────────
  const promoBannerSlot = document.getElementById('promo-banner-slot');
  if (promoBannerSlot) {
    fetch(`${basePath}/content/settings/promo.json`)
      .then(r => r.json())
      .then(data => {
        if (!data.enabled) return;

        const text = lang === 'en' ? data.text_en : data.text_sr;
        if (!text) return;

        const banner = document.createElement('div');
        banner.className = 'promo-banner';
        banner.style.backgroundColor = data.bg_color || '#2a7d4f';
        banner.style.color = data.text_color || '#ffffff';

        const container = document.createElement('div');
        container.className = 'container promo-banner-inner';

        if (data.link) {
          const link = document.createElement('a');
          link.href = data.link;
          link.textContent = text;
          link.className = 'promo-banner-link';
          link.style.color = data.text_color || '#ffffff';
          container.appendChild(link);
        } else {
          const span = document.createElement('span');
          span.textContent = text;
          span.className = 'promo-banner-text';
          container.appendChild(span);
        }

        // Dismiss button
        const dismissBtn = document.createElement('button');
        dismissBtn.className = 'promo-dismiss-btn';
        dismissBtn.setAttribute('aria-label', lang === 'en' ? 'Dismiss' : 'Zatvori');
        dismissBtn.textContent = '×';
        dismissBtn.style.color = data.text_color || '#ffffff';
        dismissBtn.addEventListener('click', () => {
          banner.remove();
        });
        container.appendChild(dismissBtn);

        banner.appendChild(container);
        promoBannerSlot.appendChild(banner);
      })
      .catch(err => {
        // Silently fail — promo banner is optional
      });
  }

  // ─────────────────────────────────────────────
  // 2. ANNOUNCEMENT SECTION RENDERER (homepage only)
  // ─────────────────────────────────────────────
  const announcementSlot = document.getElementById('announcement-slot');
  if (announcementSlot) {
    fetch(`${basePath}/content/settings/announcement.json`)
      .then(r => r.json())
      .then(data => {
        if (!data.enabled) return;

        const title = lang === 'en' ? data.title_en : data.title_sr;
        const body = lang === 'en' ? data.body_en : data.body_sr;
        if (!title && !body) return;

        const section = document.createElement('section');
        section.className = 'announcement-section';

        const container = document.createElement('div');
        container.className = 'container';

        const card = document.createElement('div');
        card.className = 'announcement-card';

        // Image (optional)
        if (data.image) {
          const imgWrapper = document.createElement('div');
          imgWrapper.className = 'announcement-img';
          imgWrapper.style.backgroundImage = `url('${basePath}/${data.image}')`;
          card.appendChild(imgWrapper);
        }

        const content = document.createElement('div');
        content.className = 'announcement-content';

        if (title) {
          const h3 = document.createElement('h3');
          h3.textContent = title;
          content.appendChild(h3);
        }

        if (body) {
          const p = document.createElement('p');
          p.textContent = body;
          content.appendChild(p);
        }

        if (data.link) {
          const linkText = lang === 'en' ? data.link_text_en : data.link_text_sr;
          const a = document.createElement('a');
          a.href = data.link;
          a.className = 'btn btn-primary announcement-cta';
          a.textContent = linkText || (lang === 'en' ? 'Learn more' : 'Saznaj više');
          content.appendChild(a);
        }

        card.appendChild(content);
        container.appendChild(card);
        section.appendChild(container);
        announcementSlot.appendChild(section);
      })
      .catch(err => {
        // Silently fail — announcement is optional
      });
  }

  // ─────────────────────────────────────────────
  // 3. BLOG LISTING RENDERER (novosti.html / news.html only)
  // ─────────────────────────────────────────────
  const blogListing = document.getElementById('blog-listing');
  const blogPostContent = document.getElementById('blog-post-content');

  if (blogListing) {
    const urlParams = new URLSearchParams(window.location.search);
    const postSlug = urlParams.get('post');

    if (postSlug) {
      // ─── Individual post view ───
      renderBlogPost(postSlug);
    } else {
      // ─── Listing view ───
      renderBlogListing();
    }
  }

  function renderBlogListing() {
    fetch(`${basePath}/content/blog/index.json`)
      .then(r => r.json())
      .then(posts => {
        if (!posts || posts.length === 0) {
          const emptyMsg = document.createElement('p');
          emptyMsg.className = 'blog-empty';
          emptyMsg.textContent = lang === 'en'
            ? 'No news posts yet. Check back soon!'
            : 'Još uvek nema objava. Pratite nas!';
          blogListing.appendChild(emptyMsg);
          return;
        }

        // Sort by date descending
        posts.sort((a, b) => new Date(b.date) - new Date(a.date));

        const grid = document.createElement('div');
        grid.className = 'blog-grid';

        posts.forEach(post => {
          const card = document.createElement('article');
          card.className = 'blog-card';

          // Card image
          if (post.image) {
            const imgDiv = document.createElement('div');
            imgDiv.className = 'blog-card-img';
            imgDiv.style.backgroundImage = `url('${basePath}/${post.image}')`;
            card.appendChild(imgDiv);
          }

          const cardBody = document.createElement('div');
          cardBody.className = 'blog-card-body';

          // Date badge
          const dateBadge = document.createElement('span');
          dateBadge.className = 'blog-card-date';
          const postDate = new Date(post.date);
          dateBadge.textContent = postDate.toLocaleDateString(
            lang === 'en' ? 'en-GB' : 'sr-Latn-RS',
            { day: 'numeric', month: 'long', year: 'numeric' }
          );
          cardBody.appendChild(dateBadge);

          // Title
          const titleEl = document.createElement('h3');
          titleEl.className = 'blog-card-title';
          const titleLink = document.createElement('a');
          const currentPage = isSubdir ? 'news' : 'novosti';
          titleLink.href = `${currentPage}?post=${encodeURIComponent(post.slug)}`;
          titleLink.textContent = post.title;
          titleEl.appendChild(titleLink);
          cardBody.appendChild(titleEl);

          // Summary
          if (post.summary) {
            const summaryEl = document.createElement('p');
            summaryEl.className = 'blog-card-summary';
            summaryEl.textContent = post.summary;
            cardBody.appendChild(summaryEl);
          }

          // Read more link
          const readMore = document.createElement('a');
          readMore.href = `${currentPage}?post=${encodeURIComponent(post.slug)}`;
          readMore.className = 'blog-card-readmore';
          readMore.textContent = lang === 'en' ? 'Read more →' : 'Čitaj više →';
          cardBody.appendChild(readMore);

          card.appendChild(cardBody);
          grid.appendChild(card);
        });

        blogListing.appendChild(grid);
      })
      .catch(err => {
        // Silently fail
      });
  }

  // ─────────────────────────────────────────────
  // 4. BLOG POST RENDERER (individual post)
  // ─────────────────────────────────────────────
  function renderBlogPost(slug) {
    // Hide listing, show post container
    blogListing.style.display = 'none';
    if (blogPostContent) {
      blogPostContent.style.display = 'block';
    }

    // Validate slug — allow only safe characters
    // TODO(security): Slug is used in a fetch URL path. Restrict to alphanumeric + hyphens.
    const safeSlug = slug.replace(/[^a-zA-Z0-9\-_]/g, '');
    if (safeSlug !== slug) {
      showPostError();
      return;
    }

    fetch(`${basePath}/content/blog/${safeSlug}.md`)
      .then(r => {
        if (!r.ok) throw new Error('Post not found');
        return r.text();
      })
      .then(rawMd => {
        // Parse frontmatter
        const { frontmatter, content } = parseFrontmatter(rawMd);

        if (!blogPostContent) return;

        // Back link
        const backLink = document.createElement('a');
        const currentPage = isSubdir ? 'news' : 'novosti';
        backLink.href = currentPage;
        backLink.className = 'blog-back-link';
        backLink.textContent = lang === 'en' ? '← Back to News' : '← Nazad na Novosti';
        blogPostContent.appendChild(backLink);

        // Post header
        const header = document.createElement('header');
        header.className = 'blog-post-header';

        if (frontmatter.title) {
          const h1 = document.createElement('h1');
          h1.textContent = frontmatter.title;
          header.appendChild(h1);
        }

        if (frontmatter.date) {
          const dateEl = document.createElement('time');
          dateEl.className = 'blog-post-date';
          const postDate = new Date(frontmatter.date);
          dateEl.textContent = postDate.toLocaleDateString(
            lang === 'en' ? 'en-GB' : 'sr-Latn-RS',
            { day: 'numeric', month: 'long', year: 'numeric' }
          );
          header.appendChild(dateEl);
        }

        blogPostContent.appendChild(header);

        // Featured image
        if (frontmatter.image) {
          const img = document.createElement('img');
          img.src = `${basePath}/${frontmatter.image}`;
          img.alt = frontmatter.title || '';
          img.className = 'blog-post-featured-img';
          blogPostContent.appendChild(img);
        }

        // Render markdown body
        // Uses marked.js for MD→HTML and DOMPurify for XSS sanitization
        if (typeof marked !== 'undefined' && typeof DOMPurify !== 'undefined') {
          const rawHtml = marked.parse(content);
          const cleanHtml = DOMPurify.sanitize(rawHtml, {
            ADD_TAGS: ['iframe'],
            ADD_ATTR: ['allowfullscreen', 'frameborder', 'loading']
          });

          const article = document.createElement('article');
          article.className = 'blog-post-body';

          // Safe: DOMPurify has sanitized the HTML output from marked.js
          // This is the only place we use innerHTML, and it's protected by DOMPurify
          const parser = new DOMParser();
          const doc = parser.parseFromString(cleanHtml, 'text/html');
          while (doc.body.firstChild) {
            article.appendChild(doc.body.firstChild);
          }

          blogPostContent.appendChild(article);
        }
      })
      .catch(err => {
        showPostError();
      });
  }

  function showPostError() {
    if (!blogPostContent) return;
    blogPostContent.replaceChildren();
    const errorMsg = document.createElement('div');
    errorMsg.className = 'blog-error';

    const h2 = document.createElement('h2');
    h2.textContent = lang === 'en' ? 'Post not found' : 'Objava nije pronađena';
    errorMsg.appendChild(h2);

    const p = document.createElement('p');
    p.textContent = lang === 'en'
      ? 'The post you are looking for does not exist or has been removed.'
      : 'Objava koju tražite ne postoji ili je uklonjena.';
    errorMsg.appendChild(p);

    const backLink = document.createElement('a');
    const currentPage = isSubdir ? 'news' : 'novosti';
    backLink.href = currentPage;
    backLink.className = 'btn btn-secondary';
    backLink.textContent = lang === 'en' ? '← Back to News' : '← Nazad na Novosti';
    errorMsg.appendChild(backLink);

    blogPostContent.appendChild(errorMsg);
  }

  /**
   * Parse YAML frontmatter from a Markdown string.
   * Expects format: ---\nkey: value\n---\ncontent
   */
  function parseFrontmatter(raw) {
    const frontmatter = {};
    let content = raw;

    if (raw.startsWith('---')) {
      const endIndex = raw.indexOf('---', 3);
      if (endIndex !== -1) {
        const fmBlock = raw.substring(3, endIndex).trim();
        content = raw.substring(endIndex + 3).trim();

        fmBlock.split('\n').forEach(line => {
          const colonIndex = line.indexOf(':');
          if (colonIndex === -1) return;
          const key = line.substring(0, colonIndex).trim();
          let value = line.substring(colonIndex + 1).trim();
          // Remove surrounding quotes
          if ((value.startsWith('"') && value.endsWith('"')) ||
              (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          frontmatter[key] = value;
        });
      }
    }

    return { frontmatter, content };
  }
});
