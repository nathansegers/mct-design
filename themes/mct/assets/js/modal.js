const modal = (function() {
	console.log('Ready to enable Modal');
	const setup = function() {
		const modules = document.querySelectorAll('.js-module-link');
		const closeBtn = document.querySelector('.js-dialog-close');
		const modal = document.querySelector('.js-dialog');
		const body = document.querySelector('body');

		enableListeners(modules);

		window.addEventListener('popstate', function(event) {
			// Check if we came from a modal
			if (event.state && event.state.inModal) {
				console.log('Coming from a deeper level inside the popup...');

				// if we did, get current url and fetch the data
				// window.location = 'http://localhost:1313/programma/';
				// console.log(window.location);
			}
		});
	};

	const enableListeners = function(nodeList) {
		if (nodeList) {
			for (const m of nodeList) {
				m.addEventListener('click', attachModel);
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
