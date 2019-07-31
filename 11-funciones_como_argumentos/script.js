function sumarDos(a) {
    return a + 2;
}

function mostrarResultado(valor, operacion) {
    console.log(operacion(valor));
}

mostrarResultado(3, sumarDos);