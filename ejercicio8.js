let str = prompt("Ingrese una cadena de texto:")
let reversedStr = "";
let index = str.length - 1

while (index >= 0) {
    reversedStr += str[index]
    index--
}

console.log("La cadena invertida es: " + reversedStr)