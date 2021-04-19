const sedes = document.querySelector('#sedes');
let div = document.createElement('div');
const sedesContainer = document.querySelector('#sedes-container');
const trujillo = document.querySelector('#trujillo');
let sedeHTML = `
    <div id="sedes-container" class="sedes-container">
    <div class="sedesTop">
        <div class="sedes-img"></div>
        <div class="sedes-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9394.457609074794!2d-79.01473170421967!3d-8.113408003249504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad162cc143c42b%3A0x76533cae423b57ac!2sPOLICLINICO%20HORIZONTE%20MEDIC!5e0!3m2!1ses-419!2spe!4v1618675336097!5m2!1ses-419!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
        </div>
    </div>
    <div class="sedesBot">
        <div class="sede-tlf">
            <h3>Telefono</h3>
            <p id="s-m"><i class="fas fa-mobile-alt"></i>999444222</p>
        </div>
        <div class="sede-correo">
            <h3>Correo</h3>
            <p id="s-c"><i class="far fa-envelope"></i>hm2@gmail.com</p>
        </div>
        <div class="sede-dir">
            <h3>Direccion</h3>
            <p id="s-d"><i class="fas fa-map-marker-alt"></i>ABCD 1234</p>
        </div>
    </div>
    </div>
`;

document.getElementById('huamachuco').addEventListener('click', () => {
    sedes.removeChild(sedesContainer);
    sedes.innerHTML = sedeHTML;
});