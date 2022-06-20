$(function () {//Se ejecuta cuando el documento esta listo
    var contactForm = document.getElementById('contactForm');//Obtenemos el formulario

    contactForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('¿El correo es válido?', isValidEmail());
    }

    var isValidEmail = function () {//esta función devuelve true o false dependiendo de si el correo es válido o no
        var email = document.getElementById('email');//obtenemos el elemento del formulario
        return /^\w+([\.\+\-]?\w+)*@([\.-]?\w+)*(\.\w{2,4})+$/.test(email.value)//^ es una expresión regular que indica que el inicio de la cadena de texto debe empezar con un caracter que cumpla la expresión regular y $ indica que el final de la cadena de texto debe terminar con un caracter que cumpla la expresión regular, en este caso el caracter debe ser una letra, un número o un guión bajo. El . indica que se va a buscar una o más veces el caracter anterior. El + indica que se va a buscar una o más veces el caracter anterior. El ? indica que se va a buscar una o no una vez el caracter anterior. 
    }

});