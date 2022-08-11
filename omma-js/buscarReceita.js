const buscarReceita = (termo) => {
    const resultado = listaDeReceitas.filter((receita) =>{
      return receita.titulo.toLowerCase().indexOf(termo) != -1;
  });
  console.log("Tem isso nas receitas!"+resultado);
  resultado.forEach((listaDeReceitas) => console.log(`\n Titulo: ${listaDeReceitas.titulo} \n Ingredientes:${listaDeReceitas.ingredientes.map(ingrediente)}\n Vegano: ${listaDeReceitas.vegano? "sim":"não"}`));
  
}
buscarReceita('simples')