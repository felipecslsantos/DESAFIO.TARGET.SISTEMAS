/*
    2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
*/

var primeiroTermo = 0;
var segundoTermo = 1;
var numero = primeiroTermo + segundoTermo;

console.log(primeiroTermo);
console.log(segundoTermo);
console.log(numero);

primeiroTermo ++;
segundoTermo ++;

console.log(segundoTermo);

var i;


for(i = 0; i < 10; i++){
    numero = primeiroTermo + segundoTermo;
    console.log(numero);
    primeiroTermo = segundoTermo;
    segundoTermo = numero;
}               