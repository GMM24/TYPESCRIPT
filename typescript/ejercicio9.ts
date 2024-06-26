function numeroPrimo() {
    const numero = parseInt(document.getElementById('numero1').value);

    if (isNaN(numero) || numero <= 0) {
        document.getElementById('resultado').textContent = "Ingrese un número positivo";
        return;
    }

    if (numero === 1) {
        document.getElementById('resultado').textContent = "El 1 no se considera primo";
        return;
    }

    let Primo = true;

    for (let i = 2; i <= numero - 1; i++) {
        if (numero % i === 0) {
            Primo = false;
            break;
        }
    }

    const btnResultado = Primo ? " Este numero sí es primo" : "Este número no es primo";
    document.getElementById('resultado').textContent = btnResultado;
}
