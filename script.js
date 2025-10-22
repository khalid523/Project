// ============================================
// CONFIGURATION & DATA
// ============================================
const CONFIG = {
    defaultLang: 'ar',
    defaultTheme: 'light',
    animationDuration: 300,
    imagePlaceholder: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="80"%3E%3Crect fill="%236366f1" width="100" height="80"/%3E%3Ctext fill="white" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage%3C/text%3E%3C/svg%3E'
};

const projectsData = {
    project1: {
        title: { 
            ar: 'الرفاهية المعاصرة - تصميم شقة سكنية', 
            en: 'Contemporary Luxury - Residential Apartment Design'
        },
        description: {
            ar: 'تصميم داخلي متكامل لشقة سكنية تجمع بين الأناقة المعاصرة والراحة الوظيفية مع استخدام مواد عالية الجودة',
            en: 'Comprehensive interior design for a residential apartment blending contemporary elegance with functional comfort using premium materials'
        },
        category: { 
            ar: 'التصميم السكني', 
            en: 'Residential Design'
        },
        style: { ar: 'معاصر فاخر', en: 'Luxury Contemporary' },
        location: { ar: 'عمّان، الأردن', en: 'Amman, Jordan' },
        tech: [
            { ar: 'تصميم داخلي', en: 'Interior Design' },
            { ar: 'أثاث مخصص', en: 'Custom Furniture' },
            { ar: 'إضاءة', en: 'Lighting' },
            { ar: 'ديكور', en: 'Decor' }
        ],
        images: [
            'images/ayash/c/0011.jpg', 'images/ayash/c/0033.jpg', 'images/ayash/c/0044.jpg',
            'images/ayash/d/002.jpg', 'images/ayash/d/0002.jpg', 'images/ayash/d/003.jpg',
            'images/ayash/d/004.jpg', 'images/ayash/d/011.jpg', 'images/ayash/d/012.jpg',
            'images/ayash/d/013.jpg', 'images/ayash/d/0054.jpg', 'images/ayash/e/02.jpg',
            'images/ayash/e/03.jpg', 'images/ayash/f/001.jpg', 'images/ayash/f/002.jpg',
            'images/ayash/f/003.jpg', 'images/ayash/f/004.jpg', 'images/ayash/f/005.jpg',
            'images/ayash/f/006.jpg', 'images/ayash/f/007.jpg', 'images/ayash/f/008.jpg',
            'images/ayash/h/01.jpg', 'images/ayash/h/04.jpg', 'images/ayash/i/1.jpg',
            'images/ayash/i/2.jpg', 'images/ayash/i/03.jpg', 'images/ayash/i/04.jpg',
            'images/ayash/i/08.jpg', 'images/ayash/j/001.jpg', 'images/ayash/j/002.jpg',
            'images/ayash/j/003.jpg', 'images/ayash/j/004.jpg', 'images/ayash/j/005.jpg',
            'images/ayash/j/006.jpg', 'images/ayash/m/01.jpg', 'images/ayash/m/02.jpg',
            'images/ayash/m/03.jpg', 'images/ayash/m/04.jpg', 'images/ayash/m/05.jpg',
            'images/ayash/m/06.jpg', 'images/ayash/m/07.jpg', 'images/ayash/o/001.jpg',
            'images/ayash/o/002.jpg', 'images/ayash/p/01.jpg', 'images/ayash/p/2.jpg',
            'images/ayash/p/3.jpg', 'images/ayash/p/4.jpg', 'images/ayash/p/5.jpg',
            'images/ayash/q/01.jpg', 'images/ayash/q/02.jpg', 'images/ayash/q/03.jpg',
            'images/ayash/q/04.jpg', 'images/ayash/q/05.jpg', 'images/ayash/r/06.jpg',
            'images/ayash/r/07.jpg', 'images/ayash/s/001.jpg', 'images/ayash/s/002.jpg',
            'images/ayash/s/003.jpg', 'images/ayash/s/004.jpg', 'images/ayash/s/005.jpg',
            'images/ayash/s/006.jpg', 'images/ayash/s/007.jpg', 'images/ayash/t/001.jpg',
            'images/ayash/t/004.jpg', 'images/ayash/t/005.jpg', 'images/ayash/t/006.jpg',
            'images/ayash/t/007.jpg', 'images/ayash/t/008.jpg', 'images/ayash/t/009.jpg',
            'images/ayash/t/010.jpg', 'images/ayash/u/001.jpg', 'images/ayash/u/002.jpg',
            'images/ayash/u/003.jpg', 'images/ayash/u/004.jpg', 'images/ayash/u/005.jpg',
            'images/ayash/u/006.jpg', 'images/ayash/v/1.jpg', 'images/ayash/v/2.jpg',
            'images/ayash/v/03.jpg', 'images/ayash/y/01.jpg', 'images/ayash/y/02.jpg',
            'images/ayash/y/03.jpg', 'images/ayash/y/04.jpg', 'images/ayash/y/05.jpg',
            'images/ayash/z/0055.jpg', 'images/ayash/z/0066.jpg'
        ]
    },
    project2: {
        title: { 
            ar: 'الهوية البصرية - مشروع تجاري متكامل', 
            en: 'Visual Identity - Comprehensive Commercial Project'
        },
        description: {
            ar: 'هوية بصرية متكاملة وبيئة عمل ملهمة تجمع بين الاحترافية والإبداع في تصميم المساحات التجارية',
            en: 'Comprehensive visual identity and inspiring work environment blending professionalism with creativity in commercial space design'
        },
        category: { 
            ar: 'التصميم التجاري', 
            en: 'Commercial Design'
        },
        style: { ar: 'حديث متميز', en: 'Modern Premium' },
        location: { ar: 'عمّان، الأردن', en: 'Amman, Jordan' },
          tech: [
            { ar: 'هوية بصرية', en: 'Visual Identity' },
            { ar: 'تصميم مساحات', en: 'Space Design' },
            { ar: 'أثاث مكتبي', en: 'Office Furniture' },
            { ar: 'إضاءة', en: 'Lighting' }
        ],
        images: Array.from({ length: 16 }, (_, i) => 
            `images/elura/${String(i + 1).padStart(3, '0')}.jpg`
        )
    },
    project3: {
        title: { 
            ar: 'الفخامة العصرية - فيلا سكنية', 
            en: 'Modern Opulence - Residential Villa'
        },
        description: {
            ar: 'تصميم داخلي مبتكر لفيلا سكنية تجمع بين الفخامة والوظيفية مع الاهتمام بالتفاصيل الدقيقة والجودة العالية',
            en: 'Innovative interior design for a residential villa blending opulence with functionality, focusing on intricate details and high quality'
        },
        category: { 
            ar: 'التصميم الفندقي السكني', 
            en: 'Luxury Residential Design'
        },
        style: { ar: 'فخم معاصر', en: 'Luxury Contemporary' },
        location: { ar: 'عمّان، الأردن', en: 'Amman, Jordan' },
        tech: [
            { ar: 'تصميم فيلات', en: 'Villa Design' },
            { ar: 'أثاث فاخر', en: 'Luxury Furniture' },
            { ar: 'ديكور فني', en: 'Artistic Decor' },
            { ar: 'إضاءة متقدمة', en: 'Advanced Lighting' }
        ],
        images: [
            'images/abdallah/19.jpg', 'images/abdallah/0001.jpg', 'images/abdallah/2-ph.jpg',
            'images/abdallah/2.jpg', 'images/abdallah/005.jpg', 'images/abdallah/007.jpg',
            'images/abdallah/0010.jpg', 'images/abdallah/0011.jpg', 'images/abdallah/0021.jpg',
            'images/abdallah/22.jpg', 'images/abdallah/34.jpg', 'images/abdallah/0100.jpg',
            'images/abdallah/0101.jpg', 'images/abdallah/112.jpg', 'images/abdallah/00122.jpg',
            'images/abdallah/0202.jpg', 'images/abdallah/0212.jpg', 'images/abdallah/0303.jpg',
            'images/abdallah/00333.jpg', 'images/abdallah/360.jpg', 'images/abdallah/0404.jpg',
            'images/abdallah/00439.jpg', 'images/abdallah/0505.jpg', 'images/abdallah/0606.jpg',
            'images/abdallah/0707.jpg', 'images/abdallah/0808.jpg', 'images/abdallah/0909.jpg',
            'images/abdallah/02222.jpg', 'images/abdallah/0003331.jpg', 'images/abdallah/003338.jpg',
            'images/abdallah/4111.jpg', 'images/abdallah/004452.jpg', 'images/abdallah/004546.jpg',
            'images/abdallah/08799.jpg', 'images/abdallah/12344.jpg', 'images/abdallah/33434.jpg',
            'images/abdallah/333344.jpg', 'images/abdallah/0545503.jpg', 'images/abdallah/00033122231.jpg',
            'images/abdallah/0044222252.jpg', 'images/abdallah/0545502222223.jpg',
            ...Array.from({ length: 18 }, (_, i) => `images/abdallah/a.${i + 1}.jpg`).filter((_, i) => i !== 18)
        ]
    }
};

