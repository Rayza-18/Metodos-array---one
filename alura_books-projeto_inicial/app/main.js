let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBuscaLivrosDaAPI()

async function getBuscaLivrosDaAPI(){
    const res = await fetch(endpointDaAPI);
    //wait significa promessa
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirOsLivrosNaTela(livros)
}

