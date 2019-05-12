$(document).ready(function() {
    $("#disableSound").click(function() {
        $("#ne-audio").get(0).pause();
        $("#human-audio").get(0).pause();
        $("#orc-audio").get(0).pause();
        $("#undead-audio").get(0).pause();
    });

    $(function() {
        $("#NE").click(function() {
            $('.style-change').removeClass("ne-style human-style orc-style undead-style");
            $('.style-change').addClass("ne-style");
            $('.style-change-btn').removeClass("active");
            $(this).addClass("active");

            $(function() {
                $("#disableSound").click();
                $("#ne-audio").get(0).play();
            });
        });
    });
    $(function() {
        $("#Human").click(function() {
            $('.style-change').removeClass("ne-style human-style orc-style undead-style");
            $('.style-change').addClass("human-style");
            $('.style-change-btn').removeClass("active");
            $(this).addClass("active");

            $(function() {
                $("#disableSound").click();
                $("#human-audio").get(0).play();
            });

        });
    });
    $(function() {
        $("#Orc").click(function() {
            $('.style-change').removeClass("ne-style human-style orc-style undead-style");
            $('.style-change').addClass("orc-style");
            $('.style-change-btn').removeClass("active");
            $(this).addClass("active");

            $(function() {
                $("#disableSound").click();
                $("#orc-audio").get(0).play();
            });
        });
    });
    $(function() {
        $("#Undead").click(function() {
            $('.style-change').removeClass("ne-style Human-style orc-style undead-style");
            $('.style-change').addClass("undead-style");
            $('.style-change-btn').removeClass("active");
            $(this).addClass("active");

            $(function() {
                $("#disableSound").click();
                $("#undead-audio").get(0).play();
            });
        });
    });
});