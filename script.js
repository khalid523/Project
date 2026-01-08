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
            `images/elura/${String(i + 1).padStart(3, '0')}.WebP`
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
            'images/abdallah/abdallah4.WebP' , 'images/abdallah/abdallah1.WebP', 'images/abdallah/abdallah2.WebP',
            'images/abdallah/abdallah3.WebP', 'images/abdallah/abdallah.WebP' , 'images/abdallah/abdallah5.WebP',
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

    // Create element with attributes
    createElement(tag, attributes = {}, children = []) {
        const element = document.createElement(tag);
        Object.assign(element, attributes);
        children.forEach(child => {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        });
        return element;
    },

    // Smooth scroll to element
    smoothScrollTo(element, target, duration = 500) {
        const start = element.scrollLeft;
        const change = target - start;
        const startTime = performance.now();
        
        function animateScroll(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
            
            element.scrollLeft = start + change * ease(progress);
            
            if (elapsed < duration) {
                requestAnimationFrame(animateScroll);
            }
        }
        
        requestAnimationFrame(animateScroll);
    }
};

// ============================================
// IMAGE LOADER
// ============================================
const ImageLoader = {
    // تحميل الصور الأساسية
    preloadCriticalImages() {
        const criticalImages = [
            'images/logoBlack.jpg',
            'images/logo.jpg'
        ];
        
        criticalImages.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    },

    // تحميل الصور مع lazy loading
    lazyLoadImages() {
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    this.loadWithBlur(img.dataset.src, img);
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => imageObserver.observe(img));
    },

    // تحميل الصور مع تأثير blur
    async loadWithBlur(src, element) {
        if (!element) return;
        
        // إضافة تأثير blur أثناء التحميل
        element.style.filter = 'blur(10px)';
        element.style.opacity = '0.7';
        element.style.transition = 'filter 0.6s ease, opacity 0.6s ease';
        
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
                element.src = src;
                setTimeout(() => {
                    element.style.filter = 'blur(0px)';
                    element.style.opacity = '1';
                    resolve();
                }, 100);
            };
            img.onerror = () => {
                element.style.filter = 'blur(0px)';
                element.style.opacity = '1';
                resolve();
            };
            img.src = src;
        });
    }
};

// ============================================
// LOADING MANAGER
// ============================================
const LoadingManager = {
    init() {
        this.preloadAssets();
        this.setupLoadingScreen();
    },

    preloadAssets() {
        // تحميل الخطوط المهمة أولاً
        const font = new FontFace('Cairo', 'url(https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700&display=swap)');
        
        font.load().then(() => {
            document.fonts.add(font);
        });

        // تحميل الصور الأساسية
        ImageLoader.preloadCriticalImages();
    },

    setupLoadingScreen() {
        const loadingScreen = document.querySelector('.loading-screen');
        
        if (!loadingScreen) return;

        // إخفاء شاشة التحميل بعد تحميل الصفحة
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.classList.add('loaded');
                
                // بدء تحميل الصور بعد إخفاء الشاشة
                setTimeout(() => {
                    ImageLoader.lazyLoadImages();
                    ProjectsGallery.preloadFirstImages();
                }, 500);
                
            }, 1500);
        });

        // إخفاء شاشة التحميل بعد وقت أقصى (fallback)
        setTimeout(() => {
            if (!loadingScreen.classList.contains('loaded')) {
                loadingScreen.classList.add('loaded');
            }
        }, 4000);
    }
};

