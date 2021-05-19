$(document).ready(function () {
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
		focusOnSelect: true
	});
	/*--- PUBLICATION SLICK ---*/
	$('.ihk-publication__slide').slick({
		dots: false,
		slidesToShow: 1
	});
});