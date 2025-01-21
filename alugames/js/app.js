// listaDeJogos = ['game-1' , 'game-2' , 'game-3']

// function alterarStatus(id) {
//     let gameClicado = document.getElementById(`game-${id}`);
//     let imagem = gameClicado.querySelector('.dashboard__item__img');
//     let botao = gameClicado.querySelector('.dashboard__item__button');
//     let nomeJogo = gameClicado.querySelector('.dashboard__item__name').innerHTML;
//     let text;
    
//     if (imagem.classList.contains('dashboard__item__img--rented')) {
//         imagem.classList.remove('dashboard__item__img--rented');
//         botao.textContent = 'Alugar'; //? Altera o texto do botão
//         botao.classList.remove('dashboard__item__button--return'); // Remove estilo de devolução

        
//     } else {
//         imagem.classList.add('dashboard__item__img--rented');
//         botao.textContent = 'Devolver'; // ? Altera o texto do botão
//         botao.classList.add('dashboard__item__button--return'); // Adiciona estilo de devolução
        
//     }

// } 

let jogosAlugados = 0 ;
let listaDeJogos = [] ; 

function contarExibirJogos(){
    console.log(`Total de jogos alugados ${jogosAlugados}`)
    
}

function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').innerHTML;


    // Verifica se o jogo já está alugado
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Confirmação para devolver o jogo
        if (window.confirm(`Você está devolvendo o jogo "${nomeJogo}". Deseja continuar?`)) {
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar'; // Altera o texto do botão
            botao.classList.remove('dashboard__item__button--return'); // Remove estilo de devolução
            alert(`Você devolveu o jogo "${nomeJogo}".`); // Exibe mensagem
            jogosAlugados--;
            contarExibirJogos()
        }
    } else {
        // Confirmação para alugar o jogo
        if (window.confirm(`Você está alugando o jogo "${nomeJogo}". Deseja continuar?`)) {
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver'; // Altera o texto do botão
            botao.classList.add('dashboard__item__button--return'); // Adiciona estilo de devolução
            alert(`Você alugou o jogo "${nomeJogo}".`); // Exibe mensagem
            jogosAlugados++;
            contarExibirJogos()
        }
    }
}
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarExibirJogos();
});
