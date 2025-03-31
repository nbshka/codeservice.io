function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}
setTimeout(function(){
	document.body.classList.add('body_visible');
}, 200);
AOS.init();