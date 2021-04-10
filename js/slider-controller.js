// $(document).ready(function() {
//     let imgItems = $('.slider li').length; //cuenta el numero de valores que existen del elemento
//     let imgPos = 1;

//     //agregamos paginacion
//     for (let index = 1; index <= imgItems; index++) {
//         $('.pagination').append('<li><span class="fa fa-circle"></span></li>');
//     }

//     $('.slider li').hide(); // ocultamos los slides
//     $('.slider li:first').show(); //mostramos el primer slide
//     $('.pagination li:first').css({ 'color': '#234187' }); //damos estilo al primer item de la paginatcion

//     //ejectuamos funciones
//     $('.pagination li').click(pagination);
//     $('.right span').click(nextSlider);
//     $('.left span').click(prevSlider);

//     // setInterval(function() {
//     //     nextSlider();
//     // }, 10000);

//     //--------------------------------------------------------------------------------------

//     function pagination() {
//         let paginationPos = $(this).index() + 1; //la posicion del elemento

//         $('.slider li').hide();
//         $('.slider li:nth-child(' + paginationPos + ')').fadeIn();

//         $('.pagination li').css({ 'color': '#fff' });
//         $(this).css({ 'color': '#234187' });

//         imgPos = paginationPos;
//     }

//     function nextSlider() {
//         if (imgPos >= imgItems) {
//             imgPos = 1
//         } else {
//             imgPos++;
//         }

//         $('.pagination li').css({ 'color': '#fff' });
//         $('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#234187' });

//         $('.slider li').hide();
//         $('.slider li:nth-child(' + imgPos + ')').fadeIn();
//     }

//     function prevSlider() {
//         if (imgPos <= 1) {
//             imgPos = imgItems;
//         } else {
//             imgPos--;
//         }

//         $('.pagination li').css({ 'color': '#fff' });
//         $('.pagination li:nth-child(' + imgPos + ')').css({ 'color': '#234187' });

//         $('.slider li').hide();
//         $('.slider li:nth-child(' + imgPos + ')').fadeIn();
//     }
// });

const slider = document.querySelector("#slider");
let sliderSection = document.querySelectorAll(".slider__section");
let sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-left");
const btnRight = document.querySelector("#btn-right");


// console.log(sliderSectionLast);
slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function next() {
    let sliderSectionFirst = document.querySelectorAll(".slider__section")[0];
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-100%";
    }, 500);
}

function prev() {
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function() {
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-100%";
    }, 500);
}

btnRight.addEventListener('click', function() {
    next();
})

btnLeft.addEventListener('click', function() {
    prev();
})

// setInterval(function() {
//     next();
// }, 8000);