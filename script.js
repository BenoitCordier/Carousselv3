
var images = ['img/caroussel1.png', 'img/caroussel2.jpg', 'img/caroussel3.jpg', 'img/caroussel4.jpg', 'img/caroussel5.jpg'];

// This is where 'bridge' between "carousel.js" and the DOM is created
var imgElem = window.document.getElementById('carousel').querySelector('img');

var carousel = new Diaporama(imgElem, images);

carousel.start();

window.document.addEventListener('click', ev => {
    const target = ev.target;
    if (target.id === 'back_button') {
        carousel.slideLeft();
    } else if (target.id === 'next_button') {
        carousel.slideRight();
    }
});
