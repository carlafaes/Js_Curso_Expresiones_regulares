var expresion1 = /pollo|res|pescado/;// el operador | indica que el patron puede ser uno de los siguientes. como se uitlizaria al utilizar or ||
console.log(expresion1);

console.log(expresion1.test('El cliente pidió tacos'));//false
console.log(expresion1.test('El cliente pidió pollo'));//true
console.log(expresion1.test('El cliente pidió res'));//true
console.log(expresion1.test('El cliente pidió pescado'));//true
