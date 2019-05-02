/* Article FructCode.com */
$(document).ready(function() {
    $("#btn").click(

        function() {
            sendAjaxForm('result_form', 'ajax_form', 'action_ajax_form.php');
            return false;
        }
    );
});

function sendAjaxForm(result_form, ajax_form, url) {
    $.ajax({
        url: url, //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#" + ajax_form).serialize(), // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
            result = $.parseJSON(response);
            $('#result_form').html(
                '<p class="result_text"><span>Имя</span><span>' + result.name + '</span></p>' +
                '<p class="result_text"><span>Телефон</span><span>' + result.phone + '</span></p>' +
                '<p class="result_text"><span>E-mail</span><span>' + result.email + '</span></p>' +
                '<p class="result_text"><span>Cообщение</span><span>' + result.message + '</span></p>' +
                // '<br>image: ' + result.image
                '<p class="result_text"><span>Выбранный герой</span><span>' + result.select + '</span></p>' +
                '<p class="result_text"><span>Выбранный radio button</span><span>' + result.myradio + '</span></p>'
            );
        },
        error: function(response) { // Данные не отправлены
            $('#result_form').html('Ошибка. Данные не отправлены.');
        }
    });
}