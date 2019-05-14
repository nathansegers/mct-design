const modal = (function() {
	console.log('Ready to enable Modal');
	const setup = function() {
		const modules = document.querySelectorAll('.c-module--link');

		if (modules) {
			for (const m of modules) {
				m.addEventListener('click', function(e) {
					e.preventDefault();
					console.log(m);
				});
			}
		}
	};

	return {
		setup: setup,
	};
})();
