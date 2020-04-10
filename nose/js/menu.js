let ubicacionPrincipal = window.pageYOffset;

window.addEventListener("scroll", function () {
    let desplazamientoActual = window.pageYOffset;

    if (screen.width <= 600) {
        if (ubicacionPrincipal >= desplazamientoActual) {

            document.getElementsByClassName("nav-bo")[0].style.bottom = "0px";
        } else {
            document.getElementsByClassName("nav-bo")[0].style.bottom = "-100px";
        }
    }

    var ancho = (window.innerWidth);
    if (ancho <= 600) {
        if (ubicacionPrincipal >= desplazamientoActual) {

            document.getElementsByClassName("nav-bo")[0].style.bottom = "0px";
        } else {
            document.getElementsByClassName("nav-bo")[0].style.bottom = "-100px";
        }
    }
    ubicacionPrincipal = desplazamientoActual;
})
