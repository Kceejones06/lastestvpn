
const slidesContainer = document.getElementById('slides-container');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function updateSlider() {
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
        dot.classList.toggle('bg-white', index === currentSlide);
        dot.classList.toggle('bg-white/50', index !== currentSlide);
    });
}

// Navigation controls
document.getElementById('next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % 3;
    updateSlider();
});

document.getElementById('prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + 3) % 3;
    updateSlider();
});

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateSlider();
    });
});

// Auto-advance every 7 seconds
setInterval(() => {
    currentSlide = (currentSlide + 1) % 3;
    updateSlider();
}, 7000);
