// Manejo del Scroll
/* let scrollTriggered = false;

function handleScroll() {
    const element = document.getElementById('proyectos');
    const rect = element.getBoundingClientRect();

    // Activar el scroll solo una vez cuando el elemento sea visible
    if (!scrollTriggered && rect.top <= window.innerHeight && rect.bottom >= 0) {
        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth'
        });
        scrollTriggered = true; // Evitar que el scroll se repita
        window.removeEventListener('scroll', handleScroll); // Remover el listener
    }
}

window.addEventListener('scroll', handleScroll); */

// Animación de Escritura
const text = "Backend Developer - Ciberseguridad";
const animatedText = document.getElementById("animated-text");

function typeWriter(text, element, speed = 100, delay = 1000) {
    let index = 0;

    function write() {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            index++;
            setTimeout(write, speed); // Velocidad de escritura
        } else {
            setTimeout(() => {
                element.textContent = ""; // Limpia el texto
                index = 0; // Reinicia el índice
                write(); // Reinicia la animación
            }, delay); // Pausa antes de reiniciar
        }
    }

    write();
}

window.onload = () => {
    if (animatedText) {
        typeWriter(text, animatedText);
    }
};
