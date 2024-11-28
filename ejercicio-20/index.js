"use strict"

const calcularIVA = (precio) => {
    let iva = precio * 0.12;  
    let precioTotal = precio + iva;  
    return precioTotal;  
}


let precio = parseFloat(prompt("Introduce el precio:"));


let precioConIVA = calcularIVA(precio);


alert("El precio total con IVA es: " + precioConIVA);
