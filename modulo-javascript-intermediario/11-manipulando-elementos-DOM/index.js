function adicionarComentario(){
    let comentario = document.getElementsByName("novo-comentario")
    let comentarioDigitado = comentario[0].value
    console.log(comentarioDigitado)
    
    let campoComentarios = document.getElementById("novos-comentarios")
    
    campoComentarios.innerHTML += `<p id="comentario">Novo comentário: ${comentarioDigitado}</p>`
    
}



function geraCorAleatoria(){
    let valoresCorAleatoria = "0123456789ABCDEF"
    let codigo = "#"

    for(let i = 0; i < 6; i++){
        codigo += valoresCorAleatoria[Math.floor(Math.random()*16)]
        
    }
    let corAleatoria = document.getElementById("comentario").style.color = codigo
    console.log(`Código da cor aleatória ${codigo}`)
    return codigo
}