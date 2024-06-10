function numeroPrimo() {
    var numero = parseInt(document.getElementById('numero1').value);
    if (isNaN(numero) || numero <= 0) {
        document.getElementById('resultado').textContent = "Ingrese un número positivo";
        return;
    }
    if (numero === 1) {
        document.getElementById('resultado').textContent = "El 1 no se considera primo";
        return;
    }
    var Primo = true;
    for (var i = 2; i <= numero - 1; i++) {
        if (numero % i === 0) {
            Primo = false;
            break;
        }
    }
    var btnResultado = Primo ? " Este numero sí es primo" : "Este número no es primo";
    document.getElementById('resultado').textContent = btnResultado;
}
