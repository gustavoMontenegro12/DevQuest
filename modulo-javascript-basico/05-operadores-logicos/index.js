const a = 20
const b = 20

function imprime(item){
    console.log(item)
}

// imprime(a==b)
// imprime(a===b)
// imprime(a!=b)
// imprime(a!==b)
// imprime(a < b)
// imprime(a <= b)
// imprime(a > b)
// imprime(a >= b)

// AND

imprime("Operador lógico AND")

imprime(a===b && a <= b)
// V e V = V

imprime(a===b && a>b)
//V e F = F

imprime(a!=b && a===b)
//F e V = F

imprime(a!=b && a>b)
//F e F = F

//OR

imprime("Operador lógico OR")

imprime(a===b || a <= b)
// V ou V = V

imprime(a===b || a>=b)
//V ou F = V

imprime(a!=b || a===b)
//F ou V = V

imprime(a!=b || a>b)
//F ou F = F

//NOT
imprime("Operador lógico NOT")

imprime(!(a===b))
//false

imprime(!(a!=b))
//true