let quadrado = document.querySelector('.quadrado')

console.log(quadrado.classList)

quadrado.addEventListener('click', function (){
    if(quadrado.classList.contains('azul') == false){
        quadrado.classList.remove('preto')
        quadrado.classList.add('azul')
        alert(`Esse quadrado tem a classe ${quadrado.classList[1]}`)

    }else if(quadrado.classList.contains('azul') == true){
        quadrado.classList.remove('azul')
        quadrado.classList.add('preto')
        alert(`Esse quadrado tem a classe ${quadrado.classList[1]}`)
    
    }
})