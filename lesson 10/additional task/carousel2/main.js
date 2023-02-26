let [sliderList] = document.getElementsByClassName('slider-list');

const buttonNext = document.querySelector('.next-image');

let offset = 0;

buttonNext.onclick = function () {

    offset += 1000;
    if (offset > 5000) {
        offset = 0;
    }
    sliderList.style.left = -offset + 'px';

};

const buttonPrev = document.querySelector('.prev-image');

buttonPrev.onclick = function () {

    offset -= 1000;
    if (offset < 0) {
        offset = 5000;
    }
    sliderList.style.left = -offset + 'px';

};