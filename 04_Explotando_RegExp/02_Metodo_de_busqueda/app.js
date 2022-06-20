var mensaje = 'Estahistoriacontinuara';

//  \W  Cualquier carácter que no sea alfanumérico
//  \S Cualquier carácter que no sea un espacio en blanco

console.log(mensaje.search(/\W/));//devuelve el indice del primer caracter que no es alfanumerico

var mensaje2 = '  Estahistoriacontinuara';

console.log(mensaje2.search(/\S/));//devuelve el indice del primer caracter que no es un espacio en blanco
                                    //devuelve en este caso 2 porque el espacio en blanco esta en el indice 2