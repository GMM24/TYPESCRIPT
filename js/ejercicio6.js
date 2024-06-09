function invertirCadena() {
    var texto = (document.getElementById('texto1').value);
    var invertido = texto.split('').reverse().join('');
    document.getElementById('resultado').textContent = "\n    El texto invertido es:  ".concat(invertido);
}
//El método split() separa un objeto de cadena en un arreglo de cadena al separar la cadena en subcadenas.
//El método //reverse()// invierte un arreglo. El primer elemento del arreglo se convierte en el último y el último se convierte en el primero.
//El método join() une todos los elementos de un arreglo en una cadena.//
