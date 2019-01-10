// TODO: functies schrijven + opkuisen
// TODO: js classes

var endpoint = 'https://mct.be/wp-json/wp/v2/module?filter[orderby]=menu_order&per_page=10&jaren=',
// var endpoint = 'https//localhost:8888/nmct-website/wp-json/wp/v2/module?filter[orderby]=menu_order&per_page=10&jaren=',
	tracks = {
		'web-app': 9,
		'smart-tech-ai': 10,
		'infrastructure-engineer': 11,
		'ai-engineer': 14
	},
	s4Holder,
	s5Holder;

function showLoadingMessage() {
	var loadingMessage = 'Even je modules ophalen...';
	s5Holder.innerHTML = '';
	s4Holder.innerHTML = `<div class="c-curriculum__call-to-action">
		<p class="c-type-meta u-ms-2 u-mb-gamma u-opacity-gamma js-loading-message">
			${loadingMessage}
		</p>
	</div>`;
}

function fillCustomModules( modules ) {
	var s4 = '',
		s5 = '';

	for (var i = 0; i <= modules.length - 6; i++) {
		s4 += '<a href="'  + modules[i].link + '" class="c-module c-module--link c-module--' + modules[i].acf.module + ' o-fadeInTop"><h3 class="c-module__title">' + modules[i].title.rendered + '</h3><p class="c-module__tags">' + modules[i].excerpt.rendered + '</p></a>';
	}

	for (var i = 5; i <= modules.length - 1; i++) {
		s5 += '<a href="'  + modules[i].link + '" class="c-module c-module--link c-module--' + modules[i].acf.module + ' o-fadeInTop"><h3 class="c-module__title">' + modules[i].title.rendered + '</h3><p class="c-module__tags">' + (modules[i].excerpt.rendered) + '</p></a>';
	}

	s4Holder.innerHTML = s4;
	s5Holder.innerHTML = s5;

	makeModulesFullHeight();
}

function getModules(slug) {
	var xhttp = new XMLHttpRequest(),
		query = slug;

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var resp = JSON.parse( this.responseText );
			fillCustomModules(resp);
		}
	};

	xhttp.open('GET', endpoint + query, true);
	xhttp.send();
}

function selectAndDeselectOptions(optionToSelect, allOptions, l, s ) {
	console.log('Going to select', optionToSelect, 'from', allOptions);
	
	for (var i = allOptions.length - 1; i >= 0; i--) {
		if (allOptions[i].getAttribute('data-module') == optionToSelect) {
			allOptions[i].classList.add('is-selected');
			var active = allOptions[i].dataset.name;
		} else {
			allOptions[i].classList.remove( 'is-selected' );
		}
	}
	s.querySelector('span').innerText = active;
}

function addEscFunction(e) {
	console.log('Pressing something!');
	e = e || window.event;
	var isEscape = false;
	if ('key' in e) {
		isEscape = (e.key == 'Escape' || e.key == 'Esc');
	} else {
		isEscape = (e.keyCode == 27);
	}
	if (isEscape) {
		document.querySelector('.js-curriculum-choices').classList.add('is-hidden');
		document.removeEventListener('keydown', addEscFunction, true);
	}
}

function getItemsAndAddListeners(s, l, o) {
	if (s) {
		s.addEventListener('click', function(e) {
			l.classList.toggle('is-hidden');
			document.addEventListener('keydown', addEscFunction, true);
		});

		for (var i = o.length - 1; i >= 0; i--) {
			o[i].addEventListener('click', function( e ) {
				e.preventDefault();
				showLoadingMessage();
				var target = e.target || e.srcElement;
				if (history.pushState) {
					history.pushState(null, null, '#profile-' + target.parentNode.dataset.slug);
				}
				else {
					window.location.hash = '#profile-' + target.parentNode.dataset.slug;
				}
				getModules(target.parentNode.dataset.module);
				selectAndDeselectOptions(target.parentNode.dataset.module, o, l, s);
				l.classList.toggle('is-hidden');
			});
		}
	}
}

function makeModulesFullHeight() {
	var m = document.querySelectorAll('.c-module'),
		h = 0;

	// Skip the largest (last) column
	for (var i = m.length - 2; i >= 0; i--) {
		if ( m[i].offsetHeight > h ) {
			h = m[i].offsetHeight;
		}
	}

	for (var i = m.length - 2; i >= 0; i--) {
		m[i].style.minHeight = h + 'px';
	}
}

function checkScrolling( containerTop, page ) {
	var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

	if ( scrollTop >= containerTop ) {
		page.classList.add( 'has-scrolled' );
	} else if ( scrollTop <= containerTop ) {
		page.classList.remove( 'has-scrolled' );
	}
}

document.addEventListener('DOMContentLoaded', function(){
	if (document.querySelector('.c-curriculum-overview')) {
			var c = document.querySelector('.js-curriculum-choice'),
				cT = c.offsetParent.offsetTop + c.offsetTop,
				s = c.querySelector('.js-curriculum-button'),
				l = document.querySelector('.js-curriculum-choices'),
				o = document.querySelectorAll('.js-curriculum-item'),
				p = document.querySelector('body');

			s4Holder = document.querySelector('.js-semester-4'),
			s5Holder = document.querySelector('.js-semester-5');
		
			p.classList.add( 'js-page' );
		
			if (window.location.hash.substring(0, 9) == '#profile-') {
				var tempMessage = document.querySelector('.js-loading-message');
				if (tempMessage) {
					showLoadingMessage();
				}
				var selectedTrack = tracks[window.location.hash.substring(9, window.location.hash.length)];
				// window.scrollTo(window.scrollX, window.scrollY - 28);
				getModules(selectedTrack);
				selectAndDeselectOptions(selectedTrack, o, l, s );
			}
		
			getItemsAndAddListeners(s, l, o);
		
			window.addEventListener('hashchange', function () {
				var moduleSlug = window.location.hash.substring(9, window.location.hash.length);
		
				if (window.location.hash.substring(0, 9) == '#profile-') {
					// console.log('Hash changed!', tracks[window.location.hash.substring(7, window.location.hash.length)]);
					getModules(tracks[moduleSlug]);
					selectAndDeselectOptions(tracks[moduleSlug], o, l, s);
				}
			});
		
			window.addEventListener('resize', function() {
				// Always check the modules when resizing the window1
				makeModulesFullHeight();
			});
		
			document.addEventListener('scroll', function() {
				checkScrolling( cT, p );
			});
		
			makeModulesFullHeight();
	}
});
