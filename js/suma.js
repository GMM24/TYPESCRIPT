function sumar() {
    var numero1 = parseFloat(document.getElementById('textNumero1').value);
    var numero2 = document.getElementById("txtNumero2");
    var n2 = parseFloat(numero2.value);
    var suma = numero1 + n2;
    var suma2 = numero1 + parseFloat(numero2.value);
    document.getElementById('resultado').innerHTML = "La suma es : " + suma;
}