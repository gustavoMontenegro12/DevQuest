const setaFechada = document.querySelectorAll('.seta-fechada') 
setaFechada.forEach(setaFechada => {
    setaFechada.addEventListener('click', function(){

        if(setaFechada.classList.contains('seta-fechada')){
            setaFechada.classList.remove('seta-fechada')
            setaFechada.classList.add('seta-aberta')
        }else if(setaFechada.classList.contains('seta-aberta')){
            setaFechada.classList.remove('seta-aberta')
            setaFechada.classList.add('seta-fechada')
        }
        
    })
})


