function Factorizacion() {
    const num1 = ((document.getElementById('numero1') as HTMLInputElement).value);
    let n = num1;
    let facto = 1;
    for (let i = 1; i <= n; i++) {
        facto = facto * i;
    }
    document.getElementById('resultado').textContent = `
    La factorización del dígito es:  ${facto}`;
}