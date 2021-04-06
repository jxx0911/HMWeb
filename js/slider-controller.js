$(document).ready(function() {
    let imgItems = $('.slider li').length; //cuenta el numero de valores que existen del elemento
    let imgPos = 1;

    //agregamos paginacion
    for (let index = 1; index <= imgItems; index++) {
        $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
    }

    $('.slider li').hide(); // ocultamos los slides
    $('.slider li:first').show(); //mostramos el primer slide
    $('.pagination li:first').css({ 'color': '#234187' }); //damos estilo al primer item de la paginatcion

    //ejectuamos funciones
    $('.pagination li').click(pagination);
    $('.right span').click(nextSlider);
    $('.left span').click(prevSlider);

    setInterval(function() {
        nextSlider();
    }, 10000);

    //--------------------------------------------------------------------------------------

    function pagination() {
        let paginationPos = $(this).index() + 1; //la posicion del elemento

        $('.slider li').hide();
        $('.slider li:nth-child(' + paginationPos + ')').fadeIn();

        $('.pagination li').css({ 'color': '#fff' });
        $(this).css({ 'color': '#234187' });

        imgPos = paginationPos;
    }

    function nextSlider() {
        if (imgPos >= imgItems) {
            imgPos = 1
        } else {
            imgPos++;
        }

        $('.pagination li').css({ 'color': '#fff' });
        $('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#234187' });

        $('.slider li').hide();
        $('.slider li:nth-child(' + imgPos + ')').fadeIn();
    }

    function prevSlider() {
        if (imgPos <= 1) {
            imgPos = imgItems;
        } else {
            imgPos--;
        }

        $('.pagination li').css({ 'color': '#fff' });
        $('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#234187' });

        $('.slider li').hide();
        $('.slider li:nth-child(' + imgPos + ')').fadeIn();
    }
});