export function global() {
	const MOBILE = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	if (MOBILE) {
		document.querySelector('body').classList.add('mobile');
	}

	document.querySelector('body').classList.add('no-focus');

	window.addEventListener('keydown', function(evt) {
		let keyCode = evt.keyCode || evt.which;

		if (keyCode === 9) {
			document.querySelector('body').classList.remove('no-focus');
		}
	});

	window.addEventListener('click', function() {
		document.querySelector('body').classList.add('no-focus');
	});
}
