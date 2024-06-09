
function invertirCadena() {
    const texto: string = ((document.getElementById('texto1') as HTMLInputElement).value);
    const invertido:string = texto.split('').reverse().join('');

    document.getElementById('resultado').textContent = `
    El texto invertido es:  ${invertido}`;
}
 
//El método split() separa un objeto de cadena en un arreglo de cadena al separar la cadena en subcadenas.
//El método //reverse()// invierte un arreglo. El primer elemento del arreglo se convierte en el último y el último se convierte en el primero.
//El método join() une todos los elementos de un arreglo en una cadena.//
      