//SELECIONANDO UM ELEMENTO PELA TAG
const p0 = window.document.getElementsByTagName("p")[0];

//ALTERANDO AS CARACTERÍSTICAS DO ELEMENTO
p0.style.color = "red";
p0.innerText = "Alterando o texto do primeiro parágrafo (=";

const p1 = window.document.getElementsByTagName("p")[1];
p1.style.color = "blue";

//CAPTURANDO O CORPO DO SITE
const corpoSite = window.document.body;

//MUDANDO SUA COR
corpoSite.style.background = "#a1be96";

document.write(`No 2º paragrafo do site esta escrito: ${p1.innerText}`);

//===============
//DESAFIO DA AULA
//===============
const peloID = window.document.getElementById("ID");
peloID.innerText = "Selecionando elementos pelo ID";
peloID.style.color = "white";
peloID.style.background = "purple";

const peloNOME = window.document.getElementsByName("NOME")[0];
peloNOME.innerText = "Selecionando elementos pelo NOME";
peloNOME.style.color = "white";
peloNOME.style.background = "blue";

const pelaCLASSE = window.document.getElementsByClassName("CLASSE")[0];
pelaCLASSE.innerText = "Selecionando elementos pela CLASSE";
pelaCLASSE.style.color = "white";
pelaCLASSE.style.background = "red";

const peloSELETOR = window.document.querySelector(".SELETOR");
peloSELETOR.innerText = "Selecionando elemento pelo SELETOR";
peloSELETOR.style.color = "black";
peloSELETOR.style.background = "yellow";

const div = window.document.querySelector(".atividade");
div.style.margin = "0";
