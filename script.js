// Função para atualizar o carrossel
function initializeCarousel(carouselContainer) {
    const imagesContainer = carouselContainer.querySelector('.carousel-images');
    const images = imagesContainer.querySelectorAll('img');
    const prevButton = carouselContainer.querySelector('.prev');
    const nextButton = carouselContainer.querySelector('.next');
    
    let currentIndex = 0;

    function updateCarousel() {
        const width = images[0].clientWidth;
        imagesContainer.style.transform = `translateX(-${currentIndex * width}px)`;
    }

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateCarousel();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Atualizar carrossel ao inicializar
    updateCarousel();
}

// Inicializar todos os carrosséis na página
document.querySelectorAll('.carousel').forEach(carousel => initializeCarousel(carousel));


// Relógio Digital
function updateCounter() {
    const now = new Date();
    const start = new Date(2024, 10, 1); // 01/11/2024 (meses começam em 0)
    const diffMs = now - start;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30); // Aproximação para meses

    const displayDays = days % 30;
    const displayHours = hours % 24;
    const displayMinutes = minutes % 60;
    const displaySeconds = seconds % 60;

    document.getElementById('months').textContent = String(months).padStart(2, '0');
    document.getElementById('days').textContent = String(displayDays).padStart(2, '0');
    document.getElementById('hours').textContent = String(displayHours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(displayMinutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(displaySeconds).padStart(2, '0');
}

updateCounter();
setInterval(updateCounter, 1000); // Atualiza a cada segundo