// ============================================
// STATE MANAGEMENT
// ============================================
const AppState = {
    currentLang: localStorage.getItem('royaLang') || CONFIG.defaultLang,
    currentTheme: localStorage.getItem('royaTheme') || CONFIG.defaultTheme,
    currentProject: null,
    currentImageIndex: 0,
    
    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem('royaLang', lang);
    },
    
    setTheme(theme) {
        this.currentTheme = theme;
        localStorage.setItem('royaTheme', theme);
    }
};

// ============================================
// DOM CACHE
// ============================================
const DOM = {
    get elements() {
        return {
            body: document.body,
            projectsGrid: document.getElementById('projectsGrid'),
            galleryModal: document.getElementById('galleryModal'),
            modalTitle: document.getElementById('modalTitle'),
            mainImage: document.getElementById('mainImage'),
            thumbnailsContainer: document.getElementById('thumbnailsContainer'),
            imageCounter: document.getElementById('imageCounter'),
            modalClose: document.getElementById('modalClose'),
            prevBtn: document.getElementById('prevBtn'),
            nextBtn: document.getElementById('nextBtn'),
            langBtn: document.getElementById('langBtn'),
            themeToggle: document.getElementById('themeToggle'),
            hamburger: document.getElementById('hamburger'),
            navMenu: document.getElementById('navMenu'),
            backToTop: document.getElementById('backToTop'),
            heroParticles: document.getElementById('heroParticles')
        };
    }
};

