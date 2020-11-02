let mySwiper = new Swiper('.swiper-container', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 15,
	navigation: {
    nextEl: '.slider-arrow-right',
    prevEl: '.slider-arrow',
  	},
	
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

	document.getElementById('modal-back').onclick = function() {
    	$('.prompt-form-container').hide();
    	$('.cover-div').hide();
    };
    document.getElementById('call-button').onclick = function() {
    	$('.prompt-form-container').show("slow");
    	$('.cover-div').show("slow");
    };
	
	document.getElementById('second-bottom-section-btn').onclick = function() {
    	$('.prompt-form-container').show("slow");
    	$('.cover-div').show("slow");
    };
	
	document.getElementById('call-button__link').onclick = function() {
    	$('.prompt-form-container').show("slow");
    	$('.cover-div').show("slow");
    };
document.getElementById('modal-ok').onclick = function() {
	var name = $(".name").val();
	if (name.length < 3)
	{
		$('.name').css('border-color', 'red');
		return false;
	}
		
	var phone = $(".phone").val(),
		intRegex = /[0-9 -()+]+$/;
	if((phone.length < 6) || (!intRegex.test(phone)))
	{
		$('.phone').css('border-color', 'red');
		return false;
	}
	var email = $(".email").val(),
		emailReg = /^([w-.]+@([w-]+.)+[w-]{2,4})?$/;
	if(!emailReg.test(email) || email == '')
	{
		$('.email').css('border-color', 'red');
		return false;
	}
};