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
    vegano,
  };
  listaDeReceitas.push(novaReceita);
  console.log(`Cadastro da receita ${titulo} feito com sucesso!`);
};
cadastrarReceita(
  2,
  "Panqueca",
  "simples",
  ["Blá", "Blá", "Blá", "Blá", "Blá"],
  "Fritar",
  "youtube.com",
  false
);
console.log(listaDeReceitas);
function exibirReceitas() {
  for (let i = 0; i<listaDeReceitas.length; i++) {
    const receita = listaDeReceitas [i];
    console.log("Título:" +receita.titulo);
  }
  for (let i = 0; i<listaDeReceitas.length; i++) {
    const receita = listaDeReceitas [i];
    console.log("ingredientes:" +receita.ingredientes);
  }
  for (let i=0; i<listaDeReceitas.length; i++){
    const receita = listaDeReceitas [i];
    console.log("Vegano sim ou não: " +receita.vegano);
  }
}

exibirReceitas();
const deletarReceita = (id) => {
  for (let i = 0; i < listaDeReceitas.length; i++) {
    if (listaDeReceitas[i].id === id) {
      listaDeReceitas.splice(i, 1);
      console.log("Receita deletada");
      console.log(listaDeReceitas);
    } else {
      console.log("Receita não encontrada");
    }
  }
};
deletarReceita(1);
