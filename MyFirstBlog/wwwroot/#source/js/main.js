@@include('webp.js');


let menuButton = document.querySelector('.main-nav__button');
let menuList = document.querySelector('.main-nav__list');
let sliderItems = document.querySelectorAll('.articles-slider__item');
let currentSlide = 0;

menuButton.addEventListener('click', function (evt) {
   if (menuButton.classList.contains('main-nav__button--closed')) {
      menuButton.classList.remove('main-nav__button--closed');
      menuButton.classList.add('main-nav__button--opened');
      menuList.classList.remove('main-nav__list--closed');
      menuList.classList.add('main-nav__list--opened');
   } else {
      menuButton.classList.remove('main-nav__button--opened');
      menuButton.classList.add('main-nav__button--closed');
      menuList.classList.remove('main-nav__list--opened');
      menuList.classList.add('main-nav__list--closed');
   }
});

function slider() {
   for (let i = 0; i < sliderItems.length; i++) {
      sliderItems[i].classList.remove('articles-slider__item--active');
   }
   sliderItems[currentSlide].classList.add('articles-slider__item--active');
}



document.querySelector('.articles-slider__btn--prev').onclick = function () {
   if (currentSlide - 1 < 0) {
      currentSlide = sliderItems.length - 1;
   }
   else {
      currentSlide--;
   }
   slider();
}

document.querySelector('.articles-slider__btn--next').onclick = function () {
   if (currentSlide + 1 == sliderItems.length) {
      currentSlide = 0
   }
   else {
      currentSlide++;
   }
   slider();
}