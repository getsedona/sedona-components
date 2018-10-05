// Form Validate
//------------------------------------------------------------------------------

window.sedona.form = {
	validate: function() {
		if (document.querySelector('form[novalidate]') !== null) {
			let form = document.querySelectorAll('form[novalidate]');

			Array.prototype.forEach.call(form, function(el) {
				el.addEventListener('submit', function(evt) {
					if (el.querySelector('[required]') !== null) {
						let required = el.querySelectorAll('[required]');

						Array.prototype.forEach.call(required, function(el) {
							sedonaFormValidateRequired(el);
						});
					}

					if (el.querySelector('[minlength]') !== null) {
						let minlength = el.querySelectorAll('[minlength]');

						Array.prototype.forEach.call(minlength, function(el) {
							sedonaFormValidateMinLength(el);
						});
					}

					if (el.querySelector('[type="email"]') !== null) {
						let email = el.querySelectorAll('[type="email"]');

						Array.prototype.forEach.call(email, function(el) {
							sedonaFormValidateEmail(el);
						});
					}

					if (el.querySelector('.form__control--danger') !== null) {
						evt.preventDefault();

						el.querySelector('.form__control--danger:first-child input').scrollIntoView();

						el.querySelector('.form__control--danger:first-child input').focus();
					}
				});
			});
		}

		if (document.querySelector('form[novalidate] [minlength]') !== null) {
			let minlength = document.querySelectorAll('form[novalidate] [minlength]');

			Array.prototype.forEach.call(minlength, function(el) {
				el.addEventListener('input', function() {
					sedonaFormValidateRemoveDanger(el);
				});

				el.addEventListener('change', function() {
					sedonaFormValidateMinLength(el);
				});
			});
		}

		if (document.querySelector('form[novalidate] [type="email"]') !== null) {
			let email = document.querySelectorAll('form[novalidate] [type="email"]');

			Array.prototype.forEach.call(email, function(el) {
				el.addEventListener('input', function() {
					sedonaFormValidateRemoveDanger(el);
				});

				el.addEventListener('change', function() {
					sedonaFormValidateEmail(el);
				});
			});
		}
	}
}

sedona.form.validate();

function sedonaFormValidateRequired(el) {
	if (el.value.length === 0) {
		sedonaFormValidateRemoveDangerHint(el);

		sedonaFormValidateAddDanger(el);
	} else {
		sedonaFormValidateRemoveDanger(el);
	}
}

function sedonaFormValidateMinLength(el) {
	if (el.value.length > 0) {
		sedonaFormValidateRemoveDangerHint(el);

		if (el.value.length < el.getAttribute('minlength')) {
			sedonaFormValidateAddDanger(el);

			sedonaFormValidateAddDangerHint(el, 'Количество символов должно быть не меньше ' + el.getAttribute('minlength'));
		} else {
			sedonaFormValidateRemoveDanger(el);
		}
	}
}

function sedonaFormValidateEmail(el) {
	if (el.value.length > 0) {
		sedonaFormValidateRemoveDangerHint(el);

		if (!/^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,10}$/ig.test(el.value)) {
			sedonaFormValidateAddDanger(el);

			sedonaFormValidateAddDangerHint(el, 'Введен некорректный адрес электронной почты');
		} else {
			sedonaFormValidateRemoveDanger(el);
		}
	}
}

function sedonaFormValidateAddDanger(el) {
	el.parentElement.classList.add('form__control--danger');
}

function sedonaFormValidateRemoveDanger(el) {
	el.parentElement.classList.remove('form__control--danger');
}

function sedonaFormValidateAddDangerHint(el, message) {
	el.parentElement.insertAdjacentHTML('afterend', '<div class="form__hint  form__hint--danger">' + message + '</div>');
}

function sedonaFormValidateRemoveDangerHint(el) {
	if (el.parentElement.nextElementSibling !== null && el.parentElement.nextElementSibling.classList.contains('form__hint--danger')) {
		el.parentElement.parentElement.removeChild(el.parentElement.nextElementSibling);
	}
}
