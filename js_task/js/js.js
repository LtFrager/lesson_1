// alert('test - JavaScript!');
$(document).ready(function() {

    myFunction()

    function myFunction() {
        var txt;
        var q = confirm("Вам уже есть 18?");
        if (q == true) {
            txt = "Добро пожаловать";
        } else {
            close()
        }
        document.getElementById("demo").innerHTML = txt;
    }

});

// 1) вывести экран prompt, Вам есть 18 лет? если нет то не 
// пускаешь если есть выводишь текст Привет в документе и пропускаешь