// alert('test - JavaScript!');
$(document).ready(function() {
    $(function() {
        $("#NE").click(function() {
            $('.style-change').removeClass("ne-style human-style orc-style undead-style");
            $('.style-change').addClass("ne-style");
            $('.style-change-btn').removeClass("active");
            $(this).addClass("active");
        });
    });
    $(function() {
        $("#Human").click(function() {
            $('.style-change').removeClass("ne-style human-style orc-style undead-style");
            $('.style-change').addClass("human-style");
            $('.style-change-btn').removeClass("active");
            $(this).addClass("active");
        });
    });
    $(function() {
        $("#Orc").click(function() {
            $('.style-change').removeClass("ne-style human-style orc-style undead-style");
            $('.style-change').addClass("orc-style");
            $('.style-change-btn').removeClass("active");
            $(this).addClass("active");
        });
    });
    $(function() {
        $("#Undead").click(function() {
            $('.style-change').removeClass("ne-style Human-style orc-style undead-style");
            $('.style-change').addClass("undead-style");
            $('.style-change-btn').removeClass("active");
            $(this).addClass("active");
        });
    });
});