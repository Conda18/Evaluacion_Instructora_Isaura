//Elabore un algoritmo que calcule el sueldo anual de un empleado, 
//teniendo presente que este recibe una bonificación fija mensual.

let sueldo_mensual = 3000;
let bonificación = 200;

let bonificación_anual = bonificación * 12
let sueldo_anual = sueldo_mensual * 12;

let total = sueldo_anual + bonificación_anual;

console.log("Su sueldo anual con bofinicacion es de: " + total);