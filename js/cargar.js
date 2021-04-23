$(document).ready(function() {
    // nosotros
    $('#btnNosotros').click(function() {
        $('#main').load('../views/nosotros.html');
    });
    //     Servicios Generales
    $('#btnSG').click(function() {
        $('#main').load('../views/serviciosGenerales.html');
    });
    //     Salud Ocupacional
    $('#btnSO').click(function() {
        $('#main').load('../views/saludOcupacional.html');
    });
    //     laboratorio
    $('#btnLab').click(function() {
        $('#main').load('../views/laboratorio.html');
    });
    //     sede Pierola
    $('#btnPierola').click(function() {
        $('#main').load('../views/sedes/sedePierola.html');
    });
    //     sede Sto. Dominguito
    $('#btnSD').click(function() {
        $('#main').load('../views/sedes/sedeStoDominguito.html');
    });
    //     sede Huamachuco
    $('#btnH').click(function() {
        $('#main').load('../views/sedes/sedeHuamachuco.html');
    });
    //     sede Huancayo
    $('#btnHy').click(function() {
        $('#main').load('../views/sedes/sedeHuancayo.html');
    });
})