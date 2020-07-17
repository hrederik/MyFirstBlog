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
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});;


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