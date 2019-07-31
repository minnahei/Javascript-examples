let listaNumeros = [2, 4, 15, 16, 23, 42];

console.log(listaNumeros[3]);
console.log();

for(let i = 0; i < listaNumeros.length; i++) {
    console.log(listaNumeros[i]);
}
console.log();

listaNumeros.forEach(function(numero){
    console.log(numero);
});