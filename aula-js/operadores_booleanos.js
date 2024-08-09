//operador booleano (verdadeiro ou falso) são baseados em comparação

const numero1 = 10
const numero2 = 12

console.log(numero1 == numero2) //'==' significa igualdade
console.log(numero1 === numero2) // '===' significa igualdade em valor e em tipo de dado (string ou number) mais usado no javascript

console.log(numero1 != numero2) //'!=' significa diferente, mesma situação anterior. Com '!==' é mais usado e certeiro

console.log(numero1 > numero2) // maior que
console.log(numero1 < numero2) // menor que
console.log(numero1 >= numero2) //maior ou igual
console.log(numero1 <= numero2) //menor ou igual

// Conjunções lógicas
const idadePessoa1 = 20
const idadePessoa2 = 39

console.log(idadePessoa1 >= 18 && idadePessoa2 >= 18) // '&&' significa "e e ao mesmo tempo é"
console.log(idadePessoa1 >= 18 || idadePessoa2 >= 18) // '||' significa "ou um ou outro"

//operador de inversão
console.log(!true) // uso de '!' a frente do booleano inverte o seu valor







