// ============================================
// ROYA DESIGN - MAIN SCRIPT
// ============================================

const projectsData = {
    project1: {
        title: { ar: 'الرفاهية المعاصرة - فيلا سكنية', en: 'Contemporary Luxury - Residential Villa' },
        category: { ar: 'التصميم السكني', en: 'Residential Design' },
        images: [
            'images/ayash/u/005.WebP', 'images/ayash/c/0033.WebP', 'images/ayash/c/0044.WebP',
            'images/ayash/d/002.WebP', 'images/ayash/d/0002.WebP', 'images/ayash/d/003.WebP',
            'images/ayash/d/004.WebP', 'images/ayash/d/011.WebP', 'images/ayash/d/012.WebP',
            'images/ayash/d/013.WebP', 'images/ayash/d/0054.WebP', 'images/ayash/e/02.WebP',
            'images/ayash/e/03.WebP', 'images/ayash/f/001.WebP', 'images/ayash/f/002.WebP',
            'images/ayash/f/003.WebP', 'images/ayash/f/004.WebP', 'images/ayash/f/005.WebP',
            'images/ayash/f/006.WebP', 'images/ayash/f/007.WebP', 'images/ayash/f/008.WebP',
            'images/ayash/h/01.WebP', 'images/ayash/h/04.WebP', 'images/ayash/i/1.WebP',
            'images/ayash/i/2.WebP', 'images/ayash/i/03.WebP', 'images/ayash/i/04.WebP',
            'images/ayash/i/08.WebP', 'images/ayash/j/001.WebP', 'images/ayash/j/002.WebP',
            'images/ayash/j/003.WebP', 'images/ayash/j/004.WebP', 'images/ayash/j/005.WebP',
            'images/ayash/j/006.WebP', 'images/ayash/m/01.WebP', 'images/ayash/m/02.WebP',
            'images/ayash/m/03.WebP', 'images/ayash/m/04.WebP', 'images/ayash/m/05.WebP',
            'images/ayash/m/06.WebP', 'images/ayash/m/07.WebP', 'images/ayash/o/001.WebP',
            'images/ayash/o/002.WebP', 'images/ayash/p/01.WebP', 'images/ayash/p/2.WebP',
            'images/ayash/p/3.WebP', 'images/ayash/p/4.WebP', 'images/ayash/p/5.WebP',
            'images/ayash/q/01.WebP', 'images/ayash/q/02.WebP', 'images/ayash/q/03.WebP',
            'images/ayash/q/04.WebP', 'images/ayash/q/05.WebP', 'images/ayash/r/06.WebP',
            'images/ayash/r/07.WebP', 'images/ayash/s/001.WebP', 'images/ayash/s/002.WebP',
            'images/ayash/s/003.WebP', 'images/ayash/s/004.WebP', 'images/ayash/s/005.WebP',
            'images/ayash/s/006.WebP', 'images/ayash/s/007.WebP', 'images/ayash/t/001.WebP',
            'images/ayash/t/004.WebP', 'images/ayash/t/005.WebP', 'images/ayash/t/006.WebP',
            'images/ayash/t/007.WebP', 'images/ayash/t/008.WebP', 'images/ayash/t/009.WebP',
            'images/ayash/t/010.WebP', 'images/ayash/u/001.WebP', 'images/ayash/u/002.WebP',
            'images/ayash/u/003.WebP', 'images/ayash/u/004.WebP', 'images/ayash/c/0011.WebP',
            'images/ayash/u/006.WebP', 'images/ayash/v/1.WebP', 'images/ayash/v/2.WebP',
            'images/ayash/v/03.WebP', 'images/ayash/y/01.WebP', 'images/ayash/y/02.WebP',
            'images/ayash/y/03.WebP', 'images/ayash/y/04.WebP', 'images/ayash/y/05.WebP',
            'images/ayash/z/00550.WebP', 'images/ayash/z/0066.WebP'
        ]
    },
    project2: {
        title: { ar: 'الهوية البصرية - فيلا سكنية', en: 'Visual Identity - Residential Villa' },
        category: { ar: 'التصميم السكني', en: 'Residential Design' },
        images: Array.from({ length: 16 }, (_, i) => `images/elura/${String(i + 1).padStart(3, '0')}.WebP`)
    },
    project3: {
        title: { ar: 'الفخامة العصرية - فيلا سكنية', en: 'Modern Opulence - Residential Villa' },
        category: { ar: 'التصميم السكني الفاخر', en: 'Luxury Residential Design' },
        images: [
            'images/abdallah/abdallah4.WebP', 'images/abdallah/abdallah1.WebP', 'images/abdallah/abdallah2.WebP',
            'images/abdallah/abdallah3.WebP', 'images/abdallah/abdallah.WebP', 'images/abdallah/abdallah5.WebP',
            'images/abdallah/abdallah6.WebP', 'images/abdallah/abdallah7.WebP', 'images/abdallah/abdallah8.WebP',
            'images/abdallah/abdallah9.WebP', 'images/abdallah/abdallah10.WebP', 'images/abdallah/abdallah11.WebP',
            'images/abdallah/abdallah12.WebP', 'images/abdallah/abdallah13.WebP', 'images/abdallah/abdallah14.WebP',
            'images/abdallah/abdallah15.WebP', 'images/abdallah/abdallah16.WebP', 'images/abdallah/abdallah17.WebP',
            'images/abdallah/abdallah18.WebP', 'images/abdallah/abdallah19.WebP', 'images/abdallah/abdallah20.WebP',
            'images/abdallah/abdallah21.WebP', 'images/abdallah/abdallah22.WebP', 'images/abdallah/abdallah23.WebP',
            'images/abdallah/abdallah24.WebP', 'images/abdallah/abdallah25.WebP', 'images/abdallah/abdallah26.WebP',
            'images/abdallah/abdallah27.WebP', 'images/abdallah/abdallah28.WebP', 'images/abdallah/abdallah29.WebP',
            'images/abdallah/abdallah30.WebP', 'images/abdallah/abdallah31.WebP', 'images/abdallah/abdallah32.WebP',
            'images/abdallah/abdallah33.WebP', 'images/abdallah/abdallah34.WebP', 'images/abdallah/abdallah35.WebP',
            'images/abdallah/abdallah36.WebP', 'images/abdallah/abdallah37.WebP', 'images/abdallah/abdallah38.WebP',
            'images/abdallah/abdallah39.WebP', 'images/abdallah/abdallah40.WebP',
            ...Array.from({ length: 23 }, (_, i) => `images/abdallah/abdallah${i + 41}.WebP`)
        ]
    }
};

