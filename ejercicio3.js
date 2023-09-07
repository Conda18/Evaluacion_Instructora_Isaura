//Realiza un algoritmo que calcule el factorial de un número.

let numero = 27;
let facto = 0;

for(let i = 1 ; i < numero; i++){
    for( n = 0 ; n < i++; n++){
        facto += i * n;
    }
}
console.log("la factorial es: " + facto);