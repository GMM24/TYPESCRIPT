var inputNumero1 = document.getElementById('numero1');
var btnPar = document.getElementById('btnresultado');
btnPar.addEventListener('click', par);
var btnResultado = document.getElementById('resultado');
var num = 0;
function Valores() {
    var respuesta = 0;
    num = parseFloat(inputNumero1.value);
    if (isNaN(num)) {
        respuesta = 0;
    }
    return respuesta;
}
function par() {
    if (Valores() == 0) {
        btnResultado.textContent = "Valores ingresados incorrectos";
    }
    if (num % 2 == 0) {
        btnResultado.textContent = "El número ingresado es par";
    }
    else {
        btnResultado.textContent = "El número ingresado es impar";
    }
}
