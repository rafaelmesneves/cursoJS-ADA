const prompt = require('readline-sync') //require é a palavra para importar biblioteca para o projeto em javascript

const idade = prompt.question('qual a sua idade?') //para funcionar é necessário apos a declaração da biblioteca o uso do '.question', somente assim irá funcionar, está na documentação da bibliote em npmjs.com

console.log(idade, typeof idade) //está resgatando o numero como string