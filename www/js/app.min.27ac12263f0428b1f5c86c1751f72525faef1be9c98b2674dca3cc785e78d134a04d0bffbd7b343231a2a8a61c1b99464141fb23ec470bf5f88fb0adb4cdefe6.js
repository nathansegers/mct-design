/*!
* @copyright Copyright (c) 2017 IcoMoon.io
* @license Licensed under MIT license
* See https://github.com/Keyamoon/svgxuse
* @version 1.2.6
*/(function(){if('undefined'!==typeof window&&window.addEventListener){var e=Object.create(null),l,d=function(){clearTimeout(l);l=setTimeout(n,100);},m=function(){},t=function(){window.addEventListener('resize',d,!1);window.addEventListener('orientationchange',d,!1);if(window.MutationObserver){var k=new MutationObserver(d);k.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0,});m=function(){try{k.disconnect(),window.removeEventListener('resize',d,!1),window.removeEventListener('orientationchange',d,!1);}catch(v){}};}else
document.documentElement.addEventListener('DOMSubtreeModified',d,!1),(m=function(){document.documentElement.removeEventListener('DOMSubtreeModified',d,!1);window.removeEventListener('resize',d,!1);window.removeEventListener('orientationchange',d,!1);});},u=function(k){function e(a){if(void 0!==a.protocol)var c=a;else(c=document.createElement('a')),(c.href=a);return c.protocol.replace(/:/g,'')+c.host;}
if(window.XMLHttpRequest){var d=new XMLHttpRequest();var m=e(location);k=e(k);d=void 0===d.withCredentials&&''!==k&&k!==m?XDomainRequest||void 0:XMLHttpRequest;}
return d;};var n=function(){function d(){--q;0===q&&(m(),t());}
function l(a){return function(){!0!==e[a.base]&&(a.useEl.setAttributeNS('http://www.w3.org/1999/xlink','xlink:href','#'+a.hash),a.useEl.hasAttribute('href')&&a.useEl.setAttribute('href','#'+a.hash));};}
function p(a){return function(){var c=document.body,b=document.createElement('x');a.onload=null;b.innerHTML=a.responseText;if((b=b.getElementsByTagName('svg')[0]))
b.setAttribute('aria-hidden','true'),(b.style.position='absolute'),(b.style.width=0),(b.style.height=0),(b.style.overflow='hidden'),c.insertBefore(b,c.firstChild);d();};}
function n(a){return function(){a.onerror=null;a.ontimeout=null;d();};}
var a,c,q=0;m();var f=document.getElementsByTagName('use');for(c=0;c<f.length;c+=1){try{var g=f[c].getBoundingClientRect();}catch(w){g=!1;}
var h=(a=f[c].getAttribute('href')||f[c].getAttributeNS('http://www.w3.org/1999/xlink','href')||f[c].getAttribute('xlink:href'))&&a.split?a.split('#'):['',''];var b=h[0];h=h[1];var r=g&&0===g.left&&0===g.right&&0===g.top&&0===g.bottom;g&&0===g.width&&0===g.height&&!r?(f[c].hasAttribute('href')&&f[c].setAttributeNS('http://www.w3.org/1999/xlink','xlink:href',a),b.length&&((a=e[b]),!0!==a&&setTimeout(l({useEl:f[c],base:b,hash:h}),0),void 0===a&&((h=u(b)),void 0!==h&&((a=new h()),(e[b]=a),(a.onload=p(a)),(a.onerror=n(a)),(a.ontimeout=n(a)),a.open('GET',b),a.send(),(q+=1))))):r?b.length&&e[b]&&setTimeout(l({useEl:f[c],base:b,hash:h}),0):void 0===e[b]?(e[b]=!0):e[b].onload&&(e[b].abort(),delete e[b].onload,(e[b]=!0));}
f='';q+=1;d();};var p=function(){window.removeEventListener('load',p,!1);l=setTimeout(n,0);};'complete'!==document.readyState?window.addEventListener('load',p,!1):p();}})();function initNavigation(){var navigation='.js-nav-mobile',trigger='.js-nav-trigger',navigationElement=document.querySelector(navigation),triggerElements=document.querySelectorAll(trigger);const top=document.querySelector('.c-row--top');if(top){navigationElement.style.top=`${top.clientHeight+1}px`;}
for(var i=triggerElements.length-1;i>=0;i--){triggerElements[i].addEventListener('click',function(){navigationElement.classList.toggle('is-visible');if(document.documentElement.classList.contains('is-fixed')){document.documentElement.classList.remove('is-fixed');}else{document.documentElement.classList.add('is-fixed');}});}}
function getReadyToRemoveCookie(){let cookieBox=document.querySelector('.js-cookie-message'),cookieBtn=document.querySelector('.js-cookie-button');if(!localStorage.getItem('ok-with-cookies')){cookieBox.style.display='flex';cookieBtn.addEventListener('click',()=>{cookieBox.style.display='none';localStorage.setItem('ok-with-cookies',true);});}}
function pauseAllVideos(){const videos=document.querySelectorAll('video');for(const v of videos){v.pause();}}
function initVideoPlayer(){let videoplayers=document.querySelectorAll('.c-video-player');if(videoplayers.length>0){for(const videoplayer of videoplayers){var v=videoplayer.querySelector('.c-video-player__video'),playBtns=videoplayer.querySelectorAll('.c-video-play-button');for(const btnPlay of playBtns){btnPlay.addEventListener('click',function(){if(videoplayer.classList.contains('c-video-player--circle')){const video=btnPlay.parentNode.querySelector('video');if(btnPlay.classList.contains('is-playing')){video.pause();btnPlay.classList.remove('is-playing');btnPlay.setAttribute('aria-label','Speel video');}else{pauseAllVideos();video.play();btnPlay.classList.add('is-playing');btnPlay.setAttribute('aria-label','Pauzeer video');}
video.addEventListener('ended',function(){btnPlay.classList.remove('is-playing');},false);video.addEventListener('pause',function(){btnPlay.classList.remove('is-playing');},false);}else{pauseAllVideos();btnPlay.parentNode.querySelector('video').play();btnPlay.parentNode.querySelector('video').setAttribute('controls','controls');btnPlay.classList.add('is-hidden');}});}}}}
var checkNotification=function(){const announcement=document.querySelector('.js-announcement');if(announcement){var givenDate=announcement.getAttribute('data-due-date');var currentDate=new Date();givenDate=new Date(givenDate);if(givenDate>currentDate){announcement.style.display='flex';}}};window.addEventListener('resize',function(){if(window.innerWidth>960){document.documentElement.classList.remove('is-fixed');document.querySelector('.js-nav-mobile').classList.remove('is-visible');}
const top=document.querySelector('.c-row--top');if(top){document.querySelector('.js-nav-mobile').style.top=`${
top.clientHeight+1
}px`;}});document.addEventListener('DOMContentLoaded',function(){initVideoPlayer();getReadyToRemoveCookie();checkNotification();modal.setup();const observer=lozad();observer.observe();if(typeof mct_carousel!='undefined'){mct_carousel.initCarousel();}
if(document.querySelector('.js-sharing')){mct_sharing.init();}});window.addEventListener('load',function(){initNavigation();});;(function(){if(document.querySelector('.js-carousel-items')){const _C=document.querySelector('.js-carousel-items'),SLIDES=document.querySelectorAll('.js-carousel-item'),COUNTER=document.querySelectorAll('.js-carousel-nav-list-item'),PREV_ARROW=document.querySelector('.js-button-prev'),NEXT_ARROW=document.querySelector('.js-button-next'),N=_C.children.length;let i=0,x0=null,locked=false,w;function selectCurrentSlide(activeSlide){for(const s of SLIDES){if(s===SLIDES[activeSlide]){s.classList.add('is-selected');}else{s.classList.remove('is-selected');}}
for(const c of COUNTER){if(c===COUNTER[activeSlide]){c.classList.add('is-selected');}else{c.classList.remove('is-selected');}}
updateArrows(activeSlide);}
function updateArrows(activeSlide){if(activeSlide==0){PREV_ARROW.classList.add('is-disabled');PREV_ARROW.setAttribute('disabled','disabled');NEXT_ARROW.classList.remove('is-disabled');NEXT_ARROW.removeAttribute('disabled');}else if(activeSlide==N-1){NEXT_ARROW.classList.add('is-disabled');NEXT_ARROW.setAttribute('disabled','disabled');PREV_ARROW.classList.remove('is-disabled');PREV_ARROW.removeAttribute('disabled');}else{NEXT_ARROW.classList.remove('is-disabled');PREV_ARROW.classList.remove('is-disabled');NEXT_ARROW.removeAttribute('disabled');PREV_ARROW.removeAttribute('disabled');}}
function listenToItemsCounter(){for(const c of COUNTER){c.addEventListener('click',function(){i=this.dataset.slide;_C.style.setProperty('--i',i);selectCurrentSlide(i);});}}
function listenToArrows(){PREV_ARROW.addEventListener('click',function(){i=+i-1;_C.style.setProperty('--i',i);selectCurrentSlide(i);});NEXT_ARROW.addEventListener('click',function(){i=+i+1;_C.style.setProperty('--i',i);selectCurrentSlide(i);});}
function unify(e){return e.changedTouches?e.changedTouches[0]:e;}
function lock(e){x0=unify(e).clientX;_C.classList.toggle('is-released',!(locked=true));}
function drag(e){if(locked)
_C.style.setProperty('--tx',`${Math.round(unify(e).clientX-x0)}px`);}
function move(e){if(locked){let dx=unify(e).clientX-x0,s=Math.sign(dx),f=+((s*dx)/w).toFixed(2);if((i>0||s<0)&&(i<N-1||s>0)&&f>0.2){_C.style.setProperty('--i',(i-=s));f=1-f;selectCurrentSlide(i);}
_C.style.setProperty('--tx','0px');_C.style.setProperty('--f',f);_C.classList.toggle('is-released',!(locked=false));x0=null;}}
function size(){w=window.innerWidth;}
size();_C.style.setProperty('--n',N);selectCurrentSlide(0);addEventListener('resize',size,false);_C.addEventListener('mousedown',lock,false);_C.addEventListener('touchstart',lock,false);_C.addEventListener('mousemove',drag,false);_C.addEventListener('touchmove',drag,false);_C.addEventListener('mouseup',move,false);_C.addEventListener('touchend',move,false);listenToItemsCounter();listenToArrows();}})();;var trackHolders=document.querySelectorAll('.js-dynamic-track'),tracks={'next-web-developer':9,'smart-xr-developer':10,'infrastructure-engineer':11,'ai-engineer':14,},s4Holder,s5Holder;function _fadeModules(){for(let i=0;i<trackHolders.length;i++){trackHolders[i].classList.remove('is-selected');}}
function getModules(slug){document.querySelector('.js-call-to-action').style.display='none';_fadeModules();let modulesToSelect=document.querySelectorAll(`.js-${slug}-track`);for(let i=0;i<modulesToSelect.length;i++){modulesToSelect[i].classList.add('is-selected');}
makeModulesFullHeight();}
function selectAndDeselectOptions(optionToSelect,allOptions,l,s){for(var i=allOptions.length-1;i>=0;i--){if(allOptions[i].getAttribute('data-module')==optionToSelect){allOptions[i].classList.add('is-selected');var active=allOptions[i].dataset.name;}else{allOptions[i].classList.remove('is-selected');}}
s.querySelector('span').innerText=active;}
function addEscFunction(e){e=e||window.event;var isEscape=false;if('key'in e){isEscape=e.key=='Escape'||e.key=='Esc';}else{isEscape=e.keyCode==27;}
if(isEscape){document.querySelector('.js-curriculum-choices').classList.add('is-hidden');document.removeEventListener('keydown',addEscFunction,true);}}
function getItemsAndAddListeners(s,l,o){if(s){s.addEventListener('click',function(e){l.classList.toggle('is-hidden');document.addEventListener('keydown',addEscFunction,true);});for(var i=o.length-1;i>=0;i--){o[i].addEventListener('click',function(e){e.preventDefault();var target=e.target||e.srcElement;if(history.pushState){history.pushState(null,null,'#profile-'+target.parentNode.dataset.slug);}else{window.location.hash='#profile-'+target.parentNode.dataset.slug;}
getModules(target.parentNode.dataset.slug);selectAndDeselectOptions(target.parentNode.dataset.module,o,l,s);l.classList.toggle('is-hidden');});}}}
function makeModulesFullHeight(){var m=document.querySelectorAll('.c-module'),h=0;for(var i=m.length-1;i>=0;i--){m[i].style.minHeight='';if(m[i].offsetHeight>h){h=m[i].offsetHeight;}}
for(var i=m.length-1;i>=0;i--){m[i].style.minHeight=h+'px';}}
function checkScrolling(containerTop,page){var scrollTop=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop;if(scrollTop>=containerTop){page.classList.add('has-scrolled');}else if(scrollTop<=containerTop){page.classList.remove('has-scrolled');}}
document.addEventListener('DOMContentLoaded',function(){if(document.querySelector('.c-curriculum-overview')){var c=document.querySelector('.js-curriculum-choice'),cT=c.offsetParent.offsetTop+c.offsetTop,s=c.querySelector('.js-curriculum-button'),l=document.querySelector('.js-curriculum-choices'),o=document.querySelectorAll('.js-curriculum-item'),p=document.querySelector('body');(s4Holder=document.querySelector('.js-semester-4')),(s5Holder=document.querySelector('.js-semester-5'));p.classList.add('js-page');if(window.location.hash.substring(0,9)=='#profile-'){window.scrollTo(window.scrollX,window.scrollY-28);getModules(window.location.hash.substring(9,window.location.hash.length));selectAndDeselectOptions(tracks[window.location.hash.substring(9,window.location.hash.length)],o,l,s);}
getItemsAndAddListeners(s,l,o);window.addEventListener('hashchange',function(){var moduleSlug=window.location.hash.substring(9,window.location.hash.length);if(window.location.hash.substring(0,9)=='#profile-'){getModules(moduleSlug);selectAndDeselectOptions(tracks[moduleSlug],o,l,s);}});}
if(document.querySelector('.c-module')){window.addEventListener('resize',function(){makeModulesFullHeight();});makeModulesFullHeight();}});;var map,HQ={lat:50.8244565,lng:3.2502635},contentString='<div id="content">'+
'<div id="siteNotice">'+
'</div>'+
'<h1 id="firstHeading" class="firstHeading">MCT</h1>'+
'<div id="bodyContent">'+
'<p>MCT @ Howest Kortrijk<br/>Graaf Karel de Goedelaan 5<br/>8500 Kortrijk</p>'+
'</div>'+
'</div>',imagePath='';function initMap(){map=new google.maps.Map(document.getElementById('map'),{center:HQ,zoom:16,styles:[{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","stylers":[{"visibility":"off"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"administrative.neighborhood","stylers":[{"visibility":"off"}]},{"featureType":"poi","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}]});var infowindow=new google.maps.InfoWindow({content:contentString});imagePath='/favicons/favicon-32x32.png';var marker=new google.maps.Marker({position:HQ,icon:imagePath,map:map});marker.addListener('click',function(){infowindow.open(map,marker);});}
document.addEventListener('DOMContentLoaded',function(){let label=document.querySelector('.c-label--verborgen');if(label){label.style.display='none';}});;const mct_sharing=(function(){const socialWindow=function(url){const left=(screen.width-570)/2,top=(screen.height-570)/2,params=`menubar=no,toolbar=no,status=no,width=570,height=570,top=${top},left=${left}`;window.open(url,'NewWindow',params);};const init=function(){const pageUrl=encodeURIComponent(document.URL);const tweet=encodeURIComponent(document.getElementsByName('description')[0].getAttribute('content'));document.querySelector('.js-share-facebook').addEventListener('click',function(){url=`https://www.facebook.com/sharer.php?u=${pageUrl}`;socialWindow(url);});document.querySelector('.js-share-twitter').addEventListener('click',function(){url=`https://twitter.com/intent/tweet?url=${pageUrl}&text=${tweet}`;socialWindow(url);});document.querySelector('.js-share-linkedin').addEventListener('click',function(){url=`https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}`;socialWindow(url);});};return{init:init,};})();;(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global=global||self,global.dialogPolyfill=factory());}(this,function(){'use strict';var supportCustomEvent=window.CustomEvent;if(!supportCustomEvent||typeof supportCustomEvent==='object'){supportCustomEvent=function CustomEvent(event,x){x=x||{};var ev=document.createEvent('CustomEvent');ev.initCustomEvent(event,!!x.bubbles,!!x.cancelable,x.detail||null);return ev;};supportCustomEvent.prototype=window.Event.prototype;}
function createsStackingContext(el){while(el&&el!==document.body){var s=window.getComputedStyle(el);var invalid=function(k,ok){return!(s[k]===undefined||s[k]===ok);};if(s.opacity<1||invalid('zIndex','auto')||invalid('transform','none')||invalid('mixBlendMode','normal')||invalid('filter','none')||invalid('perspective','none')||s['isolation']==='isolate'||s.position==='fixed'||s.webkitOverflowScrolling==='touch'){return true;}
el=el.parentElement;}
return false;}
function findNearestDialog(el){while(el){if(el.localName==='dialog'){return(el);}
el=el.parentElement;}
return null;}
function safeBlur(el){if(el&&el.blur&&el!==document.body){el.blur();}}
function inNodeList(nodeList,node){for(var i=0;i<nodeList.length;++i){if(nodeList[i]===node){return true;}}
return false;}
function isFormMethodDialog(el){if(!el||!el.hasAttribute('method')){return false;}
return el.getAttribute('method').toLowerCase()==='dialog';}
function dialogPolyfillInfo(dialog){this.dialog_=dialog;this.replacedStyleTop_=false;this.openAsModal_=false;if(!dialog.hasAttribute('role')){dialog.setAttribute('role','dialog');}
dialog.show=this.show.bind(this);dialog.showModal=this.showModal.bind(this);dialog.close=this.close.bind(this);if(!('returnValue'in dialog)){dialog.returnValue='';}
if('MutationObserver'in window){var mo=new MutationObserver(this.maybeHideModal.bind(this));mo.observe(dialog,{attributes:true,attributeFilter:['open']});}else{var removed=false;var cb=function(){removed?this.downgradeModal():this.maybeHideModal();removed=false;}.bind(this);var timeout;var delayModel=function(ev){if(ev.target!==dialog){return;}
var cand='DOMNodeRemoved';removed|=(ev.type.substr(0,cand.length)===cand);window.clearTimeout(timeout);timeout=window.setTimeout(cb,0);};['DOMAttrModified','DOMNodeRemoved','DOMNodeRemovedFromDocument'].forEach(function(name){dialog.addEventListener(name,delayModel);});}
Object.defineProperty(dialog,'open',{set:this.setOpen.bind(this),get:dialog.hasAttribute.bind(dialog,'open')});this.backdrop_=document.createElement('div');this.backdrop_.className='backdrop';this.backdrop_.addEventListener('click',this.backdropClick_.bind(this));}
dialogPolyfillInfo.prototype={get dialog(){return this.dialog_;},maybeHideModal:function(){if(this.dialog_.hasAttribute('open')&&document.body.contains(this.dialog_)){return;}
this.downgradeModal();},downgradeModal:function(){if(!this.openAsModal_){return;}
this.openAsModal_=false;this.dialog_.style.zIndex='';if(this.replacedStyleTop_){this.dialog_.style.top='';this.replacedStyleTop_=false;}
this.backdrop_.parentNode&&this.backdrop_.parentNode.removeChild(this.backdrop_);dialogPolyfill.dm.removeDialog(this);},setOpen:function(value){if(value){this.dialog_.hasAttribute('open')||this.dialog_.setAttribute('open','');}else{this.dialog_.removeAttribute('open');this.maybeHideModal();}},backdropClick_:function(e){if(!this.dialog_.hasAttribute('tabindex')){var fake=document.createElement('div');this.dialog_.insertBefore(fake,this.dialog_.firstChild);fake.tabIndex=-1;fake.focus();this.dialog_.removeChild(fake);}else{this.dialog_.focus();}
var redirectedEvent=document.createEvent('MouseEvents');redirectedEvent.initMouseEvent(e.type,e.bubbles,e.cancelable,window,e.detail,e.screenX,e.screenY,e.clientX,e.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,e.button,e.relatedTarget);this.dialog_.dispatchEvent(redirectedEvent);e.stopPropagation();},focus_:function(){var target=this.dialog_.querySelector('[autofocus]:not([disabled])');if(!target&&this.dialog_.tabIndex>=0){target=this.dialog_;}
if(!target){var opts=['button','input','keygen','select','textarea'];var query=opts.map(function(el){return el+':not([disabled])';});query.push('[tabindex]:not([disabled]):not([tabindex=""])');target=this.dialog_.querySelector(query.join(', '));}
safeBlur(document.activeElement);target&&target.focus();},updateZIndex:function(dialogZ,backdropZ){if(dialogZ<backdropZ){throw new Error('dialogZ should never be < backdropZ');}
this.dialog_.style.zIndex=dialogZ;this.backdrop_.style.zIndex=backdropZ;},show:function(){if(!this.dialog_.open){this.setOpen(true);this.focus_();}},showModal:function(){if(this.dialog_.hasAttribute('open')){throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');}
if(!document.body.contains(this.dialog_)){throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');}
if(!dialogPolyfill.dm.pushDialog(this)){throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');}
if(createsStackingContext(this.dialog_.parentElement)){console.warn('A dialog is being shown inside a stacking context. '+
'This may cause it to be unusable. For more information, see this link: '+
'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');}
this.setOpen(true);this.openAsModal_=true;if(dialogPolyfill.needsCentering(this.dialog_)){dialogPolyfill.reposition(this.dialog_);this.replacedStyleTop_=true;}else{this.replacedStyleTop_=false;}
this.dialog_.parentNode.insertBefore(this.backdrop_,this.dialog_.nextSibling);this.focus_();},close:function(opt_returnValue){if(!this.dialog_.hasAttribute('open')){throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');}
this.setOpen(false);if(opt_returnValue!==undefined){this.dialog_.returnValue=opt_returnValue;}
var closeEvent=new supportCustomEvent('close',{bubbles:false,cancelable:false});this.dialog_.dispatchEvent(closeEvent);}};var dialogPolyfill={};dialogPolyfill.reposition=function(element){var scrollTop=document.body.scrollTop||document.documentElement.scrollTop;var topValue=scrollTop+(window.innerHeight-element.offsetHeight)/2;element.style.top=Math.max(scrollTop,topValue)+'px';};dialogPolyfill.isInlinePositionSetByStylesheet=function(element){for(var i=0;i<document.styleSheets.length;++i){var styleSheet=document.styleSheets[i];var cssRules=null;try{cssRules=styleSheet.cssRules;}catch(e){}
if(!cssRules){continue;}
for(var j=0;j<cssRules.length;++j){var rule=cssRules[j];var selectedNodes=null;try{selectedNodes=document.querySelectorAll(rule.selectorText);}catch(e){}
if(!selectedNodes||!inNodeList(selectedNodes,element)){continue;}
var cssTop=rule.style.getPropertyValue('top');var cssBottom=rule.style.getPropertyValue('bottom');if((cssTop&&cssTop!=='auto')||(cssBottom&&cssBottom!=='auto')){return true;}}}
return false;};dialogPolyfill.needsCentering=function(dialog){var computedStyle=window.getComputedStyle(dialog);if(computedStyle.position!=='absolute'){return false;}
if((dialog.style.top!=='auto'&&dialog.style.top!=='')||(dialog.style.bottom!=='auto'&&dialog.style.bottom!=='')){return false;}
return!dialogPolyfill.isInlinePositionSetByStylesheet(dialog);};dialogPolyfill.forceRegisterDialog=function(element){if(window.HTMLDialogElement||element.showModal){console.warn('This browser already supports <dialog>, the polyfill '+
'may not work correctly',element);}
if(element.localName!=='dialog'){throw new Error('Failed to register dialog: The element is not a dialog.');}
new dialogPolyfillInfo((element));};dialogPolyfill.registerDialog=function(element){if(!element.showModal){dialogPolyfill.forceRegisterDialog(element);}};dialogPolyfill.DialogManager=function(){this.pendingDialogStack=[];var checkDOM=this.checkDOM_.bind(this);this.overlay=document.createElement('div');this.overlay.className='_dialog_overlay';this.overlay.addEventListener('click',function(e){this.forwardTab_=undefined;e.stopPropagation();checkDOM([]);}.bind(this));this.handleKey_=this.handleKey_.bind(this);this.handleFocus_=this.handleFocus_.bind(this);this.zIndexLow_=100000;this.zIndexHigh_=100000+150;this.forwardTab_=undefined;if('MutationObserver'in window){this.mo_=new MutationObserver(function(records){var removed=[];records.forEach(function(rec){for(var i=0,c;c=rec.removedNodes[i];++i){if(!(c instanceof Element)){continue;}else if(c.localName==='dialog'){removed.push(c);}
removed=removed.concat(c.querySelectorAll('dialog'));}});removed.length&&checkDOM(removed);});}};dialogPolyfill.DialogManager.prototype.blockDocument=function(){document.documentElement.addEventListener('focus',this.handleFocus_,true);document.addEventListener('keydown',this.handleKey_);this.mo_&&this.mo_.observe(document,{childList:true,subtree:true});};dialogPolyfill.DialogManager.prototype.unblockDocument=function(){document.documentElement.removeEventListener('focus',this.handleFocus_,true);document.removeEventListener('keydown',this.handleKey_);this.mo_&&this.mo_.disconnect();};dialogPolyfill.DialogManager.prototype.updateStacking=function(){var zIndex=this.zIndexHigh_;for(var i=0,dpi;dpi=this.pendingDialogStack[i];++i){dpi.updateZIndex(--zIndex,--zIndex);if(i===0){this.overlay.style.zIndex=--zIndex;}}
var last=this.pendingDialogStack[0];if(last){var p=last.dialog.parentNode||document.body;p.appendChild(this.overlay);}else if(this.overlay.parentNode){this.overlay.parentNode.removeChild(this.overlay);}};dialogPolyfill.DialogManager.prototype.containedByTopDialog_=function(candidate){while(candidate=findNearestDialog(candidate)){for(var i=0,dpi;dpi=this.pendingDialogStack[i];++i){if(dpi.dialog===candidate){return i===0;}}
candidate=candidate.parentElement;}
return false;};dialogPolyfill.DialogManager.prototype.handleFocus_=function(event){if(this.containedByTopDialog_(event.target)){return;}
if(document.activeElement===document.documentElement){return;}
event.preventDefault();event.stopPropagation();safeBlur((event.target));if(this.forwardTab_===undefined){return;}
var dpi=this.pendingDialogStack[0];var dialog=dpi.dialog;var position=dialog.compareDocumentPosition(event.target);if(position&Node.DOCUMENT_POSITION_PRECEDING){if(this.forwardTab_){dpi.focus_();}else if(event.target!==document.documentElement){document.documentElement.focus();}}
return false;};dialogPolyfill.DialogManager.prototype.handleKey_=function(event){this.forwardTab_=undefined;if(event.keyCode===27){event.preventDefault();event.stopPropagation();var cancelEvent=new supportCustomEvent('cancel',{bubbles:false,cancelable:true});var dpi=this.pendingDialogStack[0];if(dpi&&dpi.dialog.dispatchEvent(cancelEvent)){dpi.dialog.close();}}else if(event.keyCode===9){this.forwardTab_=!event.shiftKey;}};dialogPolyfill.DialogManager.prototype.checkDOM_=function(removed){var clone=this.pendingDialogStack.slice();clone.forEach(function(dpi){if(removed.indexOf(dpi.dialog)!==-1){dpi.downgradeModal();}else{dpi.maybeHideModal();}});};dialogPolyfill.DialogManager.prototype.pushDialog=function(dpi){var allowed=(this.zIndexHigh_-this.zIndexLow_)/2-1;if(this.pendingDialogStack.length>=allowed){return false;}
if(this.pendingDialogStack.unshift(dpi)===1){this.blockDocument();}
this.updateStacking();return true;};dialogPolyfill.DialogManager.prototype.removeDialog=function(dpi){var index=this.pendingDialogStack.indexOf(dpi);if(index===-1){return;}
this.pendingDialogStack.splice(index,1);if(this.pendingDialogStack.length===0){this.unblockDocument();}
this.updateStacking();};dialogPolyfill.dm=new dialogPolyfill.DialogManager();dialogPolyfill.formSubmitter=null;dialogPolyfill.useValue=null;if(window.HTMLDialogElement===undefined){var testForm=document.createElement('form');testForm.setAttribute('method','dialog');if(testForm.method!=='dialog'){var methodDescriptor=Object.getOwnPropertyDescriptor(HTMLFormElement.prototype,'method');if(methodDescriptor){var realGet=methodDescriptor.get;methodDescriptor.get=function(){if(isFormMethodDialog(this)){return 'dialog';}
return realGet.call(this);};var realSet=methodDescriptor.set;methodDescriptor.set=function(v){if(typeof v==='string'&&v.toLowerCase()==='dialog'){return this.setAttribute('method',v);}
return realSet.call(this,v);};Object.defineProperty(HTMLFormElement.prototype,'method',methodDescriptor);}}
document.addEventListener('click',function(ev){dialogPolyfill.formSubmitter=null;dialogPolyfill.useValue=null;if(ev.defaultPrevented){return;}
var target=(ev.target);if(!target||!isFormMethodDialog(target.form)){return;}
var valid=(target.type==='submit'&&['button','input'].indexOf(target.localName)>-1);if(!valid){if(!(target.localName==='input'&&target.type==='image')){return;}
dialogPolyfill.useValue=ev.offsetX+','+ev.offsetY;}
var dialog=findNearestDialog(target);if(!dialog){return;}
dialogPolyfill.formSubmitter=target;},false);var nativeFormSubmit=HTMLFormElement.prototype.submit;var replacementFormSubmit=function(){if(!isFormMethodDialog(this)){return nativeFormSubmit.call(this);}
var dialog=findNearestDialog(this);dialog&&dialog.close();};HTMLFormElement.prototype.submit=replacementFormSubmit;document.addEventListener('submit',function(ev){var form=(ev.target);if(!isFormMethodDialog(form)){return;}
ev.preventDefault();var dialog=findNearestDialog(form);if(!dialog){return;}
var s=dialogPolyfill.formSubmitter;if(s&&s.form===form){dialog.close(dialogPolyfill.useValue||s.value);}else{dialog.close();}
dialogPolyfill.formSubmitter=null;},true);}
return dialogPolyfill;}));(function(){var dialog=document.querySelector('dialog');if(dialog){dialogPolyfill.registerDialog(dialog);}})();;const modal=(function(){const baseUrl=window.location.href;let modules=null;let modal=null;let body=null;const setup=function(){modules=document.querySelectorAll('.js-module-link');modal=document.querySelector('.js-dialog');body=document.querySelector('body');enableListeners(modules);window.addEventListener('popstate',async function(e){if(e.state&&e.state.inModal){attachModel(null,window.location);}else{if(modal){closeModal();}else{window.location=window.location;}}});};const enableListeners=function(nodeList){if(nodeList){for(const m of nodeList){m.addEventListener('click',attachModel);}}
if(modal){modal.addEventListener('close',function(){body.classList.remove('has-modal');history.replaceState({},window.title,baseUrl);ga('send','pageview',location.pathname);});}};const showModal=function(){modal.showModal();body.classList.add('has-modal');};const closeModal=function(){modal.close();history.replaceState({},window.title,baseUrl);};const listenToGeneratedModal=function(){const closeBtn=modal.querySelector('.js-dialog-close');if(closeBtn){closeBtn.addEventListener('click',()=>{closeModal();});}
const followModules=modal.querySelectorAll('.js-module-link');for(const m of followModules){m.addEventListener('click',attachModel);}};const populateModal=function(data){console.log(data.tags);const modalHTML=`
				<div class="c-modal__body c-modal__body--module c-modal__body--module-${
data.pillar
}">
				<button class="c-modal__close js-dialog-close" aria-label="Close dialog">
					<svg role="img" class="c-symbol c-symbol-close c-nav-main-trigger__symbol">
						<use xlink:href="/img/svg/svg-symbols.svg#c-symbol-close"></use>
					</svg>
				</button>

				<ul class="o-list c-curriculum-legend">
					<li class="c-curriculum-legend__item">
						<span class="c-curriculum-legend__swatch u-bgcolor-${data.pillar}-base"></span>
						${data.pillar}
					</li>
				</ul>
				<h1 class="c-type-intro u-mb-alpha">
					${data.title}
				</h1>

				<p class="c-type-meta u-ms-1 u-color-neutral-base">
					#${data.tags.join(' #')}
				</p>

				<div class="u-max-width-optimal">
					${
data.description?`
						<p class="c-type-intro-small ">
							${data.description}
						</p>
					`:``
}
					${
data.tools?`
						<h3 class="u-mb-alpha">
							Tools: <span class="u-color-neutral-base"></span>
						</h3>
						<p class="u-color-neutral-base">
							${data.tools}
						</p>
					`:``
}
					<div class="s-content ">
						${data.content}
					</div>

				</div>
			</div>`;modal.innerHTML=modalHTML;listenToGeneratedModal();};const getModuleData=function(url){return fetch(`${url}index.json`).then((r)=>r.json()).then((d)=>d);};const attachModel=async function(e,moduleUrl){if(e){e.preventDefault();moduleUrl=this.href;}
const data=await getModuleData(moduleUrl);populateModal(data);if(e){history.pushState({inModal:true},data.title,moduleUrl);}else{history.replaceState({inModal:true},data.title,moduleUrl);}
if(!modal.open){showModal();}
ga('send','pageview',location.pathname);};return{setup:setup,};})();;(function(){const closeModal=function(){const body=document.querySelector('html'),modal=document.querySelector('.js-dialog');body.classList.remove('has-modal');modal.removeAttribute('open');const iframe=modal.querySelector('iframe');iframe.src=iframe.src;};const openModal=function(youtubeUrl){const body=document.querySelector('html'),modal=document.querySelector('.js-dialog');body.classList.add('has-modal');modal.querySelector('iframe').src=youtubeUrl;modal.setAttribute('open',null);document.querySelector('.js-dialog-close').addEventListener('click',function(){closeModal();});document.addEventListener('keydown',function(e){if(e.key=='Escape'){closeModal();}});modal.addEventListener('click',function(){closeModal();});};const listenToProjectPopups=function(){const projects=document.querySelectorAll('.js-show-youtube-modal');if(projects.length>0){for(const youtubeURL of projects){youtubeURL.addEventListener('click',function(e){e.preventDefault();const aTag=e.target.closest('.js-show-youtube-modal');openModal(aTag.href);});}}};document.addEventListener('DOMContentLoaded',function(){listenToProjectPopups();});})();;const faqModule=(function(){let faqs=null;const faqIsPresent=function(){return document.querySelector('.js-faqs');};const setAllFaqs=function(faqTitles){faqs=faqTitles;};const closeAllFaqs=function(){for(const f of faqs){f.querySelector('.js-faq-button').classList.remove('is-open');f.nextElementSibling.classList.remove('is-open');}};const enableListener=function(faqTitle){faqTitle.querySelector('.js-faq-button').addEventListener('click',function(){if(this.classList.contains('is-open')){closeAllFaqs();return;}
closeAllFaqs();faqTitle.querySelector('.js-faq-button').classList.add('is-open');faqTitle.nextElementSibling.classList.add('is-open');});};return{faqIsPresent,enableListener,setAllFaqs};})();document.addEventListener('DOMContentLoaded',function(){if(faqModule.faqIsPresent()){const faqs=document.querySelectorAll('.js-faq-title');faqModule.setAllFaqs(faqs);for(const faq of faqs){faqModule.enableListener(faq);}}});