var num1 = document.getElementById('base');
var num2 = document.getElementById('altura');
var btnmulti = document.getElementById('btnresultado');
btnmulti.addEventListener('click', multiplicar);
var btnResultado = document.getElementById('resultado');
var numero1 = 0;
var numero2 = 0;
function Valores() {
    var respuesta = 0;
    numero1 = parseFloat(num1.value);
    numero2 = parseFloat(num2.value);
    if (isNaN(numero1) || isNaN(numero2)) {
        respuesta = 0;
    }
    return respuesta;
}
function multiplicar() {
    if (Valores() == 0) {
        var area = (numero1 * numero2) / 2;
        btnResultado.textContent = "El área del Triangulo es: " + area;
    }
    else {
        btnResultado.textContent = "Valor Incorrecto";
    }
}
