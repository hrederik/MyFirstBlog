@@include('webp.js');


let menuButton = document.querySelector('.main-nav__button');
let menuList = document.querySelector('.main-nav__list')

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
})