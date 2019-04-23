// alert('test - JavaScript!');
// $(document).ready(function() {
//     console.log("ready!");
//     alert('test - JQuery');
// });

$(document).ready(function($) {
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
    });
});