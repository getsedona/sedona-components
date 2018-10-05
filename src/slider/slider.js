// Slider
//------------------------------------------------------------------------------

window.sedona.slider = function() {
	if (document.querySelector('.slider') !== null) {
		let element = document.querySelectorAll('.slider');

		Array.prototype.forEach.call(element, function(el) {
			if (!el.classList.contains('slider--js-init')) {
				el.classList.add('slider--js-init');

				let pagination = el.querySelector('.slider__pagination');

				let slider = new Swiper(el, {
					watchOverflow: true,
					pagination: {
						el: pagination,
						type: 'bullets',
						dynamicBullets: true,
						dynamicMainBullets: 3,
						clickable: true,
						modifierClass: 'slider__pagination--',
						bulletClass: 'slider__bullet',
						bulletActiveClass: 'slider__bullet--active'
					},
				});

				slider.on('slideChange', function() {
					let element = this;

					if (element.el.classList.contains('slider--scene')) {
						if (element.slides[element.activeIndex].classList.contains('slider__item--darken')) {
							element.el.classList.add('slider--darken');
						} else {
							element.el.classList.remove('slider--darken');
						}

						if (element.slides[element.activeIndex].classList.contains('slider__item--lighten')) {
							element.el.classList.add('slider--lighten');
						} else {
							element.el.classList.remove('slider--lighten');
						}
					}
				});
			}
		});
	}
}

sedona.slider();
