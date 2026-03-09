document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll('.slide');
    const texts = document.querySelectorAll('.hero-text');

    if (slides.length === 0 || texts.length === 0) return;

    let index = 0;

    setInterval(() => {
        slides[index].classList.remove('active');
        texts[index].classList.remove('active');

        index = (index + 1) % slides.length;

        slides[index].classList.add('active');
        texts[index].classList.add('active');

    }, 5000);

});

document.addEventListener("DOMContentLoaded", () => {

    const slides = document.querySelectorAll('.slide');

    if (slides.length === 0) return;

    let index = 0;

    setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 5000);

});

//fundador

document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll('.reveal, .timeline-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.4
    });

    elements.forEach(el => observer.observe(el));

});
//texto slide

