var expresion1 = new RegExp('abc');//mecanismo que nos permite cadenas de texto en base a patrones
console.log(expresion1.test('abcdef'));//true

var expresion2 = /Hola Mundo/;//mecanismo que nos permite cadenas de texto en base a patrones

console.log(expresion2.test('El primer programa es Hola Mundo'));//true
