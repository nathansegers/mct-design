const modal = (function() {
	console.log('Ready to enable Modal');
	const setup = function() {
		const modules = document.querySelectorAll('.js-module-link');
		const closeBtn = document.querySelector('.js-dialog-close');
		const modal = document.querySelector('.js-dialog');
		const body = document.querySelector('body');

		if (modules) {
			for (const m of modules) {
				m.addEventListener('click', function(e) {
					e.preventDefault();
					console.log(m);
					modal.showModal();
					body.classList.add("has-modal");
				});
			}
			closeBtn.addEventListener('click', () => {
				// + escape toets ook
				modal.close();
				body.classList.remove("has-modal");
			});
		}
	};

	return {
		setup: setup,
	};
})();
