// WhatsApp Portiare - Alta Conversão
const leadForm = document.getElementById('leadForm');
if (leadForm) {
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
        
        // SEU NÚMERO AQUI 👇
        window.open(`https://wa.me/5511987654321?text=${encodeURIComponent(mensagem)}`, '_blank');
        
        // Limpar form
        this.reset();
        
        // Notificação sucesso
        showSuccess('✅ WhatsApp aberto! Resposta em 2 minutos.');
    });
}

// Notificação estilo Bling
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

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(anchor.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Header scroll
window.addEventListener('scroll', () => {
    document.querySelector('.header').style.background = 
        window.scrollY > 50 ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)';
});

// Animações scroll
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('.feature-card, .benefit, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'all 0.6s ease';
    observer.observe(el);
});