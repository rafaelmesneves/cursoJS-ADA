//controle de fluxo: condicionais
const prompt = require('readline-sync')

const idade = Number(prompt.question('qual sua idade?')) // alem de solicitar a entrada de dados, aqui já converte a entrada pra numero

const maiorIdade = idade >= 18

//estrutura condicional: 'if/else' (se/senão)
if(maiorIdade /* ou (idade >= 18)*/) {
    console.log('maioridade')
} else {
    console.log('menoridade')
}
//teste meu
const prompt = require('readline-sync')
const mediaAluno = 5
const nota1 = Number(prompt.question('nota 1: '))
const nota2 = Number(prompt.question('nota 2: '))

if((nota1 + nota2) / 2 >= mediaAluno ) {
    console.log('na media')
}else{
    console.log('reprovado')
}

//segundo teste
const prompt = require('readline-sync')
const mediaAluno1 = 7
const nota01 = Number(prompt.question('nota 1: '))
const nota02 = Number(prompt.question('nota 2: '))

if((nota01 + nota02) / 2 >= mediaAluno1) {
    console.log('na media', 'sua nota foi', (nota01 + nota02) / 2 )
}else if /*aqui é 'ou se'(else if)*/ ((nota01 + nota02) / 2 >= 5){
    console.log('recuperação', 'sua nota foi', (nota01 + nota02) / 2 )
}else{
    console.log('reprovado','sua nota foi', (nota01 + nota02) / 2 )
}

//switch case = muito util quando a variavel possui valores específicos
const permissoes = 'aluno' // 'aluno' || 'professor' || 'admin'

switch(permissoes) {
    case 'aluno':
        console.log('voce so pode visualizar as aulas')
    break // o 'break' é necessario senão não vai para o switch, a cada caso tem que colocar
    case 'professor':
        console.log('voce pode alterar as aulas e adicionar exercicios')
    break
    case 'admin':
        console.log('voce pode fazer o que quiser no sistema')
    break
    default: //'default' significa "se não for nenhum caso acima fazer isso"
        console.log('Não sei quem e voce no sistema')
    break
}

//operador ternario [é necessario o uso de ':' pois o ternario é o if e else juntos, então seria "se idade for menor que 18 fazer isso" ':' "senão fazer outra coisa"]
const idadezinha = 7

idadezinha >= 18 ? /*o uso do '?' é necessario como um questionamento */console.log('Maioridade') : console.log('minoridade')

const mensagem = idadezinha >= 18 ? 'Maioridade' : 'minoridade' //dar valor para a variavel a partir de uma constatacao de valor
console.log(mensagem)


//Truthy & Falsy
//Truthy é tudo o que pode ser considerado verdadeiro
//Falsy tudo o que pode ser considerado falso
//se no if tiver algo dentro seja string, number ou objeto é considerado verdadeiro, quando esta com uma string vazia, vazio ou undefined, ele considera falso

//falsy: 0, undefined, null, '', NaN
//Truthy: todos os demais
