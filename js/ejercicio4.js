"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputNum1 = document.getElementById('numero1');
var inputNum2 = document.getElementById('numero2');
var inputNum3 = document.getElementById('numero3');
var btnMayormenor = document.getElementById('btnresultado');
btnMayormenor.addEventListener('click', mayormenor);
var btnResultado = document.getElementById('resultado');
var num1 = 0;
var num2 = 0;
var num3 = 0;
var mayor;
var menor;
function Valor() {
    var respuesta = 0;
    num1 = parseFloat(inputNum1.value);
    num2 = parseFloat(inputNum2.value);
    num3 = parseFloat(inputNum3.value);
    if (isNaN(num2) || isNaN(num2) || isNaN(num3)) {
        respuesta = 0;
    }
    return respuesta;
}
function mayormenor() {
    if (Valor() == 0) {
        btnResultado.textContent = "Valor incorrecto";
    }
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            menor = num3;
        }
        else {
            menor = num2;
        }
    }
    else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            menor = num3;
        }
        else {
            menor = num1;
        }
    }
    else {
        mayor = num3;
        if (num1 >= num2) {
            menor = num2;
        }
        else {
            menor = num1;
        }
    }
}
