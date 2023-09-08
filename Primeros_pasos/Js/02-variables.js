//Modo estricto, sirve para que el código no interprete en automático, funciona para mejores prácticas y debuggear
"use strict"

//Variables de JavaScript

//Se utiliza var para definir la variable
var pais = "México";
var continente = "America";
var antiguedad = 2023;

// concatenaciones
var paisContinente = pais + " " + continente;

//Cambiar contenidos
pais = "España";
continente = "Europa";

console.log(pais, continente, antiguedad);

alert(paisContinente)