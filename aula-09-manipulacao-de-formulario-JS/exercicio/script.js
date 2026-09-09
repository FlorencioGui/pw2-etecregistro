const inputn1 = document.querySelector("#num1");
const inputn2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");

function somar() {
  const num1 = Number(inputn1.value);
  const num2 = Number(inputn2.value);
  const sum = num1 + num2;
  resultado.innerText = `${sum}`;
}

function subtrair() {
  const num1 = Number(inputn1.value);
  const num2 = Number(inputn2.value);
  const difference = num1 - num2;
  resultado.innerText = `${difference}`;
}

function multiplicar() {
  const num1 = Number(inputn1.value);
  const num2 = Number(inputn2.value);
  const product = num1 * num2;
  resultado.innerText = `${product}`;
}

function dividir() {
  const num1 = Number(inputn1.value);
  const num2 = Number(inputn2.value);
  if (num2 === 0) {
    resultado.innerText = `Erro: Divisão por zero não é permitida.`;
  } else {
    const resultadoDivisao = num1 / num2;
    resultado.innerText = `${resultadoDivisao}`;
  }
}

function limpar() {
  inputn1.value = "";
  inputn2.value = "";
  resultado.innerText = "--";
}
