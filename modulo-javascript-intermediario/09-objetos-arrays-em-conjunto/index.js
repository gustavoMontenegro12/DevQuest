let videogame = {
    nome: "Xbox",
    valor: 3000,
    jogos: [
        {nome: "Cyberpunk 2077", genero: "RPG"},
        {nome: "High on life", genero: "Comédia, RPG"}
    ]
}

let usuario = {
    nome: "Gustavo",
    tipo: "Cliente",
    ultimoPedido:{
        produtos: videogame
    }
}

console.log(usuario.ultimoPedido)