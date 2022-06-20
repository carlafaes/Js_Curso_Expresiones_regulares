var mensaje = "Llegaban por montones, primero 10, después 20, después 35 y se duplicaban hasta llegar a 1000";

var patron = /\b(\d+)\b/g;//\b significa que sea una palabra completa y no una parte de una palabra (\d+) significa que sea un número entero (\d+ es una expresión regular que representa un número entero) y g significa que se va a buscar en todo el texto

var match;

while (match = patron.exec(mensaje)) {//exec es una función que busca una coincidencia en un texto y devuelve un array con los elementos que la conforman
    console.log(match)
    console.log("Se encontró ", match[1], " en la posición: ", match.index);//match[1] es el elemento que se encuentra en el array
}
///con el metodo while podemos hacer el analisis del patron iterando dentro de la cadena de texto, una y otra vez mientra la condicion se cumpla. Si no se encuentra ninguna coincidencia, el ciclo termina y devuelve undefined