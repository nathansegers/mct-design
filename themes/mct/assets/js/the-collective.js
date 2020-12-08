(function () {
	const closeModal = function () {
		const body = document.querySelector('html'),
			modal = document.querySelector('.js-dialog');

		body.classList.remove('has-modal');
		modal.removeAttribute('open');
	};

	const openModal = function (youtubeUrl) {
		const body = document.querySelector('body'),
			modal = document.querySelector('.js-dialog');

		body.classList.add('has-modal');
		modal.querySelector('iframe').src = youtubeUrl;
		modal.setAttribute('open', null);

		modal.querySelector(
			'.js-embed-container'
		).innerHTML = `<iframe src="${youtubeUrl}" frameborder="0" allowfullscreen></iframe>`;

		console.log(modal);
		console.log(youtubeUrl);

		document
			.querySelector('.js-dialog-close')
			.addEventListener('click', function () {
				closeModal();
			});

		document.addEventListener('keydown', function (e) {
			if (e.key == 'Escape') {
				closeModal();
			}
		});

		modal.addEventListener('click', function () {
			closeModal();
		});
	};

	const listenToProjectPopups = function () {
		const projects = document.querySelectorAll('.js-show-youtube-modal');
		if (projects.length > 0) {
			for (const youtubeURL of projects) {
				youtubeURL.addEventListener('click', function (e) {
					e.preventDefault();
					const aTag = e.target.closest('.js-show-youtube-modal'); // Always get the parent.
					openModal(aTag.href);
				});
			}
		}
	};

	document.addEventListener('DOMContentLoaded', function () {
		listenToProjectPopups();
	});
})();
