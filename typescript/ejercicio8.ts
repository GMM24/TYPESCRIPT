function numeroEntero() {
    const num1=document.getElementById('numero1') as HTMLInputElement;
    const btnResultado: HTMLParagraphElement = document.getElementById('resultado') as HTMLParagraphElement;
    const numero : number = parseInt(num1.value);
    let numero2 = 0;
    for (let i = 1;  i < numero;  i++) {
        if (numero % i === 0) {
            numero2 += i;
        }
    }
    if (numero2 === numero ) {
       btnResultado.textContent = `${numero} Es número perfecto `;
    }else {
        btnResultado.textContent =`${numero} No es número perfecto `;
    }
   
}