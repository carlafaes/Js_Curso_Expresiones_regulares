var expresionInicio = /^Any/;//se busca el patron en el inicio de la cadena
var expresionFin = /JavaScript$/ ///se busca el patron en el final de la cadena
var expIniciFin = /^Any|JavaScript$/ ///se busca el patron en el inicio y final de la cadena
//[^] el circunflejo se puede usar como negacion solo si se encuentra dentro de corchetes.
// ^ Inicio
// $ Fin


console.log(expIniciFin.test('Any app that can be imagined can be made in JavaScript'));//true