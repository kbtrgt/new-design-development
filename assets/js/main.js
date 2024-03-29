/* Go Top Button Start */
var goTopButton1 = $('#goTpButton');
$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        goTopButton1.addClass('show-active');
    } else {
        goTopButton1.removeClass('show-active');
    }
});

goTopButton1.bind('click', function () {
    $('html, body').scrollTop(0);
});
/* Go Top Button End */
$('.owl-home-doctor').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

 