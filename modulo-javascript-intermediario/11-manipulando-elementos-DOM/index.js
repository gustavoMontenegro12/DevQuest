let campoComentarios = document.getElementById("novos-comentarios")


function adicionarComentario(){
    let comentario = document.getElementsByName("novo-comentario")
    let comentarioDigitado = comentario[0].value
    console.log(comentarioDigitado)
    
    
    campoComentarios.innerHTML += `<p id="comentario">Novo comentário: ${comentarioDigitado}</p>`

    campoComentarios.style.color = geraCorAleatoria()
    
}



function geraCorAleatoria(){
    let valoresCorAleatoria = "0123456789ABCDEF"
    let codigo = "#"

    for(let i = 0; i < 6; i++){
        codigo += valoresCorAleatoria[Math.floor(Math.random()*16)]
        
    }
    console.log(`Código da cor aleatória ${codigo}`)
    return codigo
}