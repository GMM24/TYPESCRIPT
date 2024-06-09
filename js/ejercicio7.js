function Factorizacion() {
    var num1 = (document.getElementById('numero1').value);
    var n = num1;
    var facto = 1;
    for (var i = 1; i <= n; i++) {
        facto = facto * i;
    }
    document.getElementById('resultado').textContent = "\n    La factorizaci\u00F3n del d\u00EDgito es:  ".concat(facto);
}
