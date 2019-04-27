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

    $('.slider-partners').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    $('#lightgallery').lightGallery();

    $(function() {
        // $(".clickable-active").click(function() {
        //     $(".clickable-active").removeClass("active");
        //     $(this).toggleClass("active")
        // });
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