var main = function() {
    		
	$('#alert').delay(2000).slideDown(500).delay(6000).slideUp(1000);
		
    $('#hamburger-icon').click(function() {
        $('#menu').animate({left: '0'}, 250);   
        $('#header').animate({left: '100vw'}, 250);
    });
    
    $('#close, #close-menu').click(function() {
        $('#menu').animate({left: '-100vw'}, 250);
        $('#header').animate({left: '0'}, 250);
    });

	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('#scrollToTop').fadeIn();
		} else {
			$('#scrollToTop').fadeOut();
		}
	});

	/* setInterval(function() {
		var fullDate = new Date()
		//Thu May 19 2011 17:25:38 GMT+1000 {}
		//convert month to 2 digits
		var twoDigitMonth = ('0'+ (fullDate.getMonth()+1)).slice(-2);
		var currentDate = fullDate.getDate() + '/' + twoDigitMonth + '/' + fullDate.getFullYear();
		$('#copyright').text(currentDate);
	}, 5000); */

	var fullDate = new Date()
	//Thu May 19 2011 17:25:38 GMT+1000 {}
	//convert month to 2 digits
	var twoDigitMonth = ('0'+ (fullDate.getMonth()+1)).slice(-2);
	var currentDate = fullDate.getDate() + '/' + twoDigitMonth + '/' + fullDate.getFullYear();
	$('#copyright').append(currentDate);
	
	$('#scrollToTop').click(function() {
		$('html, body').animate({scrollTop : 0}, 800);
	});
	
    if($(window).width() > 768) {
		$('.link').mouseenter(function() {
			$(this).css({'background-color': 'rgba(255, 255, 255, .9)', 'border-radius': '10px'});
			$(this).children().css('color', 'rgba(5, 5, 5, .9)');
		}).mouseleave(function() {
			$(this).css('background-color', 'transparent');
			$(this).children().css('color', 'rgba(255, 255, 255, .9)');
		});
	}

	$('.cover').on('tap', function() {
		$(this).toggleClass('hover');
	});

	/* $('.overlay').on('touchend', function() {
		$(this).toggleClass("hover");
	}); */

	$('.cover').mouseenter(function() {
		$(this).addClass('hover');
	}).mouseleave(function() {
		$(this).removeClass('hover');
	});

};

$(document).ready(main);