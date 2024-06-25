const botoes = document.querySelectorAll('.btn')
botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros(){
    const elementoBtn = document.getElementById(this.id)
    const categoria = elementoBtn.value
    let livrosFiltrados = categoria == 'disponivel' ? filtraPorDisponabilidade() : filtraPorCategoria(categoria)
   // console.table(livrosFiltrados)
   exibirOsLivrosNaTela(livrosFiltrados)
   if(categoria == 'disponivel'){
    const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
    exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal)
   }
}

function filtraPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtraPorDisponabilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDosLivrosDisponiveisNaTela(valorTotal){
    elementoComValorTotalDeLivrosDisponveis.innerHTML =`
     <div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>
    `
}