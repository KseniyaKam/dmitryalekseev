const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper(slider, {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	
	breakpoints:  {
		320: {
			slidesPerView: 1,
			spaceBetween: 20,
	    },
	    800: {
			slidesPerView: 2,
			spaceBetween: 30,
	    },
	    1100: {
			slidesPerView: 3,
			spaceBetween: 40,
	    }
	}
});


	var menuButton = $('.menu-icon');
	var menu = $('.header-link');

	menuButton.click(function() {
		menu.slideToggle();
		menu.css({'display':'grid',
				'position':'absolute',
				'top':'80px',
				'z-index':'3',
				'background-color':'white'});
	})
	