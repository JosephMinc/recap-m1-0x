"use strict"


let a = parseInt(prompt("Introduce el valor de a = 5):"));
let b = parseInt(prompt("Introduce el valor de b = 10):"));


console.log("Antes del intercambio:");
console.log("a =", a);
console.log("b =", b);


[a, b] = [b, a];


console.log("Después del intercambio:");
console.log("a =", a);
console.log("b =", b);


alert("Después del intercambio:\n a = " + a + "\n b = " + b);
