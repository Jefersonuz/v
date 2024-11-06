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
