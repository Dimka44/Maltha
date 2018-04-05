$(function(){
    $('.menu-open').click(function() {
        $('.menu').addClass('d-block');
        $('.close').addClass('d-block')
    });

    $('.close').click(function() {
        $('.menu').removeClass('d-block');
        $('.close').removeClass('d-block');
    })
});