function numeroEntero() {
    var num1 = document.getElementById('numero1');
    var btnResultado = document.getElementById('resultado');
    var numero = parseInt(num1.value);
    var numero2 = 0;
    for (var i = 1; i < numero; i++) {
        if (numero % i === 0) {
            numero2 += i;
        }
    }
    if (numero2 === numero) {
        btnResultado.textContent = "".concat(numero, " Es n\u00FAmero perfecto ");
    }
    else {
        btnResultado.textContent = "".concat(numero, " No es n\u00FAmero perfecto ");
    }
}
