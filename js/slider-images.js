let n_images = 4; //Agregar numero de imagenes correspondientes
let array_images = [];
//Crear elemento

for (let index = 0; index < n_images; index++) {
    array_images[index] = `img/fond${index+1}.jpg`
    console.log(array_images[index]);
}

let li = document.createElement("li");
let img = document.createElement("img");
const ul_slider = document.getElementById("slider");

// array_images.forEach(element => {

// });

ul_slider.appendChild(li);
li.appendChild(img);
img.setAttribute("style", "max-width: 100%");
img.setAttribute("src", array_images[0]);
ul_slider.appendChild(li);