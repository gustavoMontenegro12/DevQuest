let frutas = ["Laranja", "Romã", "Melão", "Melancia"]

frutas.shift()
frutas.pop()
frutas.push("Morango")
frutas.unshift("Uva")
let frutasSlice = frutas.slice(0, 2)
frutas.splice(3, 0, "Goiaba", "Banana", "Maçã")


frutas.forEach((item, index) => {
    console.log(`Item - Frutas: ${item}`)
    console.log(`Index - Frutas: ${frutas[index]}`)
})

console.log(frutasSlice)
