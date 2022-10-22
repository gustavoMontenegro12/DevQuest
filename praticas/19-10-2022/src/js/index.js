const nome = document.querySelector('.nome')
const emailInput = document.querySelectorAll('.input')
const resultado = document.querySelector('.resultado')
const botao = document.querySelector('.button')


botao.disabled = true

function mudarEstadoDoBotao(){
    if(nome.value != ''){
        emailInput.forEach(email =>{
            if(email.value != ''){
                botao.disabled = false
            }else{
                botao.disabled = true}
        })    
    }   
}


function mostarNome(){
    resultado.innerHTML += `<p>Nome: ${nome.value}</p>`
}

function mostrarEmail(){
    emailInput.forEach(email => {
        resultado.innerHTML += `<p>Email: ${email.value}</p>`
        console.log(email)
    })

}

nome.addEventListener('change', mudarEstadoDoBotao)

emailInput.forEach(email => {
    email.addEventListener('change', mudarEstadoDoBotao)
})

botao.addEventListener('click', function(){
    mostarNome()
    mostrarEmail()
    
})

