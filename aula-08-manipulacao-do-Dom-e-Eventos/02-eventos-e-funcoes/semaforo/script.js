const parar = document.getElementById("Parar");
const atencao = document.getElementById("Atencao");
const siga = document.getElementById("Siga");

function tudoCinza() {
  parar.style.background = "gray";
  atencao.style.background = "gray";
  siga.style.background = "gray";
}

function Parar() {
  tudoCinza();
  parar.style.background = "red";
}
function Atencao() {
  tudoCinza();
  atencao.style.background = "yellow";
}
function Siga() {
  tudoCinza();
  siga.style.background = "green";
}

// Legal o comentario de que se voê quiser mudar a cor de um elemento sem ter que guardar ele em uma variável primeiro, você pode usaro seguinte:
// document.getElementById('Parar').style.background = "red";
// Funciona do mesmo jeito, mas é mais eficiente guardar o elemento em uma variável, caso você vá usá-lo mais de uma vez.