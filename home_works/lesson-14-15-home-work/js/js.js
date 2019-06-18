$(document).ready(function() {
    // menu
    $(".my-open").click(function() {
        $("#navbar").css("width", "100%");
        $(".my-open").css("opacity", "0");
    });


    $(".my-close").click(function() {
        $("#navbar").css("width", "0");
        $(".my-open").css("opacity", "1");
    });

    // slider
    $('.clients-slider').owlCarousel({
        loop: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $('.top-slider').owlCarousel({
        loop: true,
        margin: 10,
        items: 1,
    })


    // gallery
    $(".filter-button").click(function() {
        var value = $(this).attr('data-filter');

        if (value == "all") {
            $('.filter').removeClass('hidden');
            $('.filter').show('');
        } else {
            // $('.filter[filter-item="' + value + '"]').removeClass('hidden');
            // $(".filter").not('.filter[filter-item="' + value + '"]').addClass('hidden');
            $(".filter").not('.' + value).hide('');
            $('.filter').filter('.' + value).show('');

        }
        $(".filter-button").removeClass("active")
        $(this).addClass("active");
    });

});