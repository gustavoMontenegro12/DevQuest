/*
    String 
    Number
    Boolean
    Null
    Undefined
*/

function imprime(item){
    console.log(item)
}

let nome = "Gustavo"
let idade = 26
let usuarioVerficado = true
let pessoa = null
let und = undefined

if(usuarioVerficado){
    imprime("Usuario Verficado")
}else{
    imprime("Usuario não é Verficado")
}

imprime(nome + " Tipo Primitivo: " + typeof nome)

imprime(idade + " Tipo Primitivo: " + typeof idade)

imprime(usuarioVerficado + " Tipo Primitivo: " + typeof usuarioVerficado)

imprime(pessoa + " Tipo Primitivo: " + typeof pessoa)

imprime(und + " Tipo Primitivo: " + typeof und)