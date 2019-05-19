$(document).ready(function() {
    // Параллакс
    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    // Видео
    $("#videobg").get(0).play();

    // Модальное окно
    $(".modal-trigger").click(function(e) {
        e.preventDefault();
        dataModal = $(this).attr("data-modal");
        $("#" + dataModal).css({ "display": "block" });
        // $("body").css({ "overflow-y": "hidden" }); //Prevent double scrollbar.
    });
    $(".close-modal, .modal-sandbox").click(function() {
        $(".modal").css({ "display": "none" });
        // $("body").css({ "overflow-y": "auto" }); //Prevent double scrollbar.
    });

    // Стили для формы
    function checkForInput(element) {
        const $label = $(element).siblings('label');
        if ($(element).val().length > 0) {
            $label.addClass('input-has-value');
        } else {
            $label.removeClass('input-has-value');
        }
    }
    // The lines below are executed on page load
    $('.input_group input, .input_group textarea').each(function() {
        checkForInput(this);
    });
    // The lines below (inside) are executed on change & keyup
    $('.input_group input, .input_group textarea').on('change keyup', function() {
        checkForInput(this);
    });
});