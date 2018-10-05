// File
//------------------------------------------------------------------------------

window.sedona.file = function() {
	if (document.querySelector('.file[type="file"]') !== null) {
		let element = document.querySelectorAll('.file[type="file"]');

		Array.prototype.forEach.call(element, function(el) {
			if (!el.classList.contains('file--js-init')) {
				el.classList.add('file--js-init');
				el.classList.add('file--input');

				let id = el.getAttribute('id');

				let layout = '' +
					'<label class="file  file--pseudo" for="' + id + '">' +
						'<ul class="file__field"></ul>' +
						'<div class="file__button"></div>' +
					'</label>';

				el.insertAdjacentHTML('afterend', layout);

				el.addEventListener('change', function() {
					let filesSelected = this.files;
					let filesField = document.querySelector('label.file[for="' + id + '"] .file__field');
					let filesList = '';
					let filesPreview = 1;

					for (let i = 0; i < filesSelected.length; i++) {
						let fileName = filesSelected[i].name;
						let fileType = filesSelected[i].type;
						let filePreview = window.URL.createObjectURL(filesSelected[i]);

						if (!/image\//i.test(fileType)) {
							filesPreview = 0;
						}

						filesList = filesList +
							'<li>' +
								'<span class="file__preview" style="background-image: url(' + filePreview + ');"></span>' +
								'<span class="file__name">' + fileName + '</span>' +
							'</li>';
					}

					filesField.classList.remove('file__field--preview');

					if (filesPreview) {
						filesField.classList.add('file__field--preview');
					}

					filesField.innerHTML = filesList;
				});

				let droppable = document.querySelector('label.file[for="' + id + '"]');

				droppable.addEventListener('dragover', function(evt) {
					evt.stopPropagation();
					evt.preventDefault();

					el.classList.add('file--droppable');
				});

				el.addEventListener('dragover', function(evt) {
					evt.stopPropagation();
					evt.preventDefault();

					el.classList.add('file--droppable');
				});

				el.addEventListener('dragleave', function(evt) {
					evt.stopPropagation();
					evt.preventDefault();

					el.classList.remove('file--droppable');
				});

				el.addEventListener('drop', function(evt) {
					evt.stopPropagation();

					el.classList.remove('file--droppable');
				});
			}
		});

		document.addEventListener('dragover', function(evt) {
			evt.stopPropagation();

			Array.prototype.forEach.call(element, function(el) {
				el.classList.add('file--draggable');
			});
		});

		document.addEventListener('dragleave', function(evt) {
			evt.stopPropagation();

			Array.prototype.forEach.call(element, function(el) {
				el.classList.remove('file--draggable');
			});
		});

		document.addEventListener('drop', function(evt) {
			evt.stopPropagation();

			Array.prototype.forEach.call(element, function(el) {
				el.classList.remove('file--draggable');
			});
		});
	}
}

sedona.file();
