let inputText = document.querySelectorAll('.input')

inputText.forEach(input =>{
    input.addEventListener('change', function (){
    
    if(input.value != ''){
        input.classList.add('valido')
    }else{
        console.log("campo vazio")
        input.classList.remove('valido')

    }
})})