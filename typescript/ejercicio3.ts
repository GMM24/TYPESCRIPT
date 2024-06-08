const inputNumero1 = document.getElementById('numero1') as HTMLInputElement;
const btnPar = document.getElementById('btnresultado') as HTMLButtonElement;

btnPar.addEventListener('click', par);

const btnResultado = document.getElementById('resultado') as HTMLParagraphElement;

let num: number = 0;

function Valores():number{
    let respuesta: number = 0;
    num = parseFloat(inputNumero1.value);
    if(isNaN(num)){
        respuesta = 0;
    }
    return respuesta;
}

function par(){
    if (Valores()==0) {
        btnResultado.textContent = "Valores ingresados incorrectos"
        
    }
    if (num %2 ==0) {
        btnResultado.textContent = "El número ingresado es par"
        
    }else {
        btnResultado.textContent = "El número ingresado es impar"
         
    }
}