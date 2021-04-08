let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let desplazamiento = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamiento) {
        document.getElementById("header").style.top = '0';
        document.getElementById("header").style.backgroundColor = '#fff';
        document.getElementById("header").style.transition = 'margin-top .3s';
        document.getElementById("header").style.transition = 'top .3s';
    } else {
        document.getElementById('header').style.top = '-100%';
    }
    ubicacionPrincipal = desplazamiento;
}