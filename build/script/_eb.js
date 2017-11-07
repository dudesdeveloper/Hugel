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

				$('#index02 .slider-body').slick({
					dots: true,
					arrows: false
				});

				$('#index02 .left').click(function () {
					$('#index02 .slider-body').slick('slickPrev');
				});

				$('#index02 .right').click(function () {
					$('#index02 .slider-body').slick('slickNext');
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