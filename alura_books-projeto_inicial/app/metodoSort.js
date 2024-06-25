 let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')
 btnOrdenarPorPreco.addEventListener('click', ordenarLIvrosPorPreco)

 function ordenarLIvrosPorPreco(){
    let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)
 exibirOsLivrosNaTela(livrosOrdenados)

 }