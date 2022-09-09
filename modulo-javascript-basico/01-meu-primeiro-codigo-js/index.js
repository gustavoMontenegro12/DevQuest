let confirmacao = window.confirm("Deseja continuar?")
console.log(confirmacao)

if(confirmacao == true){

    let idade = window.prompt("Digite sua idade")
    console.log(typeof idade)

    if (idade >= 40 ){
        window.alert("Tá velho(a), hein??")
    }else{
        window.alert("tá na faixa ainda")
    }
}
