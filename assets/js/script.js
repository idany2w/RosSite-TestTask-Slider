function images(){
	let isMobile = document.documentElement.clientWidth < 768,
		elems,selector;

	if(isMobile){
		selector = 'data-bg-mobile-image';
		elems = document.querySelectorAll('['+selector+']');
	} else{
		selector = 'data-bg-image';
		elems = document.querySelectorAll('['+selector+']');
	};

	for(let elem of elems){
		let src = elem.getAttribute(selector);

		if(src) elem.style.backgroundImage = 'url("'+src+'")';
	};
		
}

document.addEventListener('DOMContentLoaded', images);
window.addEventListener('resize', images);

document.addEventListener('click', function(e){
	let btn = e.target;

	if(btn.closest('.myslider-preloader')){
		btn.parentElement.remove()
	}
})