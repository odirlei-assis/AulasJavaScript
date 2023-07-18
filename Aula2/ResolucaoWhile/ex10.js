// 10. Faça um programa que receba um número do usuário e continue a pedir o numero se o numero for diferente de 0.

const prompt = require('prompt-sync')()
let numero;

do {
    
    numero = prompt("Digite um numero: ") 

} while (numero != "0");