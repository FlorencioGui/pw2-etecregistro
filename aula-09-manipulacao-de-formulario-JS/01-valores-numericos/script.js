const inputn1 = document.querySelector("#num1");
const inputn2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");

function somar() {
  const num1 = Number(inputn1.value);
  const num2 = Number(inputn2.value);
  const sum = num1 + num2;
  resultado.innerHTML = `<code style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">Resultado: <strong>${sum}</strong></code>`;
}

function subtrair() {
  const num1 = Number(inputn1.value);
  const num2 = Number(inputn2.value);
  const difference = num1 - num2;
  resultado.innerHTML = `<code style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">Resultado: <strong>${difference}</strong></code>`;
}

function multiplicar() {
  const num1 = Number(inputn1.value);
  const num2 = Number(inputn2.value);
  const product = num1 * num2;
  resultado.innerHTML = `<code style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">Resultado: <strong>${product}</strong></code>`;
}

function dividir() {
  const num1 = Number(inputn1.value);
  const num2 = Number(inputn2.value);
  if (num2 === 0) {
    resultado.innerHTML = `<code style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">Erro: Divisão por zero não é permitida.</code>`;
  } else {
    const quotient = num1 / num2;
    resultado.innerHTML = `<code style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">Resultado: <strong>${quotient}</strong></code>`;
  }
}
