const nomeEmpresa = "Omma";
console.log(nomeEmpresa);
const listaDeReceitas = [
  {
    id: 1,
    titulo: "Bolo",
    dificuldade: "moderada",
    ingredientes: ["Blá", "Blá", "Blá", "Blá", "Blá"],
    preparo: "Assar",
    link: "youtube.com",
    vegano: false,
  },
];
const cadastrarReceita = (
  id,
  titulo,
  dificuldade,
  ingredientes,
  preparo,
  link,
  vegano
) => {
  const novaReceita = {
    id,
    titulo,
    dificuldade,
    ingredientes,
    preparo,
    link,
    vegano
  };
  listaDeReceitas.push(novaReceita);
  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};

const btnEnviar = document.querySelector("#btnEnviar");
btnEnviar.onClick = (evento) => {
  evento.preventDefault();

  let inputTitulo = document.querySelector("#titulo");
  let inputDificuldade = document.querySelector("#dificuldade");
  let inputIngredientes = document.querySelector("#ingredientes");
  let inputPreparo = document.querySelector("#preparo");
  let inputLink = document.querySelector("#link");
  let inputVegano = document.querySelector('input[name="vegano"]:checked');

  let novaReceita = {
    id: listaDeReceitas.length,
    titulo: inputTitulo.value,
    dificuldade: inputDificuldade.value,
    ingredientes: inputIngredientes.value.split(""),
    preparo: inputPreparo.value,
    link: inputLink.value,
    vegano: inputVegano.value
  }
  console.log(novaReceita);
  listaDeReceitas.push(novaReceita);
  exibirReceitas();
}
function exibirReceitas() {
  let htmlReceitas = "";
  for (let i = 0; i < listaDeReceitas.length; i++) {
    htmlReceitas += `
        <article class="card">
        <h2> ${listaDeReceitas[i].titulo}</h2>
        Dificuldade: ${listaDeReceitas[i].dificuldade}<br>
        <br>Ingredientes: ${listaDeReceitas[i].ingredientes}<br>
        <br>Preparo: ${listaDeReceitas[i].preparo}<br>
        <br>Link: ${listaDeReceitas[i].link}<br>
        <br>Vegano? ${listaDeReceitas[i].vegano}<br>
        </article>`;
  }

  let painel = document.querySelector(".painel-receitas");
  painel.innerHTML = htmlReceitas;
}
exibirReceitas();
