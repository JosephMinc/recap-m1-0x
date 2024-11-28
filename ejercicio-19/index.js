"use strict"

function sumarTresNumeros(num1, num2, num3) {
    return num1 + num2 + num3;  
}


let numero1 = parseFloat(prompt("Introduce el primer número:"));
let numero2 = parseFloat(prompt("Introduce el segundo número:"));
let numero3 = parseFloat(prompt("Introduce el tercer número:"));


let resultado = sumarTresNumeros(numero1, numero2, numero3);
alert("La suma de los tres números es: " + resultado);
