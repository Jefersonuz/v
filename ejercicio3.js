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