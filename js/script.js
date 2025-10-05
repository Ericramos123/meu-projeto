const imagens = [
  "img/dado1.png",
  "img/dado2.png",
  "img/dado3.png",
  "img/dado4.png",
  "img/dado5.png",
  "img/dado6.png"
];

const botao = document.getElementById("rolarDado");
const imagemDado = document.getElementById("imagemDado");
const numeroDado = document.getElementById("numeroDado");


botao.addEventListener("click", () => {

  const indice = Math.floor(Math.random() * imagens.length);

  imagemDado.src = imagens[indice];
   numeroDado.textContent = "O número foi: " + (indice + 1);
});


