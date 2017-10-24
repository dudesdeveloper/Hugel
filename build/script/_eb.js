const EB = {

	init: function() {

		EB.Slider.init();
		EB.Test.init();

	},

	Slider: {

		init: function() {

			$(document).ready(function(){

				$('.head-slider .slider-body').slick({
					dots: false,
					arrows: false
				});

				$('.head-slider .left').click(function () {
					$('.head-slider .slider-body').slick('slickPrev');
				});

				$('.head-slider .right').click(function () {
					$('.head-slider .slider-body').slick('slickNext');
				});

			});

		}

	},

	Test: {

		init: function() {



		}

	}

};

EB.init();