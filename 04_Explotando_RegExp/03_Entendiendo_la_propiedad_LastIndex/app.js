// var expresion1 = /y/g;

// console.log(expresion1.lastIndex);//0

// expresion1.lastIndex = 6;
// console.log(expresion1.lastIndex);//6

// var coincidencia = expresion1.exec('sibr yfx sibr yfx');//coincidencia es un array con los valores que encuentra, a partir de que indice se encuentra,y el input.

// console.log(coincidencia);
// console.log(expresion1.lastIndex);//12

var expresion2 = /\d/g;//\d es un caracter que representa un digito del 0 al 9 y g es una expresion global.

console.log(expresion2.exec('Pedí 4 tacos y 1 agua'));//[4]
console.log(expresion2.exec('Pedí 4 tacos y 1 agua'));//[1]
expresion2.lastIndex = 0;
console.log(expresion2.exec('Pedí 4 tacos y 1 agua'));//[4]