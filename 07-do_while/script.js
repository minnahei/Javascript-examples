let number;

do {
    number = prompt('Introduce un número positivo');
} while(number <= 0 || isNaN(number));

alert(`El número introducido es ${number}`);