function Potencias() {
    var num1 = parseFloat(document.getElementById('numero1').value);
    var num2 = parseFloat(document.getElementById('numero2').value);
    var potencia = Math.pow(num1, num2);
    document.getElementById('resultado').textContent =
        "El resultado de ".concat(num1, " elevado a  ").concat(num2, " es: ").concat(potencia);
}
