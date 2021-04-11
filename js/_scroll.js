let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let desplazamiento = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamiento) {
        document.getElementById("barra").style.top = '0';
        document.getElementById("barra").style.backgroundColor = '#fff';
        document.getElementById("barra").style.transition = 'top .4s';
    } else {
        document.getElementById('barra').style.top = '-100%';
    }
    ubicacionPrincipal = desplazamiento;
}