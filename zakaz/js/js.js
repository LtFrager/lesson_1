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

    $('.mb1').hover(function() {
        $('.block1').css({
            opacity: '1',
        });
    }, function() {
        $('.block1').css({
            opacity: '0',
        });
    });
    $('.mb2').hover(function() {
        $('.block2').css({
            opacity: '1',
        });
    }, function() {
        $('.block2').css({
            opacity: '0',
        });
    });
    $('.mb3').hover(function() {
        $('.block3').css({
            opacity: '1',
        });
    }, function() {
        $('.block3').css({
            opacity: '0',
        });
    });
    $('.mb4').hover(function() {
        $('.block4').css({
            opacity: '1',
        });
    }, function() {
        $('.block4').css({
            opacity: '0',
        });
    });
    $('.mb5').hover(function() {
        $('.block5').css({
            opacity: '1',
        });
    }, function() {
        $('.block5').css({
            opacity: '0',
        });
    });
    $('.mb6').hover(function() {
        $('.block6').css({
            opacity: '1',
        });
    }, function() {
        $('.block6').css({
            opacity: '0',
        });
    });
});