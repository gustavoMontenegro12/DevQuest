let frutas = ["Laranja", "Romã", "Melão", "Melancia"]

frutas.shift()
frutas.pop()
frutas.push("Morango")
frutas.unshift("Uva")

frutas.forEach((item, index) => {
    console.log(`Item - Frutas: ${item}`)
    console.log(`Index - Frutas: ${frutas[index]}`)
})