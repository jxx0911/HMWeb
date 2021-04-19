$('document').ready(function() {
    window.sr = ScrollReveal();

    sr.reveal('.contacto-contenido', {
        duration: 2000,
        origin: 'right',
        distance: '-100px'
    });
});

$(function() {
    $('#noticias').load('../views/noticias.html');
    $('#menu2').load('../views/menu2.html');
    $('#nosotros').load('../views/nosotros.html');
    $('#servicios').load('../views/servicios.html');
});