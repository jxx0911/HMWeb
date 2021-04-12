const burguer = document.querySelector('.burguer');
let navegacion = document.querySelector('.navegacion');
const barras = document.querySelectorAll('.burguer span');

burguer.addEventListener('click', () => {
    navegacion.classList.toggle('activado');
    barras.forEach(child => { child.classList.toggle('animado') });
})