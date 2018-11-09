export function table() {
	if (!document.querySelector('.table .table__wrap')) {
		return;
	}

	const elements = document.querySelectorAll('.table__wrap');

	Array.prototype.forEach.call(elements, function(el) {
		if (el.parentElement.classList.contains('table--js-init')) {
			return;
		}

		el.parentElement.classList.add('table--js-init');

		if (el.scrollWidth > el.clientWidth) {
			el.parentElement.classList.add('table--right-shadow');
		}

		el.addEventListener('scroll', function() {
			if (el.scrollWidth - el.scrollLeft <= el.clientWidth) {
				el.parentElement.classList.remove('table--right-shadow');
			}

			if (el.scrollWidth - el.scrollLeft > el.clientWidth) {
				el.parentElement.classList.add('table--right-shadow');
			}

			if (el.scrollLeft <= 0) {
				el.parentElement.classList.remove('table--left-shadow');
			}

			if (el.scrollLeft > 0) {
				el.parentElement.classList.add('table--left-shadow');
			}
		});
	});
}
