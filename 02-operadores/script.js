let primero = 12;
let segundo = 5;

console.log(`primero tiene valor ${primero}`);
console.log(`segundo tiene valor ${segundo}`);
console.log();

console.log("primero + segundo = " + (primero + segundo));
console.log('primero - segundo = ' + (primero - segundo));
console.log(`primero * segundo = ${primero * segundo}`);
console.log(`primero / segundo = ${primero / segundo}`);
console.log(`primero % segundo = ${primero % segundo}`);
console.log();

primero++;
console.log(`primero después de ++ : ${primero}`);
primero--;
console.log(`primero después de -- : ${primero}`);
console.log();

primero += 2;
console.log(`primero después de +=2 : ${primero}`);
console.log();

console.log(`primero == segundo = ${primero == segundo}`);
console.log(`primero != segundo = ${primero != segundo}`);
console.log(`primero > segundo = ${primero > segundo}`);
console.log(`primero < segundo = ${primero < segundo}`);
console.log(`primero >= segundo = ${primero >= segundo}`);
console.log(`primero <= segundo = ${primero <= segundo}`);
console.log();

let valorEnTexto = "4";
let valorNumerico = 4;
console.log(`valorEnTexto == valorNumerico = ${valorEnTexto == valorNumerico}`);
console.log(`valorEnTexto === valorNumerico = ${valorEnTexto === valorNumerico}`);
console.log(`valorEnTexto != valorNumerico = ${valorEnTexto != valorNumerico}`);
console.log(`valorEnTexto !== valorNumerico = ${valorEnTexto !== valorNumerico}`);
console.log();

let bool1 = true;
let bool2 = false;
console.log(`Valor de bool1 = ${bool1}`);
console.log(`Valor de bool2 = ${bool2}`);
console.log(`bool1 && bool2 = ${bool1 && bool2}`);
console.log(`bool1 || bool2 = ${bool1 || bool2}`);
console.log(`!bool1 = ${!bool1}`);
console.log(`!bool2 = ${!bool2}`);