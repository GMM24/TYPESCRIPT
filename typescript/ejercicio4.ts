import { isNamespaceExport } from "typescript";

const inputNum1 = document.getElementById('numero1') as HTMLInputElement;
const inputNum2 = document.getElementById('numero2') as HTMLInputElement;
const inputNum3 = document.getElementById('numero3') as HTMLInputElement;
const btnMayormenor = document.getElementById('btnresultado') as HTMLButtonElement;

btnMayormenor.addEventListener('click', mayormenor);

const btnResultado = document.getElementById('resultado') as HTMLParagraphElement;

let num1: number = 0;
let num2: number = 0;
let num3: number = 0;
let mayor: number;
let menor: number;

function Valor():number{
    let respuesta: number = 0;
    num1 = parseFloat(inputNum1.value);
    num2 = parseFloat(inputNum2.value);
    num3 = parseFloat(inputNum3.value);

    if(isNaN(num2)||isNaN(num2)||isNaN(num3)){
        respuesta = 0;
    }
    return respuesta;
}

function mayormenor(){
    if(Valor()==0){
        btnResultado.textContent = "Valor incorrecto"
    }
    if (num1 >= num2 && num1 >= num3) {
        mayor = num1;
        if (num2 >= num3) {
            menor = num3;
        } else {
            menor = num2;
        }
    } else if (num2 >= num1 && num2 >= num3) {
        mayor = num2;
        if (num1 >= num3) {
            menor = num3;
        } else {
            menor = num1;
        }
    } else {
        mayor = num3;
        if (num1 >= num2) {
            menor = num2;
        } else {
            menor = num1;
        }
    }

    
    
}