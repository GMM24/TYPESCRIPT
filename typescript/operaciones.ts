//Enlazar los elementos de HTML con typescript
const inputNumero1 = document.getElementById('txtNumero1') as HTMLInputElement;
const inputNumero2 = document.getElementById('txtNumero2') as HTMLInputElement;

//Crear metodos para las diversas operaciones
const btnResta = document.getElementById('btnResta') as HTMLButtonElement;
const btnMulti = document.getElementById('btnMulti') as HTMLButtonElement;
const btnDiv   = document.getElementById('btnDiv') as HTMLButtonElement;

// añadir eventos a los botones (evento,funcion)
btnResta.addEventListener('click',restar);
btnMulti.addEventListener('click',multiplicar);
btnDiv.addEventListener('click',dividir);

//Enlazar etiqueta (div) donde se mostrara el resultado
const divResultado = document.getElementById('resultado') as HTMLParagraphElement;

let   numero1:  number = 0;
let   numero2:  number = 0;

//crear metodos para las diversas operaciones
function recibirValores() : number{
    let respuesta =0;
    numero1 = parseFloat(inputNumero1.value);
    numero2 = parseFloat(inputNumero2.value);
    if (isNaN(numero1)){
        respuesta = 100;
    }
}
function sumar(){
    if (recibirValores()==100) {
        divResultado.textContent = "Error en Valores"
    } else {
        const suma= numero1 + numero2;
        divResultado.textContent = "La suma es: " + suma;
    }



    // recibirValores();//llamar a la funcion que recibe valores
    // const suma= numero1 + numero2;
    // divResultado.textContent = "La suma es: " + suma;
}
function resta(){
    recibirValores();
    const resta = numero1 - numero2;
    divResultado.textContent = "La resta es: " + resta;

}
function multi(){
    recibirValores();
    const multiplicacion = numero1 * numero2;
    divResultado.textContent = "La multiplicaión es: " + multiplicacion;
}
function div(){
    recibirValores();
    const division = numero1 / numero2;
    divResultado.textContent = "La divisón es: " + division;
}

