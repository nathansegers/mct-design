const mct_sharing = (function() {
	const socialWindow = function(url) {
		const left = (screen.width - 570) / 2,
			top = (screen.height - 570) / 2,
			params = `menubar=no,toolbar=no,status=no,width=570,height=570,top=${top},left=${left}`;

		window.open(url, 'NewWindow', params);
	};

	const init = function() {
		const pageUrl = encodeURIComponent(document.URL);
		const tweet = encodeURIComponent();

		document
			.querySelector('.js-share-facebook')
			.addEventListener('click', function() {
				url = `https://www.facebook.com/sharer.php?u=${pageUrl}`;
				socialWindow(url);
			});

		document
			.querySelector('.js-share-twitter')
			.addEventListener('click', function() {
				url = `https://twitter.com/intent/tweet?url=${pageUrl}&text=${tweet}`;
				socialWindow(url);
			});

		document
			.querySelector('.js-share-linkedin')
			.addEventListener('click', function() {
				url = `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`;
				socialWindow(url);
			});
	};

	return {
		init: init,
	};
})();
