$(document).ready(function() {
    autosize(document.querySelectorAll('textarea'));

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