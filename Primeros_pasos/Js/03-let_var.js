"use strict"

//Sirve para definir variables, principalmente se usa en typescript
//Let solo define la variable en el bloque y var es global o local
let prueba = "Hola";
alert (prueba);


var numero = 40;
//true hace que el if siempre se cumpla
if (true){
    var numero = 50;
    console.log(numero);
}

//Prueba con let

//Se define un valor
var txt = "Curso JS";
console.log(txt);

//Se cambia solo ese valor en el bloque
if (true){
    let txt = "Curso JavaScript";
    console.log(txt);
}

//Regresa a su antiguo valor ya que salio del if
console.log(txt);