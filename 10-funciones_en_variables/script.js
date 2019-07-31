let amigo = false;

let saludar = function decirHola() {
    console.log("Hola");
};

if(amigo) {
    saludar = function decirQueTal() {
        console.log("Qué tal");
    }
}

saludar();