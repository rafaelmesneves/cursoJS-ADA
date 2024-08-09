//entrada de dados do usuario
//pelo navegador se usa o prompt do browser
const idade = prompt('qual a sua idade') //'window.prompt' ou apenas 'prompt' recebe os dados do usuario, nesse caso ele esta recebendo o valor e já guardando dentro de uma variavel
console.log('o usuario tem', idade, 'anos de idade')
// essa forma só funciona no navegador, não funciona no node

//para poder ler os dados do usuario no node, é necessario a instalação de uma biblioteca pelo terminal 'npm install readline-sync'