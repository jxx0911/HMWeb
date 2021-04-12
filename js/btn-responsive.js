const burguer = document.querySelector('.burguer');
let navegacion = document.querySelector('.navegacion');

burguer.addEventListener('click', () => {
    navegacion.classList.toggle('activado');
})