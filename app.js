// 1 - 

let indice = 13
let soma = 0
let k = 0

while (k < indice) {
    k = k + 1
    soma = soma + k
}
console.log('--- Questão 1 ---')
console.log(`A soma números é: ${soma}`)

// 2 - Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

const isFebo = (num) => {
    let febo = [0, 1]
    let i = 0
    while (febo[i] < num) {
        febo.push(febo[i] + febo[i + 1])
        i++
    }
    return febo.includes(num)
}
console.log('--- Questão 2 ---')
console.log(isFebo(3))

// 3 - Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:

import data from './dados.json' assert { type: 'json' };

// • O menor valor de faturamento ocorrido em um dia do mês;
const dayBalance = data.filter(item => item.valor > 0);
let initialValue = dayBalance[0].valor; 

let lessBalance = initialValue; 
let lowestSellingDay = '' 

for (let i = 1; i < dayBalance.length; i++) {
  if (dayBalance[i].valor < lessBalance) { 
    lessBalance = dayBalance[i].valor; 
    lowestSellingDay = dayBalance[i].dia 
  }
}
console.log('--- Questão 3.1 ---')
console.log(`O dia ${lowestSellingDay}, apresenta o menor faturamento do mês no valor de: R$${lessBalance.toFixed(2)}`);

// • O maior valor de faturamento ocorrido em um dia do mês;

let highestValue = 0
let biggestSellingDay = ''

data.map(({ dia, valor }) => {
    if (valor > highestValue) {
        highestValue = valor
        biggestSellingDay = dia
    }
})
console.log('--- Questão 3.2 ---')
console.log(`O dia ${biggestSellingDay}, apresenta o maior faturamento do mês no valor de: R$${highestValue.toFixed(2)}`);

// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

let totalAmount = 0
data.map(({ valor }) => totalAmount += valor)
const monthlyAverage = totalAmount / data.length

let countDays = 0
data.map(({ valor }) => {
    if (valor > monthlyAverage) {
        countDays++
    }
})
console.log('--- Questão 3.3 ---')
console.log(`No total foram ${countDays} dias com faturamento superior a média mensal de R$${monthlyAverage.toFixed(2)}`)

// 4 - Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// Calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

// SP – R$67.836,43
// RJ – R$36.678,66
// MG – R$29.229,88
// ES – R$27.165,48
// Outros – R$19.849,53

const faturamento = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
]

let totalMonthlyAmount = 0
faturamento.map(({ valor }) => {
    totalMonthlyAmount += valor
})

console.log('--- Questão 4 ---')
faturamento.map(({ estado, valor }) => {
    const percentage = (valor / totalMonthlyAmount) * 100
    console.log(`${estado} - ${percentage.toFixed(2)}%`)
})


// 5 -  Escreva um programa que inverta os caracteres de um string.
// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

const reverseString = string => string
    .split('')
    .reduce((acc, char) => char + acc, '')

console.log('--- Questão 5 ---')
console.log(reverseString('Banana'));