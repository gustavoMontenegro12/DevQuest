let telefone = document.querySelector("input[name='telefone'")
console.log(telefone)

telefone.disabled = true

let button = document.getElementById('button')
button.addEventListener('click', habilitarTelefone)

function habilitarTelefone(){
    let telefone = document.querySelector("input[name='telefone'")
    telefone.disabled = false
}