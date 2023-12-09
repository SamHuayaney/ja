function elegirCamiseta(numero) {
    var opcionAnterior = localStorage.getItem('opcion_camiseta');
    if (opcionAnterior === null) {
        alert("Has elegido la camiseta número: " + numero);
        localStorage.setItem('opcion_camiseta', numero);
    } else if (opcionAnterior === numero.toString()) {
        alert("Ya has seleccionado esta camiseta.");
    } else {
        var confirmarCambiar = confirm("Ya has seleccionado otra camiseta. ¿Deseas cambiar a la camiseta número " + numero + "?");
        if (confirmarCambiar) {
            localStorage.setItem('opcion_camiseta', numero);
            alert("Has cambiado la selección a la camiseta número: " + numero);
        } else {
            alert("Manteniendo la selección actual.");
        }
    }
}

window.onload = function() {
    var opcionGuardada = localStorage.getItem('opcion_camiseta');
    if (opcionGuardada !== null) {
        alert("Ya habías elegido la camiseta número: " + opcionGuardada);
}
}
