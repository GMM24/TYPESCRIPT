function contarVocal() {
    var texto = document.getElementById('texto').value.toLowerCase();
    var Vocales = 0;
    for (var i = 0; i < texto.length; i++) {
        var caracter = texto.charAt(i);
        if ('aeiouáéíóúü'.indexOf(caracter) !== -1) {
            Vocales++;
        }
    }
    document.getElementById('resultado').innerHTML =
        "El texto tiene ".concat(Vocales, " vocales.");
}
