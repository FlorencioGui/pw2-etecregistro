const limite = 80;

function verificarVelocidade() {
  const velocidade = document.querySelector("#velocidade").value;
  const resultado = document.querySelector("#resultado");

  resultado.innerHTML = `<code style="background-color: #f0f0f0; padding: 10px; border-radius: 5px;">Velocidade informada: <strong>${velocidade} km/h</strong></code><br><code style="background-color: #f0f0f0; padding: 10px; border-radius: 5px; margin-top: 30px; display: block;">O limite de velocidade é de <strong>${limite} km/h</strong></code>`;

  if (velocidade > limite) {
    resultado.innerHTML += "Veículo multado!";
  } else {
    resultado.innerHTML += "Veículo dentro do limite de velocidade.";
  }
}
