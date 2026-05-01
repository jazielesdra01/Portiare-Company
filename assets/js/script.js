const leadForm = document.getElementById('leadForm');
const hero = document.querySelector('.hero');
const heroMockup = document.querySelector('.hero-mockup');
const statNumbers = document.querySelectorAll('.stat-number');
const revealTargets = document.querySelectorAll('.feature-card, .benefit, .testimonial-card, .hero-text, .cta-form');

function showSuccess(msg) {
    const toast = document.createElement('div');
    toast.textContent = msg;
    toast.style.cssText = `
        position: fixed;
        top: 120px;
        right: 24px;
        background: #10b981;
        color: white;
        padding: 20px 32px;
        border-radius: 12px;
        box-shadow: 0 20px 40px rgba(16,185,129,0.3);
        z-index: 10000;
        font-weight: 600;
        transform: translateX(400px);
        transition: all 0.4s;
    `;
    document.body.appendChild(toast);
    setTimeout(() => toast.style.transform = 'translateX(0)', 100);
    setTimeout(() => toast.remove(), 4000);
}

function animateCounter(element, target, duration = 1800) {
    const start = 0;
    const range = target - start;
    let startTime = null;

    function step(timestamp) {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        element.textContent = Math.round(start + range * progress);
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

function initCounters() {
    const statsSection = document.querySelector('.hero-stats');
    if (!statsSection || statNumbers.length === 0) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            statNumbers.forEach(el => {
                const target = parseInt(el.textContent.replace(/\D/g, ''), 10) || 0;
                animateCounter(el, target);
            });
            observer.unobserve(statsSection);
        });
    }, { threshold: 0.4 });

    observer.observe(statsSection);
}

function initRevealAnimations() {
    if (revealTargets.length === 0) return;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.18 });

    revealTargets.forEach(item => {
        item.classList.add('reveal-item');
        observer.observe(item);
    });
}

function initParallax() {
    if (!hero || !heroMockup) return;

    hero.addEventListener('mousemove', e => {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        heroMockup.style.transform = `translate(${x * 18}px, ${y * 18}px)`;
        hero.style.backgroundPosition = `${50 + x * 5}% ${50 + y * 5}%`;
    });

    hero.addEventListener('mouseleave', () => {
        heroMockup.style.transform = '';
        hero.style.backgroundPosition = '50% 50%';
    });
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

function updateHeaderStyle() {
    const header = document.querySelector('.header');
    if (!header) return;
    window.addEventListener('scroll', () => {
        header.style.background = window.scrollY > 50 ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)';
    });
}

function initForm() {
    if (!leadForm) return;
    leadForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const telefone = document.getElementById('telefone').value;
        const servico = document.getElementById('servico').value || 'Consulta';

        const mensagem = `👑 *PORTIARE COMPANY - NOVA RESERVA* 👑%0A%0A` +
                        `👤 *Nome:* ${nome}%0A` +
                        `📱 *WhatsApp:* ${telefone}%0A` +
                        `💎 *Serviço:* ${servico}%0A%0A` +
                        `✨ *20% OFF primeira visita* ✨%0A` +
                        `⚡ Agendar agora!`;

        window.open(`https://wa.me/5511987654321?text=${encodeURIComponent(mensagem)}`, '_blank');
        this.reset();
        showSuccess('✅ WhatsApp aberto! Resposta em 2 minutos.');
    });
}

function initInteractiveEffects() {
    initCounters();
    initRevealAnimations();
    initParallax();
    initSmoothScroll();
    updateHeaderStyle();
    initForm();
}

document.addEventListener('DOMContentLoaded', initInteractiveEffects);