// ============================================
// APP STATE
// ============================================
const state = {
    lang: localStorage.getItem('royaLang') || 'ar',
    theme: localStorage.getItem('royaTheme') || 'dark',
    currentProject: null,
    currentIndex: 0
};

// ============================================
// INITIALIZATION
// ============================================
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

function resetToTop() {
    if (window.location.hash) history.replaceState(null, '', window.location.pathname + window.location.search);
    window.scrollTo(0, 0);
}

// Back/forward cache restores the old scroll position, so reset on return too
window.addEventListener('pageshow', resetToTop);

document.addEventListener('DOMContentLoaded', () => {
    resetToTop();
    initLoader();
    initTheme();
    initLanguage();
    initNavigation();
    initProjects();
    initGallery();
    initScrollAnimations();
    initBackToTop();
    initVideos();
    initHeroVideo();
    initHeroParallax();
});

// ============================================
// LOADER
// ============================================
function initLoader() {
    const loader = document.getElementById('loader');
    const done = () => {
        // Called by both the fonts-ready path and the 4s fallback; only run once
        if (document.body.classList.contains('is-loaded')) return;
        loader.classList.add('hidden');
        document.body.classList.add('is-loaded');
        initCounters();
        playHeroVideo();
    };
    
    // Keep the loader up long enough for the signature logo to finish drawing
    const minTime = 2900;
    const startTime = Date.now();
    
    function dismiss() {
        const elapsed = Date.now() - startTime;
        const remaining = Math.max(0, minTime - elapsed);
        setTimeout(done, remaining);
    }
    
    if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(dismiss);
    }
    // Fallback: max 4 seconds
    setTimeout(done, 4000);
}

// ============================================
// THEME
// ============================================
function initTheme() {
    const btn = document.getElementById('themeBtn');
    applyTheme(state.theme);
    
    btn.addEventListener('click', () => {
        state.theme = state.theme === 'dark' ? 'light' : 'dark';
        localStorage.setItem('royaTheme', state.theme);
        applyTheme(state.theme);
    });
}

function applyTheme(theme) {
    const btn = document.getElementById('themeBtn');
    if (theme === 'light') {
        document.documentElement.setAttribute('data-theme', 'light');
        btn.innerHTML = "<i class='bx bx-sun'></i>";
    } else {
        document.documentElement.removeAttribute('data-theme');
        btn.innerHTML = "<i class='bx bx-moon'></i>";
    }
}

// ============================================
// LANGUAGE
// ============================================
function initLanguage() {
    const btn = document.getElementById('langBtn');
    applyLanguage(state.lang);
    
    btn.addEventListener('click', () => {
        state.lang = state.lang === 'ar' ? 'en' : 'ar';
        localStorage.setItem('royaLang', state.lang);
        applyLanguage(state.lang);
    });
}

