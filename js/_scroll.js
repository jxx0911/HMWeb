let ubicacionPrincipal = window.pageYOffset;
window.onscroll = function() {
    let desplazamiento = window.pageYOffset;
    if (ubicacionPrincipal >= desplazamiento) {
        document.getElementById("header").style.top = '0';
        document.getElementById("header").style.backgroundColor = '#fff';
        document.getElementById("header").style.transition = '.5s';
    } else {
        document.getElementById('header').style.top = '-103px';
    }
    ubicacionPrincipal = desplazamiento;
}