let offset = 0;
const sliderLine = document.querySelector('.slider-line')

let buttonNext = document.querySelector('.slider-next');
buttonNext.onclick = function () {

    offset += 256;
    if (offset > 768) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
};

let buttonPrev = document.querySelector('.slider-prev');

buttonPrev.onclick = function () {

    offset += -256;
    if (offset < 0) {
        offset = 768;
    }
    sliderLine.style.left = -offset + 'px';

};