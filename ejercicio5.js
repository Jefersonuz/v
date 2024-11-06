let continueCalculation = true

while (continueCalculation) {
    let operation = prompt("Ingrese la operación (suma, resta, multiplicación, división) o 'salir' para terminar:")
    if (operation === 'salir') {
        continueCalculation = false
    } else {
        let num1 = parseFloat(prompt("Ingrese el primer número:"))
        let num2 = parseFloat(prompt("Ingrese el segundo número:"))
        let result

        switch (operation) {
            case 'suma':
                result = num1 + num2
                break
            case 'resta':
                result = num1 - num2
                break
            case 'multiplicación':
                result = num1 * num2
                break
            case 'división':
                if (num2 !== 0) {
                    result = num1 / num2
                } else {
                    console.log("No se puede dividir por cero.")
                    continue
                }
                break;
            default:
                console.log("Operación no válida.")
                continue
        }
        console.log("El resultado es: " + result)
    }
}