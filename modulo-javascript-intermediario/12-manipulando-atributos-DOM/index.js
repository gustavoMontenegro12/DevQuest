function geraCorAleatoria(){
    let valoresCorAleatoria = "0123456789ABCDEF"
    let codigo = "#"

    for(let i = 0; i < 6; i++){
        codigo += valoresCorAleatoria[Math.floor(Math.random()*16)]
        
    }
    console.log(`Código da cor aleatória ${codigo}`)
    return codigo
}

function alterarBackground(){
    let post = document.getElementsByClassName("post")

    let primeiroPost = post[0]

    console.log(primeiroPost)

    primeiroPost.style.backgroundColor = geraCorAleatoria()

    let segundoPost = post[1]

    segundoPost.style.backgroundColor = geraCorAleatoria()
}

function aumentarFonte(){
    let textoPost = document.getElementsByClassName("texto-post")

    console.log(textoPost[1].classList)

    textoPost[1].classList.add('fonte-grande')
} 

function alterarRadio(genero){
    let radioMasculino = document.getElementById('genero-masculino')
    let radioFeminino = document.getElementById('genero-feminino')

    if(genero === "M"){
        radioMasculino.checked = true
    }else if(genero === "F"){
        radioFeminino.checked = true
    }
}