// 1
let i = 1;
while (i <= 10) {
    console.log(i)
    i++
}
// 2
let randomNumber = Math.floor(Math.random() * 100) + 1
let guess = null

while (guess !== randomNumber) {
    guess = parseInt(prompt("Adivina el número entre 1 y 100:"))
    if (guess < randomNumber) {
        console.log("Demasiado bajo. Intenta de nuevo.")
    } else if (guess > randomNumber) {
        console.log("Demasiado alto. Intenta de nuevo.")
    } else {
        console.log("¡Correcto! El número es " + randomNumber)
    }
}


// 3
let number = parseInt(prompt("Ingrese un número entero positivo:"))
let sum = 0
let currentNumber = 1

while (currentNumber <= number) {
    if (currentNumber % 2 === 0) {
        sum += currentNumber
    }
    currentNumber++
}

console.log("La suma de los números pares desde 1 hasta " + number + " es: " + sum)

// 4

let num = parseInt(prompt("Ingrese un número entero:"))
let multiplier = 1

while (multiplier <= 10) {
    console.log(num + " x " + multiplier + " = " + (num * multiplier))
    multiplier++
}


// 5

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


// 6

let continueConversion = true

while (continueConversion) {
    let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"))
    let fahrenheit = (celsius * 9/5) + 32
    console.log(celsius + "°C es equivalente a " + fahrenheit + "°F.")
    
    let another = prompt("¿Desea convertir otra temperatura? (sí/no):")
    if (another.toLowerCase() !== 'sí') {
        continueConversion = false
    }
}

// 7
let tasks = [];
let continueManaging = true
while (continueManaging) {
    let action = prompt("¿Qué desea hacer? (agregar, listar, eliminar, salir):")
    
    switch (action) {
        case 'agregar':
            let task = prompt("Ingrese la nueva tarea:")
            tasks.push(task);
            console.log("Tarea agregada.")
            break;
        case 'listar':
            console.log("Lista de tareas:");
            tasks.forEach((t, index) => console.log(index + 1 + ". " + t))
            break;
        case 'eliminar':
            let taskIndex = parseInt(prompt("Ingrese el número de la tarea a eliminar:")) - 1
            if (taskIndex >= 0 && taskIndex < tasks.length) {
                tasks.splice(taskIndex, 1);
                console.log("Tarea eliminada.")
            } else {
                console.log("Número de tarea no válido.")
            }
            break;
        case 'salir':
            continueManaging = false
            break
        default:
            console.log("Acción no válida.")
            break
    }
}

// 8 

let str = prompt("Ingrese una cadena de texto:")
let reversedStr = "";
let index = str.length - 1

while (index >= 0) {
    reversedStr += str[index]
    index--
}

console.log("La cadena invertida es: " + reversedStr)
