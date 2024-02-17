// [M1S04] - Ex 7 - Função cumprimentos
// Crie uma função que receba o valor de uma hora qualquer, e exibe no console uma mensagem de “bom dia”, “boa tarde” ou “boa noite”, de acordo com a hora passada.

let getHour = document.getElementById("hour");
const greetingsText = document.getElementById("greetings-text");

function greetings() {
  let getValue = getHour.value;
  let hour = getValue.split(":")[0];

  if (hour < 12 && hour >= 5) {
    greetingsText.textContent = "Bom dia! \u2615";
    console.log("Bom dia! \u2615");
  } else if (hour >= 12 && hour < 18) {
    greetingsText.textContent = "Boa tarde! \u{1F31E}";
    console.log("Boa tarde! \u{1F31E}");
  } else {
    greetingsText.textContent = "Boa noite! \u{1F319}";
    console.log("Boa noite! \u{1F319}");
  }
}

getHour.addEventListener("keydown", (event) => {
  if (event.keyCode === 13) {
    greetings();
  }
});
