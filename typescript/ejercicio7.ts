function Factorizacion() {
    const num1 = ((document.getElementById('numero1') as HTMLInputElement).value);
    let n = num1;
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f = f * i;
    }
    document.getElementById('resultado').textContent = `
    La factorización del dígito es:  ${f}`;
    // document.write(f);
}