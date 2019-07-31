var persona = {
    nombre: 'Iker',
    apellido: 'Murga',
    saludar: function (saludo = 'Hola') {
        console.log(`${saludo} soy ${this.nombre} ${this.apellido}`);
    }
};

persona.saludar();
console.log();

var personaIncorrecta = {
    saludo: 'Hola',
    saludoLargo: `${this.saludo} ¿qué tal?`
};

console.log(personaIncorrecta.saludo);
console.log(personaIncorrecta.saludoLargo);
