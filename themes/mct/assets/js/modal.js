const modal = (function() {
	console.log('Ready to enable Modal');
	const setup = function() {
		const modules = document.querySelectorAll('.js-module-link');
		const closeBtn = document.querySelector('.js-dialog-close');
		const modal = document.querySelector('.js-dialog');
		const body = document.querySelector('body');

		enableListeners(modules);

		window.addEventListener('popstate', async function(event) {
			// Check if we came from a modal
			if (event.state && event.state.inModal) {
				console.log('Coming from a deeper level inside the popup...');

				const curriculumPage = await fetch(
					`${window.location}index.json`
				)
					.then(r => {
						// console.log(r);
						return r.json();
					})
					.then(d => {
						// document.open();
						// document.write(d);
						// document.close();
						// window.innerHTML = 'TEST';
						console.log(d);
					});
				// if we did, get current url and fetch the data
				// window.location = 'http://localhost:1313/programma/';
				// console.log(window.location);

			// otherwise, we remove the modal
			} else {
				
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