// ============================================
// UTILITY FUNCTIONS
// ============================================
const Utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Preload images
    preloadImages(imageUrls) {
        imageUrls.forEach(url => {
            const img = new Image();
            img.src = url;
        });
    },

    // Create element with attributes
    createElement(tag, attributes = {}, children = []) {
        const element = document.createElement(tag);
        Object.assign(element, attributes);
        children.forEach(child => element.appendChild(child));
        return element;
    }
};

// ============================================
// PROJECTS GALLERY MODULE
// ============================================
const ProjectsGallery = {
    init() {
        this.renderProjects();
        this.initializeModal();
        this.preloadAllImages();
    },

    preloadAllImages() {
        Object.values(projectsData).forEach(project => {
            Utils.preloadImages(project.images.slice(0, 3)); // Preload first 3 images
        });
    },

    renderProjects() {
        const { projectsGrid } = DOM.elements;
        if (!projectsGrid) return;

        projectsGrid.innerHTML = '';
        Object.entries(projectsData).forEach(([key, project]) => {
            projectsGrid.appendChild(this.createProjectCard(key, project));
        });
    },

 createProjectCard(projectKey, project) {
    const firstImage = project.images[0];
    const hasValidImage = firstImage && !firstImage.includes('image1.jpg');

    const imageContainer = Utils.createElement('div', { className: 'project-image-container' });
    
    if (hasValidImage) {
        const img = Utils.createElement('img', {
            className: 'project-image',
            src: firstImage,
            alt: project.title[AppState.currentLang],
            onerror: () => this.showImagePlaceholder(imageContainer)
        });
        imageContainer.appendChild(img);
    } else {
        this.showImagePlaceholder(imageContainer);
    }

    const overlay = Utils.createElement('div', { className: 'project-overlay' }, [
        Utils.createElement('span', { 
            className: 'project-category',
            textContent: project.category[AppState.currentLang]
        }),
        Utils.createElement('div', { className: 'images-count' }, [
            Utils.createElement('i', { className: 'bx bx-images' }),
            Utils.createElement('span', { textContent: `${project.images.length} ${AppState.currentLang === 'ar' ? 'صور' : 'images'}` })
        ])
    ]);

    imageContainer.appendChild(overlay);

    const content = Utils.createElement('div', { className: 'project-content' }, [
        Utils.createElement('h3', { 
            className: 'project-title',
            textContent: project.title[AppState.currentLang]
        }),
        Utils.createElement('p', { 
            className: 'project-description',
            textContent: project.description[AppState.currentLang]
        }),
        Utils.createElement('div', { 
            className: 'project-details'
        }, [
            Utils.createElement('div', { className: 'project-style' }, [
                Utils.createElement('strong', { textContent: AppState.currentLang === 'ar' ? 'النمط: ' : 'Style: ' }),
                Utils.createElement('span', { textContent: project.style[AppState.currentLang] })
            ]),
            Utils.createElement('div', { className: 'project-location' }, [
                Utils.createElement('strong', { textContent: AppState.currentLang === 'ar' ? 'الموقع: ' : 'Location: ' }),
                Utils.createElement('span', { textContent: project.location[AppState.currentLang] })
            ])
        ]),
        Utils.createElement('div', { 
            className: 'project-tech'
        }, project.tech.map(techItem => 
            Utils.createElement('span', { 
                className: 'tech-tag',
                textContent: techItem[AppState.currentLang] || techItem.ar
            })
        ))
    ]);

    const card = Utils.createElement('div', { 
        className: 'project-card',
        'data-project': projectKey
    }, [imageContainer, content]);

    card.addEventListener('click', () => this.openGallery(projectKey));
    return card;
   },

    showImagePlaceholder(container) {
        container.innerHTML = '<div class="image-placeholder"><i class="bx bx-image-alt"></i></div>';
    },

    openGallery(projectKey) {
        AppState.currentProject = projectKey;
        AppState.currentImageIndex = 0;
        const project = projectsData[projectKey];

        const { galleryModal, modalTitle } = DOM.elements;
        modalTitle.textContent = project.title[AppState.currentLang];
        galleryModal.classList.add('active');
        
        this.renderGallery();
        this.updateGalleryIcons();
    },

   renderGallery() {
    const project = projectsData[AppState.currentProject];
    const { mainImage, thumbnailsContainer, imageCounter } = DOM.elements;

    mainImage.src = project.images[AppState.currentImageIndex];
    imageCounter.textContent = `${AppState.currentImageIndex + 1} / ${project.images.length}`;

    thumbnailsContainer.innerHTML = '';
    project.images.forEach((imageSrc, index) => {
        const thumbnail = Utils.createElement('div', {
            className: `thumbnail ${index === AppState.currentImageIndex ? 'active' : ''}`
        }, [
            Utils.createElement('img', {
                src: imageSrc,
                alt: `${project.title[AppState.currentLang]} ${index + 1}`,
                onerror: (e) => e.target.src = CONFIG.imagePlaceholder
            })
        ]);

        thumbnail.addEventListener('click', () => {
            AppState.currentImageIndex = index;
            this.renderGallery();
        });

        thumbnailsContainer.appendChild(thumbnail);
    });

    // Update tech tags if they exist
    const techContainer = document.querySelector('.gallery-tech');
    if (techContainer) {
        techContainer.innerHTML = '';
        project.tech.forEach(techItem => {
            const techTag = Utils.createElement('span', {
                className: 'tech-tag',
                textContent: techItem[AppState.currentLang] || techItem.ar
            });
            techContainer.appendChild(techTag);
        });
    }
},

    initializeModal() {
        const { galleryModal, modalClose, prevBtn, nextBtn } = DOM.elements;
        if (!galleryModal) return;

        // Close modal
        modalClose?.addEventListener('click', () => galleryModal.classList.remove('active'));
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) galleryModal.classList.remove('active');
        });

        // Navigation
        prevBtn?.addEventListener('click', () => this.navigate(-1));
        nextBtn?.addEventListener('click', () => this.navigate(1));

        // Initialize thumbnails scrolling
        this.initThumbnailsScrolling();

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!galleryModal.classList.contains('active')) return;
            
            const { body } = DOM.elements;
            const isEnglish = body.classList.contains('english');
            
            switch(e.key) {
                case 'ArrowLeft': 
                    this.navigate(isEnglish ? -1 : 1); 
                    break;
                case 'ArrowRight': 
                    this.navigate(isEnglish ? 1 : -1); 
                    break;
                case 'Escape': 
                    galleryModal.classList.remove('active'); 
                    break;
            }
        });
    },

    navigate(direction) {
        const project = projectsData[AppState.currentProject];
        const { body } = DOM.elements;
        const isEnglish = body.classList.contains('english');
        
        // Adjust direction based on language
        const adjustedDirection = isEnglish ? -direction : direction;
        
        AppState.currentImageIndex = (AppState.currentImageIndex + adjustedDirection + project.images.length) % project.images.length;
        this.renderGallery();
    },

    updateGalleryIcons() {
        const prevIcon = document.querySelector('#prevBtn i');
        const nextIcon = document.querySelector('#nextBtn i');
        const { body } = DOM.elements;
        const isEnglish = body.classList.contains('english');
        
        if (prevIcon && nextIcon) {
            if (isEnglish) {
                // English mode: left arrow for previous, right arrow for next
                prevIcon.className = 'bx bx-chevron-left';
                nextIcon.className = 'bx bx-chevron-right';
            } else {
                // Arabic mode: right arrow for previous, left arrow for next
                prevIcon.className = 'bx bx-chevron-right';
                nextIcon.className = 'bx bx-chevron-left';
            }
        }
    },

    // ============================================
    // THUMBNAILS SCROLLING FUNCTIONALITY
    // ============================================
    initThumbnailsScrolling() {
        const { thumbnailsContainer } = DOM.elements;
        if (!thumbnailsContainer) return;

        let isDragging = false;
        let startX;
        let scrollLeft;

        // Mouse events
        thumbnailsContainer.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - thumbnailsContainer.offsetLeft;
            scrollLeft = thumbnailsContainer.scrollLeft;
            thumbnailsContainer.style.cursor = 'grabbing';
            thumbnailsContainer.style.userSelect = 'none';
        });

        thumbnailsContainer.addEventListener('mouseleave', () => {
            isDragging = false;
            thumbnailsContainer.style.cursor = 'grab';
        });

        thumbnailsContainer.addEventListener('mouseup', () => {
            isDragging = false;
            thumbnailsContainer.style.cursor = 'grab';
            thumbnailsContainer.style.userSelect = 'auto';
        });

        thumbnailsContainer.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - thumbnailsContainer.offsetLeft;
            const walk = (x - startX) * 2; // Scroll-fast factor
            thumbnailsContainer.scrollLeft = scrollLeft - walk;
        });

        // Touch events for mobile
        thumbnailsContainer.addEventListener('touchstart', (e) => {
            isDragging = true;
            startX = e.touches[0].pageX - thumbnailsContainer.offsetLeft;
            scrollLeft = thumbnailsContainer.scrollLeft;
        });

        thumbnailsContainer.addEventListener('touchend', () => {
            isDragging = false;
        });

        thumbnailsContainer.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX - thumbnailsContainer.offsetLeft;
            const walk = (x - startX) * 2;
            thumbnailsContainer.scrollLeft = scrollLeft - walk;
        });

        // Add scroll indicators
        this.updateScrollIndicators();
        thumbnailsContainer.addEventListener('scroll', () => this.updateScrollIndicators());
    },

    updateScrollIndicators() {
        const { thumbnailsContainer } = DOM.elements;
        if (!thumbnailsContainer) return;

        const { scrollLeft, scrollWidth, clientWidth } = thumbnailsContainer;
        const canScrollLeft = scrollLeft > 0;
        const canScrollRight = scrollLeft < (scrollWidth - clientWidth - 10); // 10px tolerance

        // Update CSS variables for scroll indicators
        thumbnailsContainer.style.setProperty('--can-scroll-left', canScrollLeft ? '1' : '0');
        thumbnailsContainer.style.setProperty('--can-scroll-right', canScrollRight ? '1' : '0');
    }
};

