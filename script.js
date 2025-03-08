let index = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    index = (index + 1) % slides.length;
    document.querySelector('.slides').style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextSlide, 3000);
