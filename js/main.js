$(document).ready(function () {
	/*--- SEARCH ---*/
	$('#button_search').click(function(e){
		var search = $(this).parent();
		search.toggleClass("show");
	});
	/*--- HEADLINE SLICK ---*/
	$('.ihk-headline__slide').slick({
		arrows: false,
		dots: false,
		slidesToShow: 1
	});
	/*--- GALLERY SLICK ---*/
	$('.gallery-main').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.gallery-nav'
	});
	$('.gallery-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.gallery-main',
		centerMode: true,
		focusOnSelect: true,
		centerPadding: '0',
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				centerMode: true,
				slidesToShow: 3
			  }
			},
		]
	});
	/*--- PUBLICATION SLICK ---*/
	$('.ihk-publication__slide').slick({
		dots: false,
		slidesToShow: 1
	});
});