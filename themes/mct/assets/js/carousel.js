// let mct_carousel = (function(){
// 	var slidesCount = 0,
// 		posRegex = /\.*translateX\((.*)%\)/i;
//
// 	function translateHolder(newPosition, holder, subNavItems, prBtn, nxBtn) {
// 		holder.style.transform = 'translateX(' + newPosition + '%)';
// 		updateCount(subNavItems, (newPosition * -1) / 100)
// 		// holder.classList.add( 'is-selected' );
//
// 		activateSlide(holder, subNavItems, prBtn, nxBtn);
//
// 		if (newPosition == 0) {
// 			disableButton(prBtn);
// 			enableButton(nxBtn);
// 			// activateLink( holder.children, subNavItems, holder, prBtn, nxBtn );
// 		} else if (newPosition == ((parseInt(slidesCount) * -100) + 100)) {
// 			enableButton(prBtn);
// 			disableButton(nxBtn);
// 		} else {
// 			enableButton(prBtn);
// 			enableButton(nxBtn);
// 			// activateLink( holder.children, subNavItems, holder, prBtn, nxBtn );
// 		}
// 	}
//
// 	function slide(direction, slidesCount, subNavItems, holder, prBtn, nxBtn) {
// 		var maxPercent = (slidesCount * -100) + 100;
//
// 		if (holder.style.transform) {
// 			var pos = posRegex.exec(holder.style.transform)[1];
// 		} else {
// 			var pos = 0;
// 		}
//
// 		if (direction == 'left') {
// 			if (pos >= 0) {
// 				// Not possible
// 				console.error('That direction is not possible right now... ✋🏽');
// 			} else {
// 				// enableButton( prBtn );
// 				translateHolder(parseInt(pos) + 100, holder, subNavItems, prBtn, nxBtn);
// 			}
// 		} else if (direction == 'right') {
// 			if (pos <= maxPercent) {
// 				// not possible
// 				console.error('That direction is not possible right now... ✋🏽');
// 			} else {
// 				translateHolder(parseInt(pos) - 100, holder, subNavItems, prBtn, nxBtn);
// 			}
// 		} else {
// 			console.warning('An error occured... 😭.');
// 		}
// 	}
//
// 	function enableSubNav(navItems, holder, prevButton, nextButton) {
// 		for (var i = navItems.length - 1; i >= 0; i--) {
// 			navItems[i].addEventListener('click', function (e) {
// 				translateHolder((e.srcElement.attributes['data-slide'].value * -1) * 100, holder, navItems, prevButton, nextButton);
// 			});
// 		}
// 	}
//
// 	function activateSlide(holder, navList, prBtn, nxBtn) {
// 		var curActive = (posRegex.exec(holder.style.transform)[1] / -100);
// 		for (var i = holder.children.length - 1; i >= 0; i--) {
// 			if (holder.children[i].attributes['data-slide'].value == curActive) {
// 				holder.children[i].classList.add('is-selected');
// 				holder.children[i].classList.remove('is-not-selected');
// 			} else {
// 				holder.children[i].classList.add('is-not-selected');
// 				holder.children[i].classList.remove('is-selected');
// 			}
// 		}
// 	}
//
// 	function initCarousel() {
// 		var projectHolder = document.querySelector('.js-carousel-items'),
// 			navList = document.querySelector('.js-nav-list'),
// 			prevButton = document.querySelector('.js-button-prev'),
// 			nextButton = document.querySelector('.js-button-next');
//
// 		if (projectHolder) {
// 			var slides = projectHolder.children;
// 			slidesCount = slides.length;
//
// 			// listen to clicks
// 			prevButton.addEventListener('click', function (e) {
// 				slide('left', slidesCount, navList.children, projectHolder, prevButton, nextButton);
// 			});
//
// 			nextButton.addEventListener('click', function (e) {
// 				slide('right', slidesCount, navList.children, projectHolder, prevButton, nextButton);
// 			});
//
// 			updateCount(navList.children, 0);
// 			enableSubNav(navList.children, projectHolder, prevButton, nextButton);
// 			disableButton(prevButton);
// 			activateSlide(projectHolder, navList.children, prevButton, nextButton);
// 		}
// 	}
//
// 	function disableButton(button) {
// 		button.classList.add('is-disabled');
// 		button.setAttribute('disabled', 'disabled');
// 	}
//
// 	function enableButton(button) {
// 		button.removeAttribute('disabled', 'disabled');
// 		button.classList.remove('is-disabled');
// 	}
//
// 	function updateCount(numbers, currentSlide) {
// 		for (var i = numbers.length - 1; i >= 0; i--) {
// 			if (numbers[i].attributes['data-slide'].value == currentSlide) {
// 				numbers[i].classList.add('is-selected');
// 			} else {
// 				numbers[i].classList.remove('is-selected');
// 			}
// 		}
// 	}
//
// 	return {
// 		initCarousel: initCarousel
// 	};
// })();

const _C = document.querySelector('.js-carousel-items'), 
      N = _C.children.length;

let i = 0, x0 = null, locked = false, w;

function unify(e) {	return e.changedTouches ? e.changedTouches[0] : e };

function lock(e) {
  x0 = unify(e).clientX;
	_C.classList.toggle('smooth', !(locked = true))
};

function drag(e) {
	e.preventDefault();

	if(locked)
		_C.style.setProperty('--tx', `${Math.round(unify(e).clientX - x0)}px`)
};

function move(e) {
  if(locked) {
    let dx = unify(e).clientX - x0, s = Math.sign(dx),
				f = +(s*dx/w).toFixed(2);

    if((i > 0 || s < 0) && (i < N - 1 || s > 0) && f > .2) {
			_C.style.setProperty('--i', i -= s);
			f = 1 - f
		}

    _C.style.setProperty('--tx', '0px');
		_C.style.setProperty('--f', f);
    _C.classList.toggle('smooth', !(locked = false));
    x0 = null
  }
};

function size() { w = window.innerWidth };

size();
_C.style.setProperty('--n', N);

addEventListener('resize', size, false);

_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener('mousemove', drag, false);
_C.addEventListener('touchmove', drag, false);

_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);
