async function buscar_livros() {

    let requisicao = await fetch('/dados');

    const data = await requisicao.json();
    // console.log(data);

    return data.livros;
}

async function recomenda_livro() {
    const data = await buscar_livros();

    let numIteracoes = 0;

    data.forEach(livro => {
        numIteracoes++;
    });

    // Gerando um número aleatório
    let numeroAleatorio = Math.floor(Math.random() * numIteracoes) + 1;

    // Exibindo o número aleatório
    console.log(`Número aleatório é: ${numeroAleatorio}`);

    let livro = data.find(livro => livro.id === numeroAleatorio);
    let titulo = document.getElementById('titulo');
    titulo.innerText = `Título: ${livro.titulo}`;
    let ano = document.getElementById('ano');
    ano.innerText = `Ano: ${livro.ano_publicacao}`;
    let autor = document.getElementById('autor');
    autor.innerText = `Autor: ${livro.autor}`;
}