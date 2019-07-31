let persona = {
    nombre: "Iker",
    edad: 39,
    saludar: function() {
        console.log('Hola');
    },
    repetirSaludo: function(veces) {
        for(let i = 0; i < veces; i++) {
            console.log('Hola');
        }
    },
    mascota: {
        nombre: "Milú",
        edad: 7
    }
};

console.log(persona.nombre);
console.log(persona.edad);
console.log();
console.log(persona.mascota.nombre);
console.log(persona.mascota.edad);
console.log();
persona.saludar();
console.log();
persona.repetirSaludo(3);