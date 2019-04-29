(function() {
	if (document.querySelector('.js-carousel-items')) {
		const _C = document.querySelector('.js-carousel-items'),
			SLIDES = document.querySelectorAll('.js-carousel-item'),
			COUNTER = document.querySelectorAll('.js-carousel-nav-list-item'),
			PREV_ARROW = document.querySelector('.js-button-prev'),
			NEXT_ARROW = document.querySelector('.js-button-next'),
			N = _C.children.length;

		let i = 0,
			x0 = null,
			locked = false,
			w;

		// CUSTOM FUNCTIONS
		function selectCurrentSlide(activeSlide) {
			for (const s of SLIDES) {
				if (s === SLIDES[activeSlide]) {
					s.classList.add('is-selected');
				} else {
					s.classList.remove('is-selected');
				}
			}
			for (const c of COUNTER) {
				if (c === COUNTER[activeSlide]) {
					c.classList.add('is-selected');
				} else {
					c.classList.remove('is-selected');
				}
			}

			updateArrows(activeSlide);
		}

		function updateArrows(activeSlide) {
			if (activeSlide == 0) {
				PREV_ARROW.classList.add('is-disabled');
				PREV_ARROW.setAttribute('disabled', 'disabled');
				NEXT_ARROW.classList.remove('is-disabled');
				NEXT_ARROW.removeAttribute('disabled');
			} else if (activeSlide == N - 1) {
				NEXT_ARROW.classList.add('is-disabled');
				NEXT_ARROW.setAttribute('disabled', 'disabled');
				PREV_ARROW.classList.remove('is-disabled');
				PREV_ARROW.removeAttribute('disabled');
			} else {
				NEXT_ARROW.classList.remove('is-disabled');
				PREV_ARROW.classList.remove('is-disabled');
				NEXT_ARROW.removeAttribute('disabled');
				PREV_ARROW.removeAttribute('disabled');
			}
		}

		function listenToItemsCounter() {
			for (const c of COUNTER) {
				c.addEventListener('click', function() {
					i = this.dataset.slide;
					_C.style.setProperty('--i', i);
					selectCurrentSlide(i);
				});
			}
		}

		function listenToArrows() {
			PREV_ARROW.addEventListener('click', function() {
				i = +i - 1;
				_C.style.setProperty('--i', i);
				selectCurrentSlide(i);
			});
			NEXT_ARROW.addEventListener('click', function() {
				i = +i + 1;
				_C.style.setProperty('--i', i);
				selectCurrentSlide(i);
			});
		}
		// END CUSTOM FUNCTIONS
		function unify(e) {
			return e.changedTouches ? e.changedTouches[0] : e;
		}

		function lock(e) {
			x0 = unify(e).clientX;
			_C.classList.toggle('is-released', !(locked = true));
		}

		function drag(e) {
			// console.log(e);

			// e.preventDefault();
			if (locked)
				_C.style.setProperty(
					'--tx',
					`${Math.round(unify(e).clientX - x0)}px`
				);
		}

		function move(e) {
			if (locked) {
				let dx = unify(e).clientX - x0,
					s = Math.sign(dx),
					f = +((s * dx) / w).toFixed(2);

				if ((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > 0.2) {
					_C.style.setProperty('--i', (i -= s));
					f = 1 - f;
					selectCurrentSlide(i);
				}

				_C.style.setProperty('--tx', '0px');
				_C.style.setProperty('--f', f);
				_C.classList.toggle('is-released', !(locked = false));
				x0 = null;
			}
		}

		function size() {
			w = window.innerWidth;
		}

		size();
		_C.style.setProperty('--n', N);
		selectCurrentSlide(0);

		addEventListener('resize', size, false);

		_C.addEventListener('mousedown', lock, false);
		_C.addEventListener('touchstart', lock, false);

		_C.addEventListener('mousemove', drag, false);
		_C.addEventListener('touchmove', drag, false);

		_C.addEventListener('mouseup', move, false);
		_C.addEventListener('touchend', move, false);

		// CUSTOM FUNCTIONS
		listenToItemsCounter();
		listenToArrows();
	}
})();
