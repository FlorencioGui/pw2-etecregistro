const caixaMagica = document.getElementById("caixaMagica");

function entradaMouse() {
  caixaMagica.innerText = `Você entrou na caixa mágica!`;
  caixaMagica.style.backgroundColor = "lightgreen";
}
function saidaMouse() {
  caixaMagica.innerText = `Você saiu da caixa mágica!`;
  caixaMagica.style.backgroundColor = "lightblue";
}
function cliqueMouse() {
  caixaMagica.innerText = `Você clicou na caixa mágica!`;
  caixaMagica.style.backgroundColor = "lightcoral";
}

// "Escutando" os eventos realizados com o elemento da DOM
caixaMagica.addEventListener("mouseenter", entradaMouse);
caixaMagica.addEventListener("mouseleave", saidaMouse);
caixaMagica.addEventListener("click", cliqueMouse);
