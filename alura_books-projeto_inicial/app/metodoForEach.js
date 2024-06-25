const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponveis = document.getElementById('valor_total_livros_disponiveis')

//criando cada livro na tela
function exibirOsLivrosNaTela(listaDeLivros){
  elementoComValorTotalDeLivrosDisponveis.innerHTML = ''
  elementoParaInserirLivros.innerHTML = '' //limpar os outros livros e quando aberta o botao so aparece o do botao
    listaDeLivros.forEach(livro => {
      //let disponabilidade = verificarDisponabilidadeDoLivro(livro)
      let disponabilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
      <img class="${disponabilidade}" src="${livro.imagem}" alt="${livro.alt} />
      <h2 class="livro__titulo">
        ${livro.titulo}
        
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>
        `// ${} pega da requicição e o livro é o criado no forEach e o ponto é o nome dos titiluos da requisição
    });
    
}

//function verificarDisponabilidadeDoLivro(livro){
 // if(livro.quantidade > 0){
  //  return 'livro__imagens'
  //}else{
    //return 'livro__imagens indisponivel'
  //}
//}