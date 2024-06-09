
function Potencias() {
    const num1: number = parseFloat((document.getElementById('numero1')as HTMLInputElement).value);
    const num2: number = parseFloat((document.getElementById('numero2') as HTMLInputElement).value);

    let potencia: number = Math.pow(num1, num2);

    document.getElementById('resultado').textContent =
        `El resultado de ${num1} elevado a  ${num2} es: ${potencia}`;
}
