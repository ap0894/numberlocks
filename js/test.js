$(function () {
    var navOpts = {
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-for',
	  dots: true,
	  arrows: true,
	  centerMode: true,
	  centerPadding: '60px',
	  focusOnSelect: true
    };
    
     var navForOpts = {
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-nav'
    };
    
    var singleOpts = {
	  dots: true,
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  arrows: true,
	  fade: false
    };

    // Init the slick    
    $('.slider-nav').slick(navOpts);
    $('.slider-for').slick(navForOpts);
    $('.single-item').slick(singleOpts);
});