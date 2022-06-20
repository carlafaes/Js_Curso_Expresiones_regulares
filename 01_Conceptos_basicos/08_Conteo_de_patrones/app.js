var expresion1 = /\d{1,2}-\d{1,2}-\d{4} \d{1,2}:\d{2,}/;
                // \d{1,2}- significa que el patron puede tener 1 o 2 caracteres,y luego debe ir el guion

console.log(expresion1.test('27-06-2007 11:45'));