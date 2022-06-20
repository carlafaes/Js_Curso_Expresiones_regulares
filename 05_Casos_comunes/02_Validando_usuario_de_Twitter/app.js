$(function () {
    var contactForm = document.getElementById('contactForm');

    contactForm.onsubmit = function (e) {
        e.preventDefault();

        console.log('¿El Twitter es válido?', isValidTwitter());
    }

    var isValidTwitter = function () {
        var twitter = document.getElementById('twitter');
        return /^@(\w+)$/.test(twitter.value) // RegExp para validar el formato del Twitter (@username) y que no tenga espacios en blanco al principio o al final 
    }

});