window.addEventListener("scroll", () => {
    let barra = document.querySelector("#barra");
    barra.classList.toggle("sticky", window.scrollY > 0);
});