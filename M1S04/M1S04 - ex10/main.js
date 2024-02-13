// [M1S04] - Ex 10 -Solicitação de dados em função
// Crie uma função que solicite para o usuário através do prompt de comando sua idade, e a partir da idade fornecida, exiba uma mensagem informando se ele é maior de idade ou não. Considere 18 anos como maior idade.

function isOverEighteen() {
  let age = parseInt(prompt("Qual a sua idade?"));
  if (age < 18) {
    console.log("você ainda é menor de idade.");
  } else {
    console.log("Você já atingiu a maior idade.");
  }
}

isOverEighteen();
