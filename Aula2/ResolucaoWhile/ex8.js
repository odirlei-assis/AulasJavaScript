// 8. Faça um programa que receba a idade do usuário, enquanto a resposta do usuário for menor que 18 anos continue a solicitar a idade e mostre uma mensagem quando a idade do usuário for maior que 18.
const prompt = require('prompt-sync')()

let idade
do {
    idade = parseInt(prompt("Digite sua idade: "))
} while (idade < 18);

console.log("Maior que 18 anos");