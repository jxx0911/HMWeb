$('#burguer').click(function() {
    $(this).toggleClass('click');
    $('.nav-resp').toggleClass('show');
});

$('.serv-resp').click(function() {
    $('nav ul .serv-show').toggleClass('show');
    $('nav ul .first').toggleClass('rotate');
});

$('.sede-resp').click(function() {
    $('nav ul .sede-show').toggleClass('show1');
    $('nav ul .second').toggleClass('rotate');
});

$('nav ul li').click(function() {
    $(this).addClass('active').siblings().removeClass('active');
});