function applyLanguage(lang) {
    const btn = document.getElementById('langBtn');
    const html = document.documentElement;
    
    if (lang === 'en') {
        html.setAttribute('lang', 'en');
        html.setAttribute('dir', 'ltr');
        document.body.setAttribute('dir', 'ltr');
        btn.textContent = 'AR';
    } else {
        html.setAttribute('lang', 'ar');
        html.setAttribute('dir', 'rtl');
        document.body.setAttribute('dir', 'rtl');
        btn.textContent = 'EN';
    }
    
    // Update all text elements
    document.querySelectorAll('[data-en][data-ar]').forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
    
    // Re-render projects with correct language
    renderProjects();
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const nav = document.getElementById('nav');
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.getElementById('navLinks');
    
    // Scroll effect
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.scrollY > 50);
    }, { passive: true });
    
    // Mobile menu
    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('active');
        navLinks.classList.toggle('open');
    });
    
    // Close on link click
    navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });
    
    // Active section detection
    const sections = document.querySelectorAll('section[id]');
    const links = navLinks.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY + 200;
        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');
            if (scrollY >= top && scrollY < top + height) {
                links.forEach(l => l.classList.remove('active'));
                const active = navLinks.querySelector(`[href="#${id}"]`);
                if (active) active.classList.add('active');
            }
        });
    }, { passive: true });
}

// ============================================
// PROJECTS
// ============================================
function initProjects() {
    renderProjects();
}

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    
    grid.innerHTML = '';
    
    Object.entries(projectsData).forEach(([key, project]) => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-reveal', '');
        card.setAttribute('data-project', key);
        
        const imgCount = project.images.length;
        const viewText = state.lang === 'ar' ? 'عرض الصور' : 'View Gallery';
        
        card.innerHTML = `
            <img src="${project.images[0]}" alt="${project.title[state.lang]}" loading="lazy">
            <div class="project-badge"><i class='bx bx-images'></i> ${imgCount} ${state.lang === 'ar' ? 'صورة' : 'photos'}</div>
            <div class="project-overlay">
                <h3>${project.title[state.lang]}</h3>
                <span>${project.category[state.lang]}</span>
                <div class="project-cta"><i class='bx bx-show'></i> ${viewText}</div>
            </div>
        `;
        
        card.addEventListener('click', () => openGallery(key));
        grid.appendChild(card);
    });
    
    // Re-apply reveal to new elements
    observeReveals();
}

// ============================================
// GALLERY MODAL
// ============================================
function initGallery() {
    const modal = document.getElementById('galleryModal');
    const closeBtn = document.getElementById('modalClose');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const overlay = modal.querySelector('.modal-overlay');
    
    closeBtn.addEventListener('click', closeGallery);
    overlay.addEventListener('click', closeGallery);
    prevBtn.addEventListener('click', () => navigateGallery(-1));
    nextBtn.addEventListener('click', () => navigateGallery(1));
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!modal.classList.contains('active')) return;
        if (e.key === 'Escape') closeGallery();
        if (e.key === 'ArrowLeft') navigateGallery(document.documentElement.dir === 'rtl' ? 1 : -1);
        if (e.key === 'ArrowRight') navigateGallery(document.documentElement.dir === 'rtl' ? -1 : 1);
    });
}

