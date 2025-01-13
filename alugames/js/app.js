// listaDeJogos = ['game-1' , 'game-2' , 'game-3']

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').innerHTML;
   
    // if (imagem.classList.contains('dashboard__item__img--rented')) {
    //     imagem.classList.remove('dashboard__item__img--rented');
    //  }else{
    //     imagem.classList.add('dashboard__item__img--rented');
    //  } 
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar'; //? Altera o texto do botão
        botao.classList.remove('dashboard__item__button--return'); // Remove estilo de devolução
        alert(`Voce esta devolvendo o jogo ${nomeJogo}`)
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver'; // ? Altera o texto do botão
        botao.classList.add('dashboard__item__button--return'); // Adiciona estilo de devolução
        alert(`Voce esta alugando o jogo ${nomeJogo}`)
    }

} 


