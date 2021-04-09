let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let desplazamiento = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamiento) {
        document.getElementById("header").style.top = '0';
        document.getElementById("header").style.backgroundColor = '#fff';
        document.getElementById("header").style.transition = 'top .4s';
    } else {
        document.getElementById('header').style.top = '-100%';
    }
    ubicacionPrincipal = desplazamiento;
}