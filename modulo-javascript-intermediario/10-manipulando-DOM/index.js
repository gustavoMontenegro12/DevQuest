let titulo = document.getElementsByClassName("titulo")
titulo[0].style.color="blue"
titulo[1].style.color="green"

console.log(titulo[1].innerHTML)

let paragrafo = document.getElementById("paragrafo1")
paragrafo.style.color="red"
paragrafo.style.fontSize = "25px"

let paragrafoSemID = document.getElementsByTagName("p")
paragrafoSemID[1].style.color="purple"
paragrafoSemID[1].style.fontSize="50px"

console.log(paragrafoSemID[1].innerHTML)

console.log(paragrafo)

let input = document.querySelectorAll("input[name=email]")
console.log(input[0])