// ============================================
// PROJECTS GALLERY MODULE
// ============================================
const ProjectsGallery = {
    init() {
        this.renderProjects();
        this.initializeModal();
        this.preloadFirstImages();
    },

    preloadFirstImages() {
        // تحميل أول 3 صور لكل مشروع
        Object.values(projectsData).forEach(project => {
            const firstImages = project.images.slice(0, 3);
            firstImages.forEach(src => {
                const img = new Image();
                img.src = src;
            });
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
                loading: 'lazy',
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

    async renderGallery() {
        const project = projectsData[AppState.currentProject];
        const { mainImage, imageCounter } = DOM.elements;

        if (!mainImage || !imageCounter) {
            console.error('Required DOM elements not found');
            return;
        }

        // إظهار الـ loader
        const imageLoader = document.querySelector('.image-loader');
        if (imageLoader) {
            imageLoader.style.display = 'flex';
        }

        imageCounter.textContent = `${AppState.currentImageIndex + 1} / ${project.images.length}`;

        await ImageLoader.loadWithBlur(project.images[AppState.currentImageIndex], mainImage);
        
        // إخفاء الـ loader
        if (imageLoader) {
            imageLoader.style.display = 'none';
        }
    },

    initializeModal() {
        const { galleryModal, modalClose, prevBtn, nextBtn, body } = DOM.elements;
        if (!galleryModal) return;

        modalClose?.addEventListener('click', () => galleryModal.classList.remove('active'));
        galleryModal.addEventListener('click', (e) => {
            if (e.target === galleryModal) galleryModal.classList.remove('active');
        });

        prevBtn?.addEventListener('click', () => {
            const isEnglish = body.classList.contains('english');
            this.navigate(isEnglish ? -1 : 1);
        });
        
        nextBtn?.addEventListener('click', () => {
            const isEnglish = body.classList.contains('english');
            this.navigate(isEnglish ? 1 : -1);
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!galleryModal.classList.contains('active')) return;
            
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
        
        const adjustedDirection = isEnglish ? direction : -direction;
        
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
                prevIcon.className = 'bx bx-chevron-left';
                nextIcon.className = 'bx bx-chevron-right';
            } else {
                prevIcon.className = 'bx bx-chevron-right';
                nextIcon.className = 'bx bx-chevron-left';
            }
        }
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
// PARTICLE SYSTEM
// ============================================
const ParticleSystem = {
    init() {
        this.createParticles();
        this.startAnimation();
    },

    createParticles() {
        const { heroParticles } = DOM.elements;
        if (!heroParticles) return;

        heroParticles.innerHTML = '';
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            this.createParticle(heroParticles, i);
        }
    },

    createParticle(container, index) {
        const particle = Utils.createElement('div', {
            className: 'particle',
            style: `
                position: absolute;
                width: ${Math.random() * 6 + 2}px;
                height: ${Math.random() * 6 + 2}px;
                background: linear-gradient(45deg, var(--primary-color), var(--accent-color));
                border-radius: 50%;
                opacity: ${Math.random() * 0.6 + 0.1};
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${Math.random() * 20 + 10}s linear infinite;
                animation-delay: ${index * 0.1}s;
                filter: blur(${Math.random() * 2}px);
            `
        });

        // Add glow effect
        const glow = Utils.createElement('div', {
            className: 'particle-glow',
            style: `
                position: absolute;
                width: 100%;
                height: 100%;
                background: inherit;
                border-radius: 50%;
                filter: blur(5px);
                opacity: 0.3;
            `
        });

        particle.appendChild(glow);
        container.appendChild(particle);
    },

    startAnimation() {
        this.animateParticles();
    },

    animateParticles() {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            const x = Math.sin(Date.now() * 0.001 + Math.random() * 10) * 20;
            const y = Math.cos(Date.now() * 0.001 + Math.random() * 10) * 20;
            particle.style.transform = `translate(${x}px, ${y}px)`;
        });
        requestAnimationFrame(() => this.animateParticles());
    }
};

// ============================================
// SCROLL ANIMATION SYSTEM
// ============================================
const ScrollAnimations = {
    init() {
        this.observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateElement(entry.target);
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        this.setupObservers();
    },

    setupObservers() {
        // Observe service cards
        document.querySelectorAll('.service-card').forEach(card => {
            this.observer.observe(card);
        });

        // Observe project cards
        document.querySelectorAll('.project-card').forEach(card => {
            this.observer.observe(card);
        });

        // Observe value items
        document.querySelectorAll('.value-item').forEach(item => {
            this.observer.observe(item);
        });

        // Observe contact methods
        document.querySelectorAll('.contact-method').forEach(method => {
            this.observer.observe(method);
        });
    },

    animateElement(element) {
        if (element.classList.contains('service-card')) {
            element.classList.add('visible');
        }
        
        if (element.classList.contains('value-item')) {
            element.style.animation = 'fadeInUp 0.6s ease forwards';
        }
    }
};

// ============================================
// UI COMPONENTS MODULE
// ============================================
const UIComponents = {
    init() {
        this.initNavigation();
        this.initBackToTop();
        this.initSmoothScroll();
        this.initCounters();
        this.initPortfolioFilter();
        this.initContactForm();
        this.initParticles();
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
        });

        notification.innerHTML = `
            <span>${message}</span>
            <button class="notification-close" style="background: none; border: none; color: white; cursor: pointer;">
                <i class="bx bx-x"></i>
            </button>
        `;

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
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    },

    initParticles() {
        // Initialize particle system
        setTimeout(() => {
            ParticleSystem.init();
        }, 2000);
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
// INITIALIZE FLOATING ANIMATIONS
// ============================================
function initFloatingAnimations() {
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });
}

// ============================================
// SOCIAL LINKS FIX
// ============================================
function initializeSocialLinks() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href !== '#') {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                window.open(this.href, '_blank', 'noopener,noreferrer');
            });
        } else {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                console.log('Social media coming soon');
            });
        }
    });
}

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all modules
    LoadingManager.init();
    
    // Start particle system
    setTimeout(() => {
        ParticleSystem.init();
    }, 1000);
    
    ProjectsGallery.init();
    LanguageManager.init();
    ThemeManager.init();
    UIComponents.init();
    ScrollAnimations.init();
    
    // Initialize floating animations
    initFloatingAnimations();
    
    // Initialize social links
    setTimeout(initializeSocialLinks, 1000);
    
    // Debug info
    console.log('Roya Design Website Initialized Successfully!');
    console.log('Animations and effects are active!');
});

