// [M1S04] - Ex 9 - Switch/case
// Use um switch para exibir mensagens diferentes com base em uma condição.

let userInput = prompt(
  "Em uma escala de 1 a 10, como você está se sentindo hoje?"
);

function showMessage() {
  switch (true) {
    case userInput >= 1 && userInput <= 3:
      console.log(
        "Está tudo bem se sentir para baixo as vezes, mas que tal preparar um chá e fazer algo que voce goste?"
      );
      break;
    case userInput >= 4 && userInput <= 7:
      console.log(
        "Que tal fazer um pouco de exercício físico, comer algo saudável, aproveitar um tempo para relaxar ou praticar um hobby, e focar um pouco em autocuidado?"
      );
      break;
    case userInput >= 8 && userInput <= 10:
      console.log(
        "Parabéns pelo esforço! Lembre-se de manter esses bons hábitos para continuar se sentindo bem. A prática regular de exercícios, uma alimentação saudável, momentos de lazer e autocuidado são fundamentais para o seu bem-estar."
      );
      break;
    default:
      console.log("Por favor, forneça um número válido de 1 a 10.");
  }
}

showMessage();
