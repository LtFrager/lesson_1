$(document).ready(function() {
    $('.slider-nav').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        draggable: false,
    });

    $('a[data-slide]').click(function(e) {
        e.preventDefault();
        var slideno = $(this).data('slide');
        $('.slider-nav').slick('slickGoTo', slideno - 1);
        $('.tab-nav-item a').removeClass('active');
        $(this).addClass('active');
    });


    $('.slider-clients').slick({
        slidesToShow: 7,
        slidesToScroll: 3,
        dots: false,
        arrows: false,
        variableWidth: true,
        // infinite: true,
        autoplay: true,
        // draggable: false,

        responsive: [{
                breakpoint: 1264,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".my-open").click(function() {
        $(".nav-list").addClass('opened');
        $(".my-open").css("opacity", "0");
    });


    $(".my-close").click(function() {
        $(".nav-list").removeClass('opened');
        $(".my-open").css("opacity", "1");
    });
});