document.addEventListener('DOMContentLoaded', () => {
  // 0. Dynamic Responsive UploadThing Image Resolver
  const localToNameMap = {
    'hero_exterior.jpg': 'spolja',
    'about_villa.jpg': 'spolja',
    'apartman_main.jpg': 'apartman',
    'apartman_1.jpg': 'apartman2',
    'apartman_2.jpg': 'apartman3',
    'soba_main.jpg': 'soba',
    'soba_1.jpg': 'soba2',
    'soba_2.jpg': 'soba3'
  };

  const isSubdir = window.location.pathname.includes('/en/');
  const jsonPath = isSubdir ? '../assets/images.json' : 'assets/images.json';

  fetch(jsonPath)
    .then(res => res.json())
    .then(imagesData => {
      // 0.1 Inline Backgrounds Programmatic Loading via CSS Custom Properties
      document.querySelectorAll('[data-local-bg]').forEach(elem => {
        const localPath = elem.getAttribute('data-local-bg');
        if (!localPath) return;
        const filename = localPath.split('/').pop();
        const baseName = localToNameMap[filename];
        if (baseName) {
          const item = imagesData.find(img => img.name === baseName);
          if (item) {
            // Apply responsive custom variables
            elem.style.setProperty('--bg-sm', `url('${item.small}')`);
            elem.style.setProperty('--bg-md', `url('${item.medium}')`);
            elem.style.setProperty('--bg-lg', `url('${item.large}')`);
            elem.classList.add('responsive-bg');

            // Handle elements with linear gradients gracefully
            const currentStyleBg = elem.style.backgroundImage || window.getComputedStyle(elem).backgroundImage;
            if (currentStyleBg && currentStyleBg.includes('linear-gradient')) {
              const gradientPrefix = currentStyleBg.substring(0, currentStyleBg.indexOf('url('));
              elem.style.setProperty('--bg-lg', `${gradientPrefix}url('${item.large}')`);
              elem.style.setProperty('--bg-md', `${gradientPrefix}url('${item.medium}')`);
              elem.style.setProperty('--bg-sm', `${gradientPrefix}url('${item.small}')`);
            }

            // Sync dataset-src if lightbox is attached
            if (elem.dataset.src !== undefined) {
              elem.dataset.src = item.large;
            }
          }
        }
      });

      // 0.2 Image Tags Programmatic Loading based on Screen Size
      document.querySelectorAll('[data-local-img]').forEach(elem => {
        const localPath = elem.getAttribute('data-local-img');
        if (!localPath) return;
        const filename = localPath.split('/').pop();
        const baseName = localToNameMap[filename];
        if (baseName) {
          const item = imagesData.find(img => img.name === baseName);
          if (item) {
            const updateImgSrc = () => {
              const width = window.innerWidth;
              if (width <= 576) {
                elem.src = item.small;
              } else if (width <= 992) {
                elem.src = item.medium;
              } else {
                elem.src = item.large;
              }
            };
            updateImgSrc();
            window.addEventListener('resize', updateImgSrc);
          }
        }
      });
    })
    .catch(err => console.error('Error loading dynamic UploadThing images:', err));

  // 1. Language Setup
  // Since we use static multilingual HTML pages, the language is determined directly from the body class.
  const currentLang = document.body.classList.contains('lang-en') ? 'en' : 'sr';

  // 2. Sticky Header on Scroll
  const header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  // 3. Mobile Navigation Menu
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      // Hamburger animation effect
      const spans = hamburger.querySelectorAll('span');
      if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(6px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      });
    });
  }

  // 4. Dynamic Continuous Reviews Scroll Cloning
  const reviewsTrack = document.querySelector('.reviews-track');
  if (reviewsTrack) {
    const reviews = Array.from(reviewsTrack.children);
    // Clone all items in the reviews track to ensure seamless infinite looping
    reviews.forEach(review => {
      const clone = review.cloneNode(true);
      reviewsTrack.appendChild(clone);
    });
  }

  // 5. Gallery Logic (Dynamic JSON Loading, Filtering, and Lightbox Modal)
  const galleryGrid = document.getElementById('main-gallery-grid');
  if (galleryGrid) {
    let allImages = [];
    let activeFilter = 'all';
    let loadedCount = 0;
    const itemsPerBatch = 12;

    const loadMoreContainer = document.getElementById('load-more-container');
    const loadMoreBtn = document.getElementById('load-more-btn');
    const filterBtns = document.querySelectorAll('.filter-btn');

    // Create & append Lightbox HTML dynamically if it doesn't exist
    let lightbox = document.querySelector('.lightbox');
    if (!lightbox) {
      lightbox = document.createElement('div');
      lightbox.className = 'lightbox';
      lightbox.innerHTML = `
        <button class="lightbox-nav lightbox-prev" aria-label="Prethodna slika">&lsaquo;</button>
        <div class="lightbox-content">
          <button class="lightbox-close" aria-label="Zatvori">&times;</button>
          <img class="lightbox-img" src="" alt="Vila Kruna Galerija">
        </div>
        <button class="lightbox-nav lightbox-next" aria-label="Sledeća slika">&rsaquo;</button>
      `;
      document.body.appendChild(lightbox);
    }

    const lightboxImg = lightbox.querySelector('.lightbox-img');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentLightboxIndex = -1; // Absolute index in allImages array

    // Fetch images from JSON, checking if we are in the /en/ subdirectory
    const isSubdir = window.location.pathname.includes('/en/');
    const jsonPath = isSubdir ? '../assets/images.json?v=2' : 'assets/images.json?v=2';

    fetch(jsonPath)
      .then(response => response.json())
      .then(data => {
        // Enrich with originalIndex
        allImages = data.map((item, idx) => ({ ...item, originalIndex: idx }));
        
        // Initial render
        renderGallery(true);
      })
      .catch(error => {
        console.error('Error loading gallery images:', error);
      });

    // Helper to get currently filtered images
    function getFilteredImages() {
      if (activeFilter === 'all') {
        return allImages;
      }
      return allImages.filter(img => img.category === activeFilter);
    }

    // Render gallery items
    function renderGallery(isInitial = false) {
      const filtered = getFilteredImages();
      const nextBatchStart = isInitial ? 0 : loadedCount;
      const nextBatchEnd = Math.min(nextBatchStart + itemsPerBatch, filtered.length);

      // If initial render, empty the grid
      if (isInitial) {
        galleryGrid.innerHTML = '';
        loadedCount = 0;
      }

      for (let i = nextBatchStart; i < nextBatchEnd; i++) {
        const item = filtered[i];
        const gridItem = document.createElement('div');
        gridItem.className = 'gallery-item responsive-bg';
        gridItem.dataset.category = item.category;
        gridItem.dataset.index = item.originalIndex;
        gridItem.dataset.src = item.large;
        
        // Set CSS Custom Properties for programmatic responsive loading
        gridItem.style.setProperty('--bg-sm', `url('${item.small}')`);
        gridItem.style.setProperty('--bg-md', `url('${item.medium}')`);
        gridItem.style.setProperty('--bg-lg', `url('${item.large}')`);
        
        // Use alt depending on current body language class
        const currentLang = document.body.classList.contains('lang-en') ? 'en' : 'sr';
        const altText = currentLang === 'en' ? (item.alt_eng || item.alt) : item.alt;
        gridItem.setAttribute('aria-label', altText);
        gridItem.setAttribute('title', altText);

        gridItem.innerHTML = `
          <div class="gallery-overlay">
            <span><i class="fa-solid fa-magnifying-glass-plus"></i></span>
          </div>
        `;
        
        // Entry animation style
        gridItem.style.animation = 'fadeInUp 0.4s ease forwards';
        
        galleryGrid.appendChild(gridItem);
      }

      loadedCount = nextBatchEnd;

      // Toggle "View more" button visibility
      if (loadedCount < filtered.length) {
        loadMoreContainer.style.display = 'block';
      } else {
        loadMoreContainer.style.display = 'none';
      }
    }



    // Filter Buttons logic
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        activeFilter = btn.dataset.filter;
        renderGallery(true);
      });
    });

    // Load More Button logic
    loadMoreBtn.addEventListener('click', () => {
      renderGallery(false);
    });

    // Open Lightbox
    galleryGrid.addEventListener('click', (e) => {
      const clickedItem = e.target.closest('.gallery-item');
      if (!clickedItem) return;

      const idxStr = clickedItem.dataset.index;
      currentLightboxIndex = parseInt(idxStr, 10);
      openLightbox();
    });

    function openLightbox() {
      if (currentLightboxIndex < 0 || currentLightboxIndex >= allImages.length) return;
      const targetItem = allImages[currentLightboxIndex];

      lightboxImg.src = targetItem.large;
      
      const currentLang = document.body.classList.contains('lang-en') ? 'en' : 'sr';
      const altText = currentLang === 'en' ? (targetItem.alt_eng || targetItem.alt) : targetItem.alt;
      lightboxImg.alt = altText;

      lightbox.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
      lightbox.style.display = 'none';
      document.body.style.overflow = 'auto';
    }

    function showPrev() {
      const visibleGridItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
      if (visibleGridItems.length <= 1) return;

      // Find the currently displayed item in the grid
      const currentGridIndex = visibleGridItems.findIndex(item => parseInt(item.dataset.index, 10) === currentLightboxIndex);
      
      let nextGridIndex = currentGridIndex - 1;
      if (nextGridIndex < 0) {
        nextGridIndex = visibleGridItems.length - 1;
      }
      
      currentLightboxIndex = parseInt(visibleGridItems[nextGridIndex].dataset.index, 10);
      openLightbox();
    }

    function showNext() {
      const visibleGridItems = Array.from(galleryGrid.querySelectorAll('.gallery-item'));
      if (visibleGridItems.length <= 1) return;

      // Find the currently displayed item in the grid
      const currentGridIndex = visibleGridItems.findIndex(item => parseInt(item.dataset.index, 10) === currentLightboxIndex);
      
      let nextGridIndex = currentGridIndex + 1;
      if (nextGridIndex >= visibleGridItems.length) {
        nextGridIndex = 0;
      }
      
      currentLightboxIndex = parseInt(visibleGridItems[nextGridIndex].dataset.index, 10);
      openLightbox();
    }

    // Lightbox Control Event Listeners
    closeBtn.addEventListener('click', closeLightbox);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (lightbox.style.display === 'flex') {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPrev();
        if (e.key === 'ArrowRight') showNext();
      }
    });
  }

  // 7. Contact Form Submit Mocking
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Extract form values
      const name = document.getElementById('form-name').value;
      const email = document.getElementById('form-email').value;
      const phone = document.getElementById('form-phone').value;
      const message = document.getElementById('form-message').value;

      // Select translation text for success alert
      const isEnglish = document.body.classList.contains('lang-en');
      const successTitle = isEnglish ? 'Message Sent Successfully!' : 'Poruka uspešno poslata!';
      const successBody = isEnglish 
        ? `Thank you, ${name}! We have received your inquiry and will contact you within 24 hours.` 
        : `Hvala Vam, ${name}! Primili smo Vašu poruku i kontaktiraćemo Vas u roku od 24h.`;

      // Display clean visual feedback instead of raw alert
      const formWrapper = contactForm.parentElement;
      const originalContent = formWrapper.innerHTML;
      
      formWrapper.innerHTML = `
        <div class="text-center" style="padding: 40px 0; animation: fadeInUp 0.5s ease;">
          <div style="font-size: 4rem; color: var(--primary); margin-bottom: 20px;">✓</div>
          <h3 style="color: var(--primary); margin-bottom: 12px;">${successTitle}</h3>
          <p style="color: var(--text-secondary); max-width: 400px; margin: 0 auto 30px;">${successBody}</p>
          <button id="reset-form-btn" class="btn btn-secondary" style="margin-top: 10px;">
            ${isEnglish ? 'Send Another Message' : 'Pošaljite novu poruku'}
          </button>
        </div>
      `;

      // Restore form button binding
      document.getElementById('reset-form-btn').addEventListener('click', () => {
        formWrapper.innerHTML = originalContent;
        // Re-run this setup since form was replaced
        const newForm = document.getElementById('contact-form');
        newForm.addEventListener('submit', (e) => {
          // Re-bind form submission recursively
          contactForm.dispatchEvent(new Event('submit'));
        });
      });
    });
  }
});
