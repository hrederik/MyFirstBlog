function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});;

let menuButton = document.querySelector('.main-nav__button');
let menuList = document.querySelector('.main-nav__list');
let sliderItems = document.querySelectorAll('.articles-slider__item');
let currentSlide = 0;
let toTopButton = document.querySelector('.toTop');

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
      currentSlide = 0;
   }
   else {
      currentSlide++;
   }
   slider();
}

window.addEventListener('scroll', () => {
   if (pageYOffset > 400) {
      toTopButton.classList.add('toTop-visible');
   } else {
      toTopButton.classList.remove('toTop-visible')
   }
})

toTopButton.addEventListener('click', () => {
   document.body.scrollIntoView(top);
})