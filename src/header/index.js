export function header() {
	if (!document.querySelector('.header')) {
		return;
	}

	const header = document.querySelector('.header');

	window.onscroll = function() {
		if (!header.classList.contains('header--fixed')) {
			return;
		}

		if (this.pageYOffset > 0) {
			header.classList.add('header--scrollable');
		} else {
			header.classList.remove('header--scrollable');
		}
	};

	if (!header.querySelector('.js-header-toggle')) {
		return;
	}

	const headerCollapse = header.querySelector('.header__collapse');
	const main = document.querySelector('.main');
	const footer = document.querySelector('.footer');

	header.querySelector('.js-header-toggle').addEventListener('click', function() {
		header.querySelector('.header__toggle').classList.toggle('header__toggle--active');

		if (!headerCollapse.classList.contains('header__collapse--show')) {
			if (header.classList.contains('header--fixed')) {
				let scrTop = window.pageYOffset;

				if (footer) {
					footer.style.top = footer.offsetTop - scrTop + 'px';
					footer.style.position = 'fixed';
					footer.style.overflow = 'hidden';
				}

				main.style.top = -scrTop + 'px';
				main.style.position = 'fixed';
				main.style.overflow = 'hidden';

				window.scrollTo(0, 0);
			}

			headerCollapse.classList.add('header__collapse--show');
			headerCollapse.classList.remove('header__collapse--hide');
		} else if (!headerCollapse.classList.contains('header__collapse--hide')) {
			headerCollapse.classList.add('header__collapse--hide');
			headerCollapse.classList.remove('header__collapse--show');

			setTimeout(function() {
				headerCollapse.classList.remove('header__collapse--hide');

				let scrTop = parseFloat(main.style.top) * -1;

				if (footer) {
					footer.style.top = '';
					footer.style.position = '';
					footer.style.overflow = '';
				}

				main.style.top = '';
				main.style.position = '';
				main.style.overflow = '';

				window.scrollTo(0, scrTop);
			}, 200);
		}
	});
}
