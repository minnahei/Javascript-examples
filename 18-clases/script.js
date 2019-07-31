class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola me llamo ${this.nombre} y tengo ${this.edad} años.`);
    }
}

let persona = new Persona('Iker', 39);
persona.saludar();