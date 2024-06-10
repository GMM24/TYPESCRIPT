//Enlazar los elementos de HTML con typescript
var inputNumero1 = document.getElementById('txtNumero1');
var inputNumero2 = document.getElementById('txtNumero2');
//Crear metodos para las diversas operaciones
var btnResta = document.getElementById('btnResta');
var btnMulti = document.getElementById('btnMulti');
var btnDiv = document.getElementById('btnDiv');
// añadir eventos a los botones (evento,funcion)
btnResta.addEventListener('click', restar);
btnMulti.addEventListener('click', multiplicar);
btnDiv.addEventListener('click', dividir);
//Enlazar etiqueta (div) donde se mostrara el resultado
var divResultado = document.getElementById('resultado');
var numero1 = 0;
var numero2 = 0;
//crear metodos para las diversas operaciones
function recibirValores() {
    var respuesta = 0;
    numero1 = parseFloat(inputNumero1.value);
    numero2 = parseFloat(inputNumero2.value);
    if (isNaN(numero1)) {
        respuesta = 100;
    }
}
function sumar() {
    if (recibirValores() == 100) {
        divResultado.textContent = "Error en Valores";
    }
    else {
        var suma = numero1 + numero2;
        divResultado.textContent = "La suma es: " + suma;
    }
    // recibirValores();//llamar a la funcion que recibe valores
    // const suma= numero1 + numero2;
    // divResultado.textContent = "La suma es: " + suma;
}
function resta() {
    recibirValores();
    var resta = numero1 - numero2;
    divResultado.textContent = "La resta es: " + resta;
}
function multi() {
    recibirValores();
    var multiplicacion = numero1 * numero2;
    divResultado.textContent = "La multiplicaión es: " + multiplicacion;
}
function div() {
    recibirValores();
    var division = numero1 / numero2;
    divResultado.textContent = "La divisón es: " + division;
}
