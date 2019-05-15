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

	const showModal = function() {};

	const getModuleData = function(url) {
		return fetch(`${url}index.json`)
			.then(r => r.json())
			.then(d => d);
	};

	const attachModel = async function(e) {
		e.preventDefault();
		showModal();

		const data = await getModuleData(this.href);

		history.pushState({ inModal: true }, data.title, this.href);

		console.log(data);
	};

	return {
		setup: setup,
	};
})();
