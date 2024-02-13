// [M1S04] - Ex 5 -Estruturas condicionais
// Utilize uma estrutura condicional (if,else) para verificar se um número é positivo, negativo ou zero. Exiba os valores no console.log().

let userInput = parseInt(prompt("Digite um número: "));

function checkNumber() {
  if (userInput > 0) {
    console.log(`O número ${userInput} é positivo.`);
  } else if (userInput < 0) {
    console.log(`O número ${userInput} é negativo.`);
  } else {
    console.log(`${userInput} (zero).`);
  }
}

checkNumber();
