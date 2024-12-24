// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Animación suave del scroll para enlaces de navegación
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    smoothScrollLinks.forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Función para animar las tarjetas de proyecto al entrar en el viewport
    const projectCards = document.querySelectorAll('.project-card');
    const observerOptions = {
        threshold: 0.2, // El 20% del elemento visible activa la animación
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Dejar de observar el elemento
            }
        });
    }, observerOptions);

    // Observar todas las tarjetas de proyectos
    projectCards.forEach(card => observer.observe(card));
});
