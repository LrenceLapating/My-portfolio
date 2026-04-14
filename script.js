// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Animate hamburger
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = navLinks.classList.contains('active') ? 'rotate(45deg) translateY(10px)' : 'none';
        spans[1].style.opacity = navLinks.classList.contains('active') ? '0' : '1';
        spans[2].style.transform = navLinks.classList.contains('active') ? 'rotate(-45deg) translateY(-10px)' : 'none';
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.fontWeight = 'normal';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.fontWeight = 'bold';
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.manga-panel, .crew-card, .chapter-card, .final-manga-panel').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
    observer.observe(card);
});

// Parallax effect
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const avatar = document.querySelector('.avatar-container');
    const titleContainer = document.querySelector('.title-container');
    
    if (hero && scrolled < window.innerHeight) {
        if (avatar) {
            avatar.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 - scrolled * 0.0003})`;
        }
        if (titleContainer) {
            titleContainer.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    }
});

// Manga Impact Effect on Card Click
document.querySelectorAll('.crew-card, .chapter-card').forEach(card => {
    card.addEventListener('click', function(e) {
        // Create manga impact burst
        const impact = document.createElement('div');
        impact.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            width: 200px;
            height: 200px;
            border: 5px solid #000;
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: mangaImpact 0.6s ease-out;
            pointer-events: none;
            z-index: 100;
        `;
        this.appendChild(impact);
        setTimeout(() => impact.remove(), 600);
        
        // Create speed lines
        for (let i = 0; i < 8; i++) {
            const line = document.createElement('div');
            const angle = (360 / 8) * i;
            line.style.cssText = `
                position: absolute;
                top: 50%;
                left: 50%;
                width: 100px;
                height: 3px;
                background: #000;
                transform-origin: left center;
                transform: translate(-50%, -50%) rotate(${angle}deg);
                animation: speedLine 0.4s ease-out;
                pointer-events: none;
                z-index: 99;
            `;
            this.appendChild(line);
            setTimeout(() => line.remove(), 400);
        }
    });
});

// Add manga impact animations
const impactStyle = document.createElement('style');
impactStyle.textContent = `
    @keyframes mangaImpact {
        0% { transform: translate(-50%, -50%) scale(0); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
    }
    
    @keyframes speedLine {
        0% { width: 0; opacity: 1; }
        100% { width: 100px; opacity: 0; }
    }
`;
document.head.appendChild(impactStyle);

// Button Click with Explosion Effect
const buttons = document.querySelectorAll('.ultimate-btn, .manga-btn');
buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        // Create explosion particles
        for (let i = 0; i < 12; i++) {
            const particle = document.createElement('div');
            const angle = (Math.PI * 2 * i) / 12;
            const velocity = 80;
            
            particle.style.cssText = `
                position: absolute;
                width: 15px;
                height: 15px;
                background: #000;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                z-index: 1000;
            `;
            
            this.appendChild(particle);
            
            const x = Math.cos(angle) * velocity;
            const y = Math.sin(angle) * velocity;
            
            particle.animate([
                { transform: 'translate(-50%, -50%) scale(1) rotate(0deg)', opacity: 1 },
                { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(0) rotate(360deg)`, opacity: 0 }
            ], {
                duration: 600,
                easing: 'ease-out'
            });
            
            setTimeout(() => particle.remove(), 600);
        }
        
        // Shake effect
        this.animate([
            { transform: 'translateX(0) rotate(0deg)' },
            { transform: 'translateX(-5px) rotate(-2deg)' },
            { transform: 'translateX(5px) rotate(2deg)' },
            { transform: 'translateX(-5px) rotate(-2deg)' },
            { transform: 'translateX(0) rotate(0deg)' }
        ], {
            duration: 300,
            easing: 'ease-in-out'
        });
    });
});

// Hover manga shine effect
document.querySelectorAll('.crew-card, .chapter-card, .manga-panel').forEach(element => {
    element.addEventListener('mouseenter', function() {
        // Create manga shine
        const shine = document.createElement('div');
        shine.style.cssText = `
            position: absolute;
            top: 0;
            left: -100%;
            width: 50%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(0,0,0,0.1), transparent);
            transform: skewX(-20deg);
            animation: mangaShine 0.8s ease-out;
            pointer-events: none;
            z-index: 10;
        `;
        this.appendChild(shine);
        setTimeout(() => shine.remove(), 800);
    });
});

const shineAnimation = document.createElement('style');
shineAnimation.textContent = `
    @keyframes mangaShine {
        0% { left: -100%; }
        100% { left: 200%; }
    }
`;
document.head.appendChild(shineAnimation);

// Manga cursor trail (black dots)
let lastTrailTime = 0;
document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastTrailTime > 50) {
        lastTrailTime = now;
        
        const trail = document.createElement('div');
        trail.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: #000;
            border-radius: 50%;
            left: ${e.clientX}px;
            top: ${e.clientY}px;
            pointer-events: none;
            z-index: 9999;
            animation: trailFade 0.8s ease-out forwards;
        `;
        document.body.appendChild(trail);
        setTimeout(() => trail.remove(), 800);
    }
});

const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        0% { transform: scale(1); opacity: 0.5; }
        100% { transform: scale(0); opacity: 0; }
    }
`;
document.head.appendChild(trailStyle);

// Random manga sound effects (visual)
function createMangaEffect() {
    const effects = ['ドン！', 'バン！', 'ズン！', 'ゴゴゴ', 'ザザザ'];
    const effect = effects[Math.floor(Math.random() * effects.length)];
    
    const element = document.createElement('div');
    element.textContent = effect;
    element.style.cssText = `
        position: fixed;
        font-family: 'Bebas Neue', cursive;
        font-size: 3rem;
        color: #000;
        font-weight: bold;
        left: ${Math.random() * (window.innerWidth - 100)}px;
        top: ${Math.random() * (window.innerHeight - 100)}px;
        pointer-events: none;
        z-index: 9998;
        opacity: 0;
        animation: effectPop 2s ease-out forwards;
    `;
    
    document.body.appendChild(element);
    setTimeout(() => element.remove(), 2000);
}

const effectStyle = document.createElement('style');
effectStyle.textContent = `
    @keyframes effectPop {
        0% { transform: scale(0) rotate(0deg); opacity: 0; }
        10% { transform: scale(1.2) rotate(5deg); opacity: 0.3; }
        90% { transform: scale(1) rotate(-5deg); opacity: 0.3; }
        100% { transform: scale(0.8) rotate(0deg); opacity: 0; }
    }
`;
document.head.appendChild(effectStyle);

// Trigger random effects
setInterval(() => {
    if (Math.random() > 0.7) {
        createMangaEffect();
    }
}, 3000);

// Stagger animations
const crewCards = document.querySelectorAll('.crew-card');
crewCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
});

const chapterCards = document.querySelectorAll('.chapter-card');
chapterCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.15}s`;
});

console.log('🏴‍☠️ One Piece Portfolio Loaded! Set sail for adventure!');
