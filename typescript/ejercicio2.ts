const num1 = document.getElementById('base') as HTMLInputElement;
const num2 = document.getElementById('altura') as HTMLInputElement;
const btnmulti = document.getElementById('btnresultado') as HTMLButtonElement;

btnmulti.addEventListener('click', multiplicar);

const btnResultado = document.getElementById('resultado') as HTMLParagraphElement;

let numero1: number = 0;
let numero2: number = 0;

function Valores():number{
    let respuesta: number = 0;
    numero1 = parseFloat(num1.value);
    numero2 = parseFloat(num2.value);
    if (isNaN(numero1)||isNaN(numero2)){
        respuesta = 0;
    }
    return respuesta;
}

function multiplicar() {
    if (Valores()==0) {
        const area = (numero1 * numero2)/2;
        btnResultado.textContent = "El área del Triangulo es: " + area;
    } else {
        btnResultado.textContent = "Valor Incorrecto";      
    }
    
}