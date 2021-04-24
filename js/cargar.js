$(document).ready(function() {
    function up() {
        $(window).scrollTop(0);
    }
    // nosotros
    $('#btnNosotros').click(function() {
        up();
        $('#main').load('../views/nosotros.html');
    });
    //     Servicios Generales
    $('#btnSG').click(function() {
        up();
        $('#main').load('../views/serviciosGenerales.html');

    });
    //     Salud Ocupacional
    $('#btnSO').click(function() {
        up();
        $('#main').load('../views/saludOcupacional.html');
    });
    //     laboratorio
    $('#btnLab').click(function() {
        up();
        $('#main').load('../views/laboratorio.html');
    });
    //     sede Pierola
    $('#btnPierola').click(function() {
        up();
        $('#main').load('../views/sedes/sedePierola.html');
    });
    //     sede Sto. Dominguito
    $('#btnSD').click(function() {
        up();
        $('#main').load('../views/sedes/sedeStoDominguito.html');
    });
    //     sede Huamachuco
    $('#btnH').click(function() {
        up();
        $('#main').load('../views/sedes/sedeHuamachuco.html');
    });
    //     sede Huancayo
    $('#btnHy').click(function() {
        up();
        $('#main').load('../views/sedes/sedeHuancayo.html');
    });
})