// ============================================
// LANGUAGE MANAGEMENT MODULE
// ============================================
const LanguageManager = {
    init() {
        this.applySavedLanguage();
        this.bindEvents();
    },

    applySavedLanguage() {
        const { body, langBtn } = DOM.elements;
        const isEnglish = AppState.currentLang === 'en';

        body.classList.toggle('english', isEnglish);
        body.setAttribute('dir', isEnglish ? 'ltr' : 'rtl');
        document.documentElement.setAttribute('lang', AppState.currentLang);

        const span = langBtn?.querySelector('span');
        if (span) span.textContent = isEnglish ? 'AR' : 'EN';

        this.updateAllTextContent();
        this.updatePlaceholders();
        ProjectsGallery.updateGalleryIcons();
    },

    bindEvents() {
        const { langBtn } = DOM.elements;
        langBtn?.addEventListener('click', () => this.toggleLanguage());
    },

    toggleLanguage() {
        AppState.setLanguage(AppState.currentLang === 'ar' ? 'en' : 'ar');
        this.applySavedLanguage();
        ProjectsGallery.renderProjects();
        
        if (DOM.elements.galleryModal?.classList.contains('active')) {
            ProjectsGallery.renderGallery();
        }
    },

    updateAllTextContent() {
        const attribute = `data-${AppState.currentLang}`;
        document.querySelectorAll(`[${attribute}]`).forEach(element => {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') return;
            const newText = element.getAttribute(attribute);
            if (newText) element.textContent = newText;
        });
    },

    updatePlaceholders() {
        document.querySelectorAll('input, textarea').forEach(element => {
            const placeholderAttr = AppState.currentLang === 'en' ? 'data-en-placeholder' : 'placeholder';
            const placeholder = element.getAttribute(placeholderAttr);
            if (placeholder) element.placeholder = placeholder;
        });
    }
};

