let filme = "Batman"

switch(filme){
    case "Batman":
        console.log(`O filme é o ${filme}`)
        break
    case "Vingadores":
        console.log(`O filme é o ${filme}`)
        break
    case "A vida secreta de Walter Mitty":
        console.log(`O filme é o ${filme} e você é foda`)
        break
    default:
        console.log(`O filme é inválido ou não existe`)
        break
}

let avaliacao = 5

switch(avaliacao){
    case 1:
    case 2:
        console.log("Filme Ruim")
        break
    case 3:
    case 4:
        console.log("Filme Bom")
        break
    case 5:
        console.log("Filme Excelente")
        break
    default: 
        console.log("Nota de Avaliação Inválida")
        break
}   