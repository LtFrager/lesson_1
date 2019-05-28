// alert('test - JavaScript!');
$(document).ready(function() {
    $('.MyImageBox').mouseenter(function() {
        $('.MyImageBox').mousemove(function(e) {
            var pos = $(this).offset();
            var Xinner = e.pageX - pos.left;
            var Yinner = e.pageY - pos.top;
            $(".MyImage").css("transform", "translate(" + Xinner / 100 + "%, " + Yinner / 100 + "%) scale(1.20)")
        });
    });
    $('.MyImageBox').mouseleave(function() {
        $(".MyImage").css("transform", "scale(1)")
    });
});