// ============================================
// THEME MANAGEMENT MODULE
// ============================================
const ThemeManager = {
    init() {
        this.applySavedTheme();
        this.bindEvents();
    },

    applySavedTheme() {
        const { body, themeToggle } = DOM.elements;
        const isDark = AppState.currentTheme === 'dark';

        if (isDark) {
            body.setAttribute('data-theme', 'dark');
            themeToggle.innerHTML = '<i class="bx bx-sun"></i>';
            themeToggle.style.color = 'var(--accent-color)';
        } else {
            body.removeAttribute('data-theme');
            themeToggle.innerHTML = '<i class="bx bx-moon"></i>';
            themeToggle.style.color = 'var(--dark-color)';
        }
        
        // Update logo visibility based on theme
        this.updateLogoVisibility();
    },

    bindEvents() {
        const { themeToggle } = DOM.elements;
        themeToggle?.addEventListener('click', () => this.toggleTheme());
    },

    toggleTheme() {
        AppState.setTheme(AppState.currentTheme === 'light' ? 'dark' : 'light');
        this.applySavedTheme();
    },

    updateLogoVisibility() {
        const darkLogos = document.querySelectorAll('.logo-dark');
        const lightLogos = document.querySelectorAll('.logo-light');
        const isDark = AppState.currentTheme === 'dark';

        darkLogos.forEach(logo => {
            logo.style.display = isDark ? 'none' : 'block';
        });
        
        lightLogos.forEach(logo => {
            logo.style.display = isDark ? 'block' : 'none';
        });
    }
};

