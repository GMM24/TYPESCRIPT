var inputNum1 = document.getElementById('num1');
var inputNum2 = document.getElementById('num3');
var inputNum3 = document.getElementById('num2');
var btnDivi = document.getElementById('btnresultado');
btnDivi.addEventListener('click', dividir);
var btnResultado = document.getElementById('resultado');
var numero1 = 0;
var numero2 = 0;
var numero3 = 0;
function recibirValor() {
    var respuesta = 0;
    numero1 = parseFloat(inputNum1.value);
    numero2 = parseFloat(inputNum2.value);
    numero3 = parseFloat(inputNum3.value);
    if (isNaN(numero1) || isNaN(numero2) || isNaN(numero3)) {
        respuesta = 0;
    }
    return respuesta;
}
function dividir() {
    if (recibirValor() == 0) {
        var promedio = (numero1 + numero2 + numero3) / 3;
        btnResultado.textContent = "El promedio es: " + promedio;
    }
    else {
        btnResultado.textContent = "Los valores ingresados no son correctos";
    }
}
