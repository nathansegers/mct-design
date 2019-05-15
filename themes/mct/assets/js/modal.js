const modal = (function() {
	const baseUrl = window.location.href;
	
	let modules = null;
	let closeBtn = null;
	let modal = null;
	let body = null;

	const setup = function() {
		modules = document.querySelectorAll('.js-module-link');
		closeBtn = document.querySelector('.js-dialog-close');
		modal = document.querySelector('.js-dialog');
		body = document.querySelector('body');

		enableListeners(modules);

		window.addEventListener('popstate', async function(e) {
			// Check if we came from a modal
			if (e.state && e.state.inModal) {
				// We need a modal with the current url pls...
				attachModel(null, window.location);

			// otherwise, we remove the modal
			}
			else {
				if (modal) {
					closeModal();
				}
			}
		});
	};

	const enableListeners = function(nodeList) {
		if (nodeList) {
			for (const m of nodeList) {
				m.addEventListener('click', attachModel);
			}
		}

		if (closeBtn) {
			closeBtn.addEventListener('click', () => {
				// + escape toets ook
				closeModal();
			});
		}

		if (modal) {
			document.addEventListener('keydown', function(e) {
				if(e.key === "Escape") {
					closeModal();
				}
			});
		}
	};

	const showModal = function() {
		modal.show();
		body.classList.add('has-modal');
	};

	const closeModal = function() {
		modal.close();
		history.replaceState({}, window.title, baseUrl);
		body.classList.remove('has-modal');
	}

	const listenToNestedModules = function() {		
		const followModules = modal.querySelectorAll('.js-module-link');
		for (const m of followModules) {
			m.addEventListener('click', attachModel);
		}
	}

	const populateModal = function(data) {
		// Get the current content
		const legend = modal.querySelector('.js-legend');
		const swatch = modal.querySelector('.js-swatch');
		const title = modal.querySelector('.js-title');
		const tags = modal.querySelector('.js-tags');
		const description = modal.querySelector('.js-description');
		const content = modal.querySelector('.js-content');

		legend.innerText = data.pillar;
		swatch.className = `c-curriculum-legend__swatch js-swatch u-bgcolor-${data.pillar}-base`;

		title.innerText = data.title;

		tags.innerText = data.tags;

		description.innerText = data.description;

		content.innerHTML = data.content;

		listenToNestedModules();
	}

	const getModuleData = function(url) {
		return fetch(`${url}index.json`)
			.then(r => r.json())
			.then(d => d);
	};

	const attachModel = async function(e, moduleUrl) {
		if (e) {
			e.preventDefault();
			moduleUrl = this.href;
		}

		showModal();

		const data = await getModuleData(moduleUrl);
		
		populateModal(data);

		// This happened by an event
		if (e) {
			history.pushState({ inModal: true }, data.title, moduleUrl);

		// This happened by history navigation
		} else {
			history.replaceState({ inModal: true }, data.title, moduleUrl);
		}
	};

	return {
		setup: setup,
	};
})();
