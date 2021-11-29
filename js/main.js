$(function()
{
    $('#enter-btn').click(function(){
        if($('#enter-field').val() == psw)
        {
            $('.background').removeClass("disable");
            $('.login').addClass("disable");
            $('.information').removeClass("disable");
        }
        else
        {
            alert("Введёный пароль неверен. Подсказка: Прозвище лучшего друга (без 'pr') с маленькой буквы");
        }
    });
})