// ============================================
// UI COMPONENTS MODULE
// ============================================
const UIComponents = {
    init() {
        this.initLoadingScreen();
        this.initNavigation();
        this.initBackToTop();
        this.initSmoothScroll();
        this.initCounters();
        this.initPortfolioFilter();
        this.initContactForm();
        this.initParticles();
    },

    initLoadingScreen() {
        const loadingScreen = document.querySelector('.loading-screen');
        if (!loadingScreen) return;

        setTimeout(() => {
            loadingScreen.classList.add('loaded');
            setTimeout(() => loadingScreen.remove(), 500);
        }, 1500);
    },

    initNavigation() {
        const { hamburger, navMenu } = DOM.elements;
        if (!hamburger || !navMenu) return;

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', Utils.debounce(() => {
            const header = document.querySelector('.header');
            if (header) {
                header.classList.toggle('scrolled', window.scrollY > 100);
            }
            this.updateActiveNavLink();
        }, 10));
    },

    initBackToTop() {
        const { backToTop } = DOM.elements;
        if (!backToTop) return;

        window.addEventListener('scroll', Utils.debounce(() => {
            backToTop.classList.toggle('visible', window.scrollY > 300);
        }, 10));

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;

                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop - 80;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
                }
            });
        });
    },

    initCounters() {
        const counters = document.querySelectorAll('.stat-number');
        if (counters.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.startCounter(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    },

    startCounter(element) {
        const target = parseInt(element.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(current);
            }
        }, 16);
    },

    initPortfolioFilter() {
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        
        if (filterBtns.length === 0 || portfolioItems.length === 0) return;

        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                filterBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');
                portfolioItems.forEach(item => {
                    const showItem = filter === 'all' || item.getAttribute('data-category') === filter;
                    
                    if (showItem) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 100);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(20px)';
                        setTimeout(() => item.style.display = 'none', 300);
                    }
                });
            });
        });
    },

    initContactForm() {
        const contactForm = document.querySelector('.contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e, contactForm));
        }

        const newsletterForm = document.querySelector('.newsletter-form');
        if (newsletterForm) {
            newsletterForm.addEventListener('submit', (e) => this.handleFormSubmit(e, newsletterForm, 'Thank you for subscribing to our newsletter!'));
        }
    },

    handleFormSubmit(e, form, customMessage = null) {
        e.preventDefault();
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;

        // Show loading state
        submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i>';
        submitBtn.disabled = true;

        setTimeout(() => {
            this.showNotification(customMessage || 'Message sent successfully! We will get back to you soon.', 'success');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    },

    showNotification(message, type = 'info') {
        const notification = Utils.createElement('div', {
            className: `notification ${type}`,
            style: `
                position: fixed; top: 20px; right: 20px; background: ${type === 'success' ? '#10b981' : '#6366f1'};
                color: white; padding: 15px 20px; border-radius: 10px; box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
                z-index: 10000; display: flex; align-items: center; gap: 10px; transform: translateX(150%);
                transition: transform 0.3s ease; max-width: 400px;
            `
        }, [
            Utils.createElement('span', { textContent: message }),
            Utils.createElement('button', { 
                className: 'notification-close',
                innerHTML: '<i class="bx bx-x"></i>'
            })
        ]);

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.style.transform = 'translateX(0)', 100);

        // Close functionality
        notification.querySelector('.notification-close').addEventListener('click', () => this.removeNotification(notification));

        // Auto remove
        setTimeout(() => this.removeNotification(notification), 5000);
    },

    removeNotification(notification) {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => notification.remove(), 300);
    },

    initParticles() {
        const { heroParticles } = DOM.elements;
        if (!heroParticles) return;

        const particleCount = 30;
        for (let i = 0; i < particleCount; i++) {
            this.createParticle(heroParticles);
        }

        // Add animation styles
        if (!document.querySelector('#particle-styles')) {
            const style = Utils.createElement('style', {
                id: 'particle-styles',
                textContent: `
                    @keyframes floatParticle {
                        0% { transform: translate(0, 0); opacity: 0; }
                        10% { opacity: 1; }
                        90% { opacity: 1; }
                        100% { transform: translate(${Math.random() * 100 - 50}px, ${Math.random() * 100 - 50}px); opacity: 0; }
                    }
                `
            });
            document.head.appendChild(style);
        }
    },

    createParticle(container) {
        const particle = Utils.createElement('div', {
            style: `
                position: absolute; width: ${Math.random() * 5 + 2}px; height: ${Math.random() * 5 + 2}px;
                background: rgba(255, 255, 255, ${Math.random() * 0.3}); border-radius: 50%;
                top: ${Math.random() * 100}%; left: ${Math.random() * 100}%;
                animation: floatParticle ${Math.random() * 20 + 10}s linear infinite;
            `
        });
        container.appendChild(particle);
    },

    updateActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + section.clientHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }
};

