const confirmacao = confirm("Seja bem vindo(a) aventureiro(a)! Gostaria de pagar R$50,00 para passar a noite na nossa hospedagem?")

if(confirmacao){
    alert("Ótimo, Nós temos as melhores camas de toda a região")
}else if(confirmacao === false){
    alert("Que pena! Você parecia ser uma pessoa mais legal")
}else{
    alert("Opção inválida")
}