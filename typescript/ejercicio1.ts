const inputNum1 = document.getElementById('num1') as HTMLInputElement;
const inputNum2 = document.getElementById('num3') as HTMLInputElement;
const inputNum3 = document.getElementById('num2') as HTMLInputElement;
const btnDivi = document.getElementById('btnresultado') as HTMLButtonElement;

btnDivi.addEventListener('click', dividir);
// const promedio: number = (inputNum1 + inputNum2 + inputNum3) / 3;

const btnResultado = document.getElementById('resultado') as HTMLParagraphElement;

let numero1: number = 0;
let numero2: number = 0;
let numero3: number = 0;

function recibirValor():number{
    let respuesta: number = 0;
    numero1 = parseFloat(inputNum1.value);
    numero2 = parseFloat(inputNum2.value);
    numero3 = parseFloat(inputNum3.value);
    if (isNaN(numero1)||isNaN(numero2)||isNaN(numero3)) {
        respuesta = 0;
    }
    return respuesta;
}

function dividir() {
    if (recibirValor()==0) {
        const promedio = (numero1 + numero2 + numero3) / 3;
        btnResultado.textContent = "El promedio es: " + promedio;
        
    } else {
        btnResultado.textContent = "Los valores ingresados no son correctos";
    }
}



// function calcularPromedio() {

//     document.getElementById('resultado').innerHTML = `El promedio es: ${promedio}`;
// }
