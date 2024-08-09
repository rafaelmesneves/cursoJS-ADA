//coerção de tipos (conversão)
//coerção explicita (forma manual de conversão)
const prompt = require('readline-sync') 

const idade = prompt.question('qual a sua idade?') 
const idadeNumber = Number(idade) //'Number()' com N maiusculo é a maneira de converter manualmente a saida do usuario

console.log(idadeNumber, typeof idadeNumber)
console.log(Number('x')) //converter letras(string) para numero resgata o valor NaN (not a number)
console.log(String(10), typeof String(10)) //converte numero para string com 'String'
console.log(Boolean(0)) //quando converte numero para booleano '0' sempre resgata 'false'
console.log(Boolean(1)) //qualquer numero que não seja '0' resgata 'true'

//coerção implicita
console.log(1 + '1') //quando se tenta somar um number com uma string, tudo vira string (concatenou)
console.log(10 - '5') //quando se tem outro operador matematico, o sistema tenta fazer a conta, aqui a string vira number

//exemplo

let n = 1 + '1' //'11' (string) converte tudo para sting
n = n - 1 //10 (number) desconverte e subtrai 1
console.log(n)

console.log(2 + 3 + 4 + '5') // 5 + 4 = 9 + '5' = '95'

console.log('5' + 2 + 3 + 4) // '5234'

console.log('10' - '4' - '3' - 2 + '5') //  10 - 4 = 6 - 3 = 3 - 2 = 1 + '5' = '15'




