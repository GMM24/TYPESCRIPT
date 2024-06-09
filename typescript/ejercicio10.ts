function contarVocal() {
    const texto: string = document.getElementById('texto').value.toLowerCase();
    let Vocales: number = 0;

    for (let i = 0; i < texto.length; i++) {
        const caracter: string = texto.charAt(i);
        if ('aeiouáéíóúü'.indexOf(caracter) !== -1) {
            Vocales++;
        }
    }

    document.getElementById('resultado').innerHTML = 
    `El texto tiene ${Vocales} vocales.`;
}






    // const texto = ((document.getElementById('texto') as HTMLInputElement).value);
    // const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    // for (let caracter of texto) {
    //     if (vocales.hasOwnProperty(caracter)) {
    //         vocales[caracter]++;
    //     }
    // }
    // for (const vocal in vocales) {
    //     const Vocal = document.getElementById('resultado');
    //     Vocal.appendChild(document.getElementById('resultado')).textContent = vocal.toUpperCase();
    //     Vocal.appendChild(document.getElementById('resultado')).textContent = vocal.toUpperCase();
    // }
    // const resultado = document.getElementById("resultado");
    // resultado.textContent = "";
    // const btnResultado = document.getElementById('resultado') as HTMLButtonElement;
    // btnResultado.textContent="";
    // btnResultado.textContent= `
    // Vocales encontradas: ${vocales}`;
    // document.getElementById('resultado').textContent = `
    // Vocales encontradas: ${vocales}`;
    // for(const vocal in vocales){
    //     const Vocal = document.getElementById('resultado');
    //     Vocal.textContent= document
    // }
}