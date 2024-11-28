"use strict"

let tieneCuenta = prompt("¿Tienes una cuenta? (sí/no)").toLowerCase();

let conoceContraseña = prompt("¿Conoces la contraseña? (sí/no)").toLowerCase();


if (tieneCuenta === "sí" && conoceContraseña === "sí") {
    alert("Acceso concedido.");
} else {
    alert("Acceso denegado.");
}
