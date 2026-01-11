// ========================================
// Interactive Dot Grid Background
// ========================================
class DotGrid {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.dots = [];
        this.mouse = { x: -1000, y: -1000 };
        this.gridSize = 50;
        this.dotSize = 1.5;
        this.maxDistance = 150;
        this.dotColor = '#00804C';

        this.init();
        this.animate();
        this.bindEvents();
    }

    init() {
        this.resize();
        this.createDots();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.createDots();
    }

    createDots() {
        this.dots = [];
        const cols = Math.ceil(this.canvas.width / this.gridSize) + 1;
        const rows = Math.ceil(this.canvas.height / this.gridSize) + 1;

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                this.dots.push({
                    x: i * this.gridSize,
                    y: j * this.gridSize,
                    baseOpacity: 0.15 + Math.random() * 0.1
                });
            }
        }
    }

    bindEvents() {
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        window.addEventListener('mouseout', () => {
            this.mouse.x = -1000;
            this.mouse.y = -1000;
        });
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.dots.forEach(dot => {
            const dx = this.mouse.x - dot.x;
            const dy = this.mouse.y - dot.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            let opacity = dot.baseOpacity;
            let radius = this.dotSize;

            if (distance < this.maxDistance) {
                const influence = 1 - (distance / this.maxDistance);
                opacity = dot.baseOpacity + (influence * 0.6);
                radius = this.dotSize + (influence * 3);
            }

            this.ctx.beginPath();
            this.ctx.arc(dot.x, dot.y, radius, 0, Math.PI * 2);
            this.ctx.fillStyle = this.dotColor;
            this.ctx.globalAlpha = opacity;
            this.ctx.fill();
        });

        this.ctx.globalAlpha = 1;
    }

    animate() {
        this.draw();
        requestAnimationFrame(() => this.animate());
    }
}

// ========================================
// Stat Counter Animation
// ========================================
function animateStats() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                animateValue(el, 0, target, 2000);
                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => observer.observe(stat));
}

function animateValue(el, start, end, duration) {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;

    const formatNumber = (num) => {
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1) + 'M';
        } else if (num >= 1000) {
            return Math.floor(num / 1000) + 'K+';
        }
        return Math.floor(num).toString();
    };

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            el.textContent = formatNumber(end);
            clearInterval(timer);
        } else {
            el.textContent = formatNumber(current);
        }
    }, 16);
}

// ========================================
// Scroll-triggered Fade-in Animations
// ========================================
function initScrollAnimations() {
    const elements = document.querySelectorAll('.animate-fade-in');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    elements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // Immediately trigger hero animations
    document.querySelectorAll('.hero .animate-fade-in').forEach(el => {
        el.style.animationPlayState = 'running';
    });
}

// ========================================
// Smooth Scroll for Anchor Links
// ========================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ========================================
// Initialize
// ========================================
document.addEventListener('DOMContentLoaded', () => {
    // Initialize dot grid
    const canvas = document.getElementById('dot-grid');
    if (canvas) {
        new DotGrid(canvas);
    }

    // Initialize animations
    initScrollAnimations();
    animateStats();
    initSmoothScroll();

    // Add loaded class
    document.body.classList.add('loaded');
});
