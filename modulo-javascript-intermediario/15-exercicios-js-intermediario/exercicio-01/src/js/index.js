let button = document.getElementById('button')

let cuboAzul = document.querySelector('.azul')
console.log(cuboAzul)

button.addEventListener('click', trocarCor)


function trocarCor(){
    cuboAzul.classList.remove('azul')
    cuboAzul.classList.add('amarelo')
}