import "./styles.less";
import "~swiper/dist/js/swiper.js";

export function carousel() {
	if (document.querySelector('.carousel') === null) {
		return;
	}

	const element = document.querySelectorAll('.carousel');

	Array.prototype.forEach.call(element, function(el) {
		if (el.classList.contains('carousel--js-init')) {
			return;
		}

		el.classList.add('carousel--js-init');

		const pagination = el.querySelector('.carousel__pagination');

		const carousel = new Swiper(el, {
			watchOverflow: true,
			pagination: {
				el: pagination,
				type: 'bullets',
				dynamicBullets: true,
				dynamicMainBullets: 3,
				clickable: true,
				modifierClass: 'carousel__pagination--',
				bulletClass: 'carousel__bullet',
				bulletActiveClass: 'carousel__bullet--active'
			},
		});

		carousel.on('slideChange', function() {
			let element = this;

			if (element.el.classList.contains('carousel--scene')) {
				if (element.slides[element.activeIndex].classList.contains('carousel__item--darken')) {
					element.el.classList.add('carousel--darken');
				} else {
					element.el.classList.remove('carousel--darken');
				}

				if (element.slides[element.activeIndex].classList.contains('carousel__item--lighten')) {
					element.el.classList.add('carousel--lighten');
				} else {
					element.el.classList.remove('carousel--lighten');
				}
			}
		});
	});
}
