// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Animación suave del scroll
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

    // Animación de entrada para las tarjetas de proyectos
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        observer.observe(card);
    });

    // Animación del indicador de scroll
    const scrollIndicator = document.querySelector('.scroll-indicator');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            scrollIndicator.style.opacity = '0';
        } else if (scrollTop < 100) {
            scrollIndicator.style.opacity = '1';
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });

    // Efecto parallax en el hero
    const hero = document.querySelector('.hero');
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    });

    // Animación de las etiquetas de habilidades
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px) rotate(2deg)';
        });

        tag.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
        });
    });

    // Añadir clase active a los links de navegación
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Validación del formulario de contacto
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validar campos
            const name = form.querySelector('input[name="name"]');
            const email = form.querySelector('input[name="email"]');
            const message = form.querySelector('textarea[name="message"]');
            
            let isValid = true;
            
            if (!name.value.trim()) {
                showError(name, 'Por favor ingresa tu nombre');
                isValid = false;
            }
            
            if (!email.value.trim()) {
                showError(email, 'Por favor ingresa tu email');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError(email, 'Por favor ingresa un email válido');
                isValid = false;
            }
            
            if (!message.value.trim()) {
                showError(message, 'Por favor ingresa tu mensaje');
                isValid = false;
            }
            
            if (isValid) {
                // Aquí iría la lógica para enviar el formulario
                showSuccess();
            }
        });
    }
});

// Utilidades
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function showError(input, message) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message') || document.createElement('div');
    error.className = 'error-message';
    error.textContent = message;
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(error);
    }
    input.classList.add('error');
}

function showSuccess() {
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.textContent = '¡Mensaje enviado con éxito!';
    form.appendChild(successMessage);
    form.reset();
    
    setTimeout(() => {
        successMessage.remove();
    }, 3000);
}

// Añadir estilos CSS necesarios para las animaciones
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .error-message {
        color: #dc3545;
        font-size: 0.875rem;
        margin-top: 0.25rem;
    }

    .success-message {
        color: #28a745;
        text-align: center;
        padding: 1rem;
        margin-top: 1rem;
        background: #d4edda;
        border-radius: 4px;
    }

    .error {
        border-color: #dc3545 !important;
    }
`;
document.head.appendChild(style);
