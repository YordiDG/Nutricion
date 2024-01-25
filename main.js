function moverRecetas(direccion) {
    var filaRecetas = document.getElementById("filaRecetas");
    var recetas = filaRecetas.getElementsByClassName("receta");

    var recetasVisibles = 4;
    var recetasOcultas = recetas.length - recetasVisibles;

    if (direccion === -1) {
        var recetaVisible = filaRecetas.getElementsByClassName("receta")[0];
        var recetaOculta = filaRecetas.getElementsByClassName("hidden")[recetasVisibles - 1];

        if (recetaVisible && recetaOculta) {
            recetaVisible.classList.add("hidden");
            recetaOculta.classList.remove("hidden");
        }
    } else if (direccion === 1) {
        var recetaVisible = filaRecetas.getElementsByClassName("receta")[recetasVisibles - 1];
        var recetaOculta = filaRecetas.getElementsByClassName("hidden")[0];

        if (recetaVisible && recetaOculta) {
            recetaVisible.classList.add("hidden");
            recetaOculta.classList.remove("hidden");
        }
    }
}