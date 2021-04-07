/* Respetar patron del nombre al añadir nueva imagen*/

let n_images = 5; //Agregar numero de imagenes correspondientes
let _images = [];
let _li = [];
let _img = [];
const ul_slider = document.getElementById("slider");

//Se añaden etiquetas a los arreglos de las variables
for (let index = 0; index < n_images; index++) {
    _images[index] = `img/slider/fond${index+1}.jpg`
    _li[index] = document.createElement("li");
    _img[index] = document.createElement("img");
    console.log(_images[index]);
    console.log(_li[index]);
    console.log(_img[index]);
}

//Se crean los elementos en el DOM
for (let index = 0; index < n_images; index++) {
    ul_slider.appendChild(_li[index]);
    _li[index].appendChild(_img[index]);
    _img[index].setAttribute("style", "max-width: 100%");
    _img[index].setAttribute("src", _images[index]);
    ul_slider.appendChild(_li[index]);
}