function openGallery(projectKey) {
    const project = projectsData[projectKey];
    if (!project) return;
    
    state.currentProject = project;
    state.currentIndex = 0;
    
    const modal = document.getElementById('galleryModal');
    const title = document.getElementById('modalTitle');
    
    title.textContent = project.title[state.lang];
    
    renderThumbnails();
    showImage(0);
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function showImage(index) {
    const project = state.currentProject;
    if (!project) return;
    
    const total = project.images.length;
    state.currentIndex = (index + total) % total;
    
    const img = document.getElementById('mainImage');
    const counter = document.getElementById('imageCounter');
    
    img.style.opacity = '0';
    setTimeout(() => {
        img.onload = () => { img.style.opacity = '1'; };
        img.src = project.images[state.currentIndex];
    }, 150);
    
    [1, -1, 2].forEach(offset => {
        new Image().src = project.images[(state.currentIndex + offset + total) % total];
    });
    
    counter.textContent = `\u200e${state.currentIndex + 1} / ${total}`;
    
    // Update active thumbnail
    document.querySelectorAll('.thumb').forEach((t, i) => {
        t.classList.toggle('active', i === state.currentIndex);
    });
    
    // Scroll active thumbnail into view
    const activeThumb = document.querySelector('.thumb.active');
    if (activeThumb) activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
}

function navigateGallery(direction) {
    showImage(state.currentIndex + direction);
}

function renderThumbnails() {
    const container = document.getElementById('thumbnailsContainer');
    const project = state.currentProject;
    if (!container || !project) return;
    
    container.innerHTML = '';
    
    project.images.forEach((src, i) => {
        const thumb = document.createElement('div');
        thumb.className = `thumb${i === 0 ? ' active' : ''}`;
        thumb.innerHTML = `<img src="${src.replace('images/', 'images/thumbs/')}" alt="" loading="lazy">`;
        thumb.addEventListener('click', () => showImage(i));
        container.appendChild(thumb);
    });
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
function initScrollAnimations() {
    document.querySelectorAll('.section-head > *, .videos-head > *').forEach(el => {
        el.setAttribute('data-reveal', '');
    });
    observeReveals();
}

function observeReveals() {
    const elements = document.querySelectorAll('[data-reveal]:not(.revealed)');
    let delay = 0;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                delay += 80;
                const d = delay;
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, d);
                observer.unobserve(entry.target);
            }
        });
        // Reset delay after batch
        setTimeout(() => { delay = 0; }, 100);
    }, { threshold: 0.15 });
    
    elements.forEach(el => observer.observe(el));
}

// ============================================
// COUNTER ANIMATION
// ============================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-num');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(el => observer.observe(el));
}

function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'));
    const duration = 2000;
    const start = performance.now();
    
    function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(target * ease) + '+';
        if (progress < 1) requestAnimationFrame(update);
    }
    
    requestAnimationFrame(update);
}

// ============================================
// BACK TO TOP
// ============================================
function initBackToTop() {
    const btn = document.getElementById('backTop');
    
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 500);
    }, { passive: true });
    
    btn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// ============================================
// VIDEO TOURS
// ============================================
function initVideos() {
    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    if (!modal || !player) return;
    
    const canHover = window.matchMedia('(hover: hover)').matches;
    
    const open = (src, poster) => {
        player.src = src;
        player.poster = poster || '';
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        player.play().catch(() => {});
    };
    
    document.querySelectorAll('.video-card').forEach(card => {
        const preview = card.querySelector('video');
        
        if (canHover) {
            card.addEventListener('mouseenter', () => preview.play().catch(() => {}));
            card.addEventListener('mouseleave', () => preview.pause());
        }
        
        card.addEventListener('click', () => {
            preview.pause();
            open(preview.querySelector('source').getAttribute('src'), preview.poster);
        });
    });
    
    const close = () => {
        player.pause();
        player.removeAttribute('src');
        player.load();
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    document.getElementById('videoModalClose').addEventListener('click', close);
    modal.querySelector('.modal-overlay').addEventListener('click', close);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) close();
    });
}

// ============================================
// HERO VIDEO
// ============================================
function playHeroVideo() {
    const video = document.querySelector('.hero-video');
    if (!video || !video.paused || document.querySelector('.modal.active')) return;
    video.muted = true;
    video.play().catch(() => {});
}

function initHeroVideo() {
    const video = document.querySelector('.hero-video');
    if (!video) return;
    
    // Resume whenever it's back on screen, pause when scrolled away to save battery
    new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) playHeroVideo();
        else video.pause();
    }).observe(video);
    
    document.addEventListener('visibilitychange', () => { if (!document.hidden) playHeroVideo(); });
    window.addEventListener('pageshow', playHeroVideo);
    
    // Some phones block autoplay (e.g. battery-saver mode) until the first touch
    const events = ['touchend', 'click', 'keydown'];
    events.forEach(e => window.addEventListener(e, playHeroVideo, { passive: true }));
    video.addEventListener('playing', () => {
        events.forEach(e => window.removeEventListener(e, playHeroVideo));
    }, { once: true });
    
    playHeroVideo();
}

// ============================================
// HERO SCROLL PARALLAX
// ============================================
function initHeroParallax() {
    const grid = document.querySelector('.hero-grid');
    if (!grid || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const hero = grid.closest('.hero');
    
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
            // Only when the whole hero fits on screen; otherwise (phones) the buttons/stats would fade before being seen
            const fits = hero.offsetHeight <= window.innerHeight + 1;
            const y = fits ? Math.min(window.scrollY, window.innerHeight) : 0;
            grid.style.transform = y ? `translateY(${y * 0.3}px)` : '';
            grid.style.opacity = y ? Math.max(0, 1 - y / (window.innerHeight * 0.8)) : '';
            ticking = false;
        });
    }, { passive: true });
}
