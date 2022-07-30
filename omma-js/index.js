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
console.log(listaDeReceitas)