// ============================================
// ABOUT & CONTACT OPTIMIZATIONS
// ============================================
const AboutContactManager = {
    init() {
        this.initScrollAnimations();
        this.initEnhancedForm();
        this.initInteractiveElements();
    },

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    
                    // Animate counters in about section
                    if (entry.target.classList.contains('about-stats')) {
                        this.animateCounters();
                    }
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.about-content, .contact-content, .about-stats').forEach(el => {
            el.classList.add('fade-in-up');
            observer.observe(el);
        });
    },

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const timer = setInterval(() => {
                current += step;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 16);
        });
    },

    initEnhancedForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            await this.handleFormSubmission(contactForm);
        });

        // Add real-time validation
        this.initFormValidation(contactForm);
    },

    initFormValidation(form) {
        const inputs = form.querySelectorAll('input, textarea, select');
        
        inputs.forEach(input => {
            input.addEventListener('blur', () => {
                this.validateField(input);
            });

            input.addEventListener('input', () => {
                this.clearFieldError(input);
            });
        });
    },

    validateField(field) {
        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        switch(field.type) {
            case 'email':
                isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
                errorMessage = AppState.currentLang === 'ar' ? 'البريد الإلكتروني غير صحيح' : 'Invalid email address';
                break;
            case 'tel':
                isValid = /^[\+]?[0-9\s\-\(\)]{8,}$/.test(value);
                errorMessage = AppState.currentLang === 'ar' ? 'رقم الهاتف غير صحيح' : 'Invalid phone number';
                break;
            default:
                isValid = value.length > 0;
                errorMessage = AppState.currentLang === 'ar' ? 'هذا الحقل مطلوب' : 'This field is required';
        }

        if (!isValid && value.length > 0) {
            this.showFieldError(field, errorMessage);
            return false;
        }

        this.clearFieldError(field);
        return true;
    },

    showFieldError(field, message) {
        this.clearFieldError(field);
        field.style.borderColor = '#ef4444';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.cssText = `
            color: #ef4444;
            font-size: 0.8rem;
            margin-top: 0.5rem;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        `;
        errorDiv.innerHTML = `<i class='bx bx-error-circle'></i> ${message}`;
        
        field.parentNode.appendChild(errorDiv);
    },

    clearFieldError(field) {
        field.style.borderColor = '';
        const existingError = field.parentNode.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    },

    async handleFormSubmission(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        // Validate all fields
        const inputs = form.querySelectorAll('input, textarea, select');
        let allValid = true;

        inputs.forEach(input => {
            if (!this.validateField(input)) {
                allValid = false;
            }
        });

        if (!allValid) {
            this.showNotification(
                AppState.currentLang === 'ar' ? 'يرجى تصحيح الأخطاء في النموذج' : 'Please correct the errors in the form',
                'error'
            );
            return;
        }

        // Show loading state
        submitBtn.innerHTML = '<i class="bx bx-loader-alt bx-spin"></i>';
        submitBtn.disabled = true;
        form.classList.add('form-loading');

        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Success state
            form.classList.remove('form-loading');
            form.classList.add('form-success');
            submitBtn.innerHTML = '<i class="bx bx-check"></i>';
            
            this.showNotification(
                AppState.currentLang === 'ar' ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.' : 'Your message has been sent successfully! We will contact you soon.',
                'success'
            );

            // Reset form after success
            setTimeout(() => {
                form.reset();
                form.classList.remove('form-success');
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 3000);

        } catch (error) {
            // Error state
            form.classList.remove('form-loading');
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            this.showNotification(
                AppState.currentLang === 'ar' ? 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.' : 'An error occurred while sending. Please try again.',
                'error'
            );
        }
    },

    initInteractiveElements() {
        // Add hover effects to contact methods
        const contactMethods = document.querySelectorAll('.contact-method');
        contactMethods.forEach(method => {
            method.addEventListener('mouseenter', () => {
                method.style.transform = 'translateY(-5px)';
            });

            method.addEventListener('mouseleave', () => {
                method.style.transform = 'translateY(0)';
            });
        });

        // Add click effects to social links
        const socialLinks = document.querySelectorAll('.social-link');
        socialLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                // Add ripple effect
                this.createRippleEffect(e);
            });
        });
    },

    createRippleEffect(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
        circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
        circle.classList.add('ripple');

        const ripple = button.getElementsByClassName('ripple')[0];
        if (ripple) {
            ripple.remove();
        }

        button.appendChild(circle);
    },

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#6366f1'};
            color: white;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
            z-index: 10000;
            display: flex;
            align-items: center;
            gap: 10px;
            transform: translateX(150%);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;

        notification.innerHTML = `
            <i class='bx ${type === 'success' ? 'bx-check-circle' : type === 'error' ? 'bx-error-circle' : 'bx-info-circle'}'></i>
            <span>${message}</span>
            <button class="notification-close" style="background: none; border: none; color: white; cursor: pointer;">
                <i class='bx bx-x'></i>
            </button>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.style.transform = 'translateX(0)', 100);

        // Close functionality
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.removeNotification(notification);
        });

        // Auto remove
        setTimeout(() => this.removeNotification(notification), 5000);
    },

    removeNotification(notification) {
        notification.style.transform = 'translateX(150%)';
        setTimeout(() => notification.remove(), 300);
    }
};

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all modules
    ProjectsGallery.init();
    LanguageManager.init();
    ThemeManager.init();
    UIComponents.init();
    AboutContactManager.init();
    
    // Debug info
    setTimeout(() => {
        console.log('Roya Design Website Initialized Successfully!');
    }, 2000);
});

// Fix social media links
function initializeSocialLinks() {
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    // Remove and re-add to clear any event listeners
    const newLink = link.cloneNode(true);
    link.parentNode.replaceChild(newLink, link);
    
    // Add click handler for valid links
    const href = newLink.getAttribute('href');
    if (href && href !== '#') {
      newLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.open(this.href, '_blank', 'noopener,noreferrer');
      });
    } else {
      // For placeholder links, prevent default
      newLink.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Social media coming soon');
      });
    }
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(initializeSocialLinks, 1000);
});