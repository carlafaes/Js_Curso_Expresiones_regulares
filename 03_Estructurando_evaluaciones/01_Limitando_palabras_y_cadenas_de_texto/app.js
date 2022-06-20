var expresion1 = /\bcat\b/;// \b significa que el patron es una palabra completa, no una subcadena.
//Establece los limites desde donde a donde se evaluara el patron.

console.log(expresion1.test("cat"));