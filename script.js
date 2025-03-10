let index = 0;
const slides = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slides');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
});

function showNextSlide() {
    const currentSlide = slides[index];
    const video = currentSlide.querySelector('video');

    if (video) {
        video.muted = true;
        video.play().then(() => {
            video.onended = () => {
                moveToNext();
            };
        }).catch(() => {
            moveToNext();
        });
    } else {
        setTimeout(moveToNext, 6000);
    }
}

function moveToNext() {
    index = (index + 1) % slides.length;
    slideContainer.style.transform = `translateX(-${index * 100}%)`;
    showNextSlide();
}

showNextSlide();

