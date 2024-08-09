// imprime algo
console.log('Hello World!')

// variaveis
var nome = 'Rafael' //var já não é muito usado. Dar preferencia a 'const' e 'let'
var idade = 29 //number
var nomeDoProfessor = 'Walisson' // ultilizar sempre o camel case
var altura = 1.77 // number
var estudando = true // boleano verdadeiro
var naoEstudando = false // boleano falso

console.log('me chamo ' + nome + ' e tenho ' + idade + ' anos')
console.log(typeof nome) // 'typeof' mostra qual é o tipo de variavel esta sendo imprimido
console.log(idade, typeof idade) // é possível demonstrar mais de uma saida usando a ','

var semConteudo // variavel sem atribuição de conteudo 'undefined'

//é possivel declarar mais de uma variavel por vez usando a ','
var curso = "front-end em React", topico = "javascript basico I"
console.log(curso, topico)

// NAO UTILIZAR O VAR PARA CODIFICAR EM JAVASCRIPT

let notaDoAluno = 10 //permite que possa ser modificado o valor declarado
const mediaDoAulo = 8 //constante, não permite que o valor declarado mude

notaDoAluno = 9
//mediaDoAulo = 5 (ñ é permitido!)

console.log(notaDoAluno)
console.log(mediaDoAulo)