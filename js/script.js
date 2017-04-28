$(document).ready(function () {
	var speed = 500; 			//fade speed
	var autoSwitch = true;		//auto Slider Option
	var autoSwitchSpeed = 4000; //auto slider speed option


	//add initial active class
	$('.slide').first().addClass('active');

	//hide all slides
	$('.slide').hide();

	//show first slide
	$('.active').show();

	//next 
	$('#next').on('click', nextSlide);

	//prev
	$('#prev').on('click', prevSlide);

	//auto slide
	if (autoSwitch) {
		setInterval(nextSlide, autoSwitchSpeed);
	}

	function nextSlide() {
			$('.active').removeClass('active').addClass('oldActive');
			if ($('.oldActive').is(':last-child')) {
				$('.slide').first().addClass('active');
			}else{
				$('.oldActive').next().addClass('active');
			}
			$('.oldActive').removeClass('oldActive');
			$('.slide').fadeOut(speed);
			$('.active').fadeIn(speed);
	}

	function prevSlide() {
		$('.active').removeClass('active').addClass('oldActive');
		if ($('.oldActive').is(':first-child')) {
			$('.slide').last().addClass('active');
		}else {
			$('.oldActive').prev().addClass('active');
		}

		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});