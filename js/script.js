const imagens = [
  "dado1.png",
  "dado2.png",
  "dado3.png",
  "dado4.png",
  "dado5.png",
  "dado6.png"
];

const botao = document.getElementById("rolarDado");
const imagemDado = document.getElementById("imagemDado");

botao.addEventListener("click", () => {

  const indice = Math.floor(Math.random() * imagens.length);

  imagemDado.src = imagens[indice];
   numeroDado.textContent = "O número foi: " + (indice + 1);
});
