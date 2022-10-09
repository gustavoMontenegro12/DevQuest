document.querySelector("select[name='estado']").addEventListener('change', mostrarAlert)

function mostrarAlert(bolacha){
    alert(`Você selecionou o ${bolacha.target.value}`)
    console.log(`Você selecionou o ${bolacha.target.value}`)
}