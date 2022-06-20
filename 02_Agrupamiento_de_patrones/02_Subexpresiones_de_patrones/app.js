var expresion1 = /Woo+(hoo+)+/i;//()subexpresiones de patrones, + significa que el patron se va a repetir 1 o mas veces, no puede no repetirse al menos una vez

//Woohooooooo!

console.log(expresion1.test('Wooohooohooohooohoooooooohooohooohooohooohooo'));