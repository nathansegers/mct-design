const faqModule = (function () {
	let faqs = null;

	const faqIsPresent = function () {
		return document.querySelector('.js-faqs');
	};

	const setAllFaqs = function (faqTitles) {
		faqs = faqTitles;
	};

	const closeAllFaqs = function () {
		for (const f of faqs) {
			f.querySelector('.js-faq-button').classList.remove('is-open');

			f.nextElementSibling.classList.remove('is-open');
		}
	};

	const enableListener = function (faqTitle) {
		faqTitle
			.querySelector('.js-faq-button')
			.addEventListener('click', function () {
				if (this.classList.contains('is-open')) {
					closeAllFaqs();
					return;
				}

				closeAllFaqs();
				faqTitle
					.querySelector('.js-faq-button')
					.classList.add('is-open');
				faqTitle.nextElementSibling.classList.add('is-open');
			});
	};

	return { faqIsPresent, enableListener, setAllFaqs };
})();

document.addEventListener('DOMContentLoaded', function () {
	// This partial can be included anywhere, so we are checking if it is on the current page.
	if (faqModule.faqIsPresent()) {
		const faqs = document.querySelectorAll('.js-faq-title');
		faqModule.setAllFaqs(faqs);

		for (const faq of faqs) {
			faqModule.enableListener(faq);
		}
	}
});
