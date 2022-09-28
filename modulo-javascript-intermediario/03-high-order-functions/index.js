const calcularAnoAniversario = function(idade, mesNascimento, imprimir){
    const mesAtual = 9
    let calculoAnoDenascimento = 2022 - idade

    if(mesAtual > mesNascimento) calculoAnoDenascimento--

    imprimir(calculoAnoDenascimento)
}

let imprimirAnoDeNascimento = calculoAnoDenascimento => console.log(`Seu ano de nascimento é ${calculoAnoDenascimento}`)

calcularAnoAniversario(25, 11, imprimirAnoDeNascimento)

function multiplicar(multiplicador){
    return function(numero){
        return numero * multiplicador
    }
}

let dobrar = multiplicar(2)

let triplicar = multiplicar(3)

let quintoplicar = multiplicar(5)

console.log(`Dobrar: ${dobrar(2)}\nTriplicar: ${triplicar(3)}\nQuintoplicar: ${quintoplicar(5)}`)