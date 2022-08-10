'Ovo'.indexOf("Ovo");
'Panqueca'.indexOf("Panqueca");
const buscarReceita = (termoBuscado) => {
    const resultado = listaDeReceitas.filter(
      (receita) => 
      receita.titulo.toLowerCase().indexOf(termoBuscado.toLowerCase()) != -1
    );
    if(!resultado.length){
      console.log("Receita não existe");
    } return console.log(resultado);
  }
  buscarReceita(1);