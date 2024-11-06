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