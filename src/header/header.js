// Header
//------------------------------------------------------------------------------

document.querySelector('.js-header-toggle').addEventListener('click', function() {
	document.querySelector('.header__toggle').classList.toggle('header__toggle--active');

	document.querySelector('.header__collapse').classList.toggle('header__collapse--show');
});
