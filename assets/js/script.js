$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slider-nav',
    swipe: false,
    infinity: true,
    responsive: [
        {
            breakpoint: 1152,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
            }
        }
    ]
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    swipe: false,
    // infinity: true,
    responsive: [
        {
            breakpoint: 1152,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                // infinite: true,
                // dots: true
            }
        }
    ]
});