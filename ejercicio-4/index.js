"use strict"


let numero = parseFloat(prompt("Introduce un número:"));  
let texto = prompt("Introduce un string:");  
let booleano = prompt("Introduce un valor booleano (true o false):") === "true";  
let nulo = null;  


let tipoNumero = typeof numero;
let tipoTexto = typeof texto;
let tipoBooleano = typeof booleano;
let tipoNulo = typeof nulo;


alert(`Resultados de los tipos de datos:
- Número: ${numero} es de tipo ${tipoNumero}
- String: ${texto} es de tipo ${tipoTexto}
- Booleano: ${booleano} es de tipo ${tipoBooleano}
- Null es de tipo ${tipoNulo}`);
