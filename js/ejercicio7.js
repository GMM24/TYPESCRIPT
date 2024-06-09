function Factorizacion() {
    var num1 = (document.getElementById('numero1').value);
    var n = num1;
    var f = 1;
    for (var i = 1; i <= n; i++) {
        f = f * i;
    }
    document.getElementById('resultado').textContent = "\n    La factorizaci\u00F3n del d\u00EDgito es:  ".concat(f);
    // document.write(f);
}
