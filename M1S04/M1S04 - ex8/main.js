// [M1S04] - Ex 8 - Função par/impar
// Implemente uma função que determine se um número é par ou ímpar.

function evenOrOdd() {
  let userInput = parseInt(prompt("digite um número: "));

  if (userInput % 2 === 0) {
    console.log(`O número ${userInput} é par.`);
  } else {
    console.log(`O número ${userInput} é ímpar.`);
  }
}

evenOrOdd();
