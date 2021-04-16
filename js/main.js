$('document').ready(function() {
    $(window).scrollTop(0);
});

$(function() {
    $('#header').load('../views/header.html');
    $('#noticias').load('../views/noticias.html');
    $('#menu2').load('../views/menu2.html');
    $('#nosotros').load('../views/nosotros.html');
    $('#servicios').load('../views/servicios.html');
    $('#contacto').load('../views/contacto.html');
    $('#footer').load('../views/footer.html');
});