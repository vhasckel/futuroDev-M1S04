// [M1S04] - Ex 7 - Função cumprimentos
// Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

function greetings(hour) {
  if (hour < 12) {
    console.log("Bom dia! \u2615");
  } else if (hour >= 12 && hour < 18) {
    console.log("boa tarde! \u{1F31E}");
  } else {
    console.log("boa noite! \u{1F319}");
  }
}

greetings(19);
