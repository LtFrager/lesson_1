// alert('test - JavaScript!');
$(document).ready(function() {

    /* UPDATE - JS FILES WAS CHANGED */
    /* OLD FILES USED: 
     https://plugins.jquery.com/parallax/ 
     $(document).ready(function() { $('#scene').parallax(); }); 
    */

    /* NEW FILES USED:
     https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js
     https://cdnjs.cloudflare.com/ajax/libs/parallax/2.1.3/parallax.min.js
    */
    /* NEW DOCUMENT READY USED */

    var scene = document.getElementById('scene');
    var parallax = new Parallax(scene);

    $("#videobg").get(0).play();

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



    function checkForInput(element) {
        // element is passed to the function ^

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