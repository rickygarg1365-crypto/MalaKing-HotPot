// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== PAGE LOADING ANIMATION =====
    const pageLoader = document.createElement('div');
    pageLoader.className = 'page-loader';
    pageLoader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo"></div>
            <div class="loader-text">Malaking Hotpot</div>
        </div>
    `;
    document.body.appendChild(pageLoader);
    
    // Hide loader after page loads
    window.addEventListener('load', function() {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.remove();
            }, 500);
        }, 1000);
    });

    // ===== SMOOTH SCROLLING =====
    // Smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ===== HEADER SCROLL EFFECTS =====
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Header show/hide on scroll
        if (scrollTop > 100) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // ===== PARALLAX EFFECT FOR HERO =====
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    const heroDish = document.querySelector('.hero-dish-overlay');

    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.1; // Reduced parallax effect
        const dishRate = scrolled * -0.05; // Reduced parallax effect
        
        if (hero && heroContent && heroDish) {
            // Only apply parallax if not scrolled too far
            if (scrolled < 500) {
                heroContent.style.transform = `translateY(${rate}px)`;
                heroDish.style.transform = `translateY(${dishRate}px)`;
            }
        }
    });

    // ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Add animation classes to sections - DISABLED to prevent content disappearing
    // const sections = document.querySelectorAll('section');
    // sections.forEach((section, index) => {
    //     if (index % 2 === 0) {
    //         section.classList.add('fade-in');
    //     } else {
    //         section.classList.add('slide-left');
    //     }
    // });

    // ===== DISH CARD HOVER EFFECTS =====
    const dishCards = document.querySelectorAll('.dish-card');
    dishCards.forEach(card => {
        const image = card.querySelector('.dish-image');
        
        card.addEventListener('mouseenter', function() {
            if (image) {
                image.style.transform = 'scale(1.1)';
                image.style.transition = 'transform 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });

    // ===== SOCIAL MEDIA PHOTO HOVER EFFECTS =====
    const socialPhotos = document.querySelectorAll('.social-photo');
    socialPhotos.forEach(photo => {
        const image = photo.querySelector('img');
        
        photo.addEventListener('mouseenter', function() {
            if (image) {
                image.style.transform = 'scale(1.05)';
                image.style.transition = 'transform 0.3s ease';
            }
        });
        
        photo.addEventListener('mouseleave', function() {
            if (image) {
                image.style.transform = 'scale(1)';
            }
        });
    });

    // ===== BACK TO TOP FUNCTIONALITY =====
    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===== MOBILE MENU TOGGLE =====
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '☰';
    mobileMenuToggle.style.cssText = `
        display: none;
        background: none;
        border: none;
        font-size: 24px;
        color: var(--primary-red);
        cursor: pointer;
        padding: 10px;
    `;

    const headerContainer = document.querySelector('.header-container');
    const navMenu = document.querySelector('.nav-menu');
    
    if (headerContainer && navMenu) {
        headerContainer.insertBefore(mobileMenuToggle, navMenu);
        
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('mobile-open');
        });
    }

    // ===== RESPONSIVE BEHAVIOR =====
    function handleResize() {
        const isMobile = window.innerWidth <= 768;
        
        if (mobileMenuToggle) {
            mobileMenuToggle.style.display = isMobile ? 'block' : 'none';
        }
        
        if (navMenu) {
            if (!isMobile) {
                navMenu.classList.remove('mobile-open');
            }
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); // Call on load

    // ===== ENHANCED BUTTON INTERACTIONS =====
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
            this.style.boxShadow = '0 8px 25px rgba(179, 46, 29, 0.3)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
    });

    // ===== ENHANCED SCROLL EFFECTS =====
    // Disabled to prevent content disappearing issues
    // let ticking = false;

    // function updateScrollEffects() {
    //     const scrolled = window.pageYOffset;
        
    //     // Parallax for different elements
    //     const elements = [
    //         { selector: '.hero-background', rate: 0.5 },
    //         { selector: '.hero-dish-overlay', rate: 0.3 },
    //         { selector: '.hero-content', rate: 0.2 }
    //     ];

    //     elements.forEach(({ selector, rate }) => {
    //         const element = document.querySelector(selector);
    //         if (element) {
    //             element.style.transform = `translateY(${scrolled * rate}px)`;
    //         }
    //     });

    //     ticking = false;
    // }

    // function requestScrollUpdate() {
    //     if (!ticking) {
    //         requestAnimationFrame(updateScrollEffects);
    //         ticking = true;
    //     }
    // }

    // window.addEventListener('scroll', requestScrollUpdate);

    // ===== PROGRESSIVE IMAGE LOADING =====
    const images = document.querySelectorAll('img[src]');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    });

    // ===== SECTION COUNTER ANIMATION =====
    const steps = document.querySelectorAll('.step');
    const stepObserver = new IntersectionObserver(function(entries) {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(30px)';
                    entry.target.style.transition = 'all 0.6s ease';
                    
                    setTimeout(() => {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);
                }, index * 200);
            }
        });
    }, { threshold: 0.3 });

    steps.forEach(step => {
        stepObserver.observe(step);
    });

    // ===== FOOTER SOCIAL ICON ANIMATIONS =====
    const socialIcons = document.querySelectorAll('.footer-social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) rotate(10deg)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        icon.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // ===== CUSTOM CURSOR EFFECTS =====
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: rgba(179, 46, 29, 0.8);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: all 0.1s ease;
        display: none;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursor.style.display = 'block';
    });

    document.addEventListener('mouseleave', function() {
        cursor.style.display = 'none';
    });

    // Enlarge cursor on hover over interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .dish-card, .social-photo');
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', function() {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.background = 'rgba(179, 46, 29, 0.6)';
        });
        
        el.addEventListener('mouseleave', function() {
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.background = 'rgba(179, 46, 29, 0.8)';
        });
    });

    console.log('🍲 Malaking Hotpot website loaded successfully!');
});