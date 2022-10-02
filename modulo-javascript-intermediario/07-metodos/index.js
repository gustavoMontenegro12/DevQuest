let usuario = {
    nome: "Gustavo",
    idade: 26,
    excluir: function() {
        console.log(`O usuário ${this.nome} foi excluído.`)
    },
    ativo: false,
    checarAtivo: function() {
        if(this.ativo){
            console.log(`O funcionário ${this.nome} está ativo.`)
        }else{
            console.log(`O funcionário ${this.nome} está desligado da empresa.`)
        }
    }
}
usuario.checarAtivo()
usuario.excluir()