function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // if(quantidade >(ate - de +1)) {
    //     alert("A quantidade n pode ser maior que o outro burro")
    //     return;
    // }
    
    
    // if (isNaN(quantidade) || isNaN(de) || isNaN(ate)) {
    //     alert("Por favor, preencha todos os campos com valores numéricos.");
    //     return;
    // }

    // if (quantidade > 20) {
    //     alert("A quantidade de números sorteados não pode ser maior que 20.");
    //     return;
    // }

    // if (de >= ate) {
    //     alert("O valor 'Do número' deve ser menor que 'Até o número'.");
    //     return;
    // }

    // if (quantidade > (ate - de + 1)) {
    //     alert("A quantidade de números sorteados não pode ser maior que o intervalo disponível.");
    //     return;
    // }

    let sorteados = [];
    let numero;
    if(quantidade + sorteados.length >= 20){
        alert(`Maximo atingido`)
        return;
    }
    for (let  i = 0; i < quantidade; i++){
        numero = sorteador(de, ate)

        while(sorteados.includes(numero)){
        numero = sorteador(de, ate);
        }
        sorteados.push(numero);
        alterarBotao();
    }

    let resultado = document.getElementById ("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`


}

function sorteador(min , max) {
    return Math.floor(Math.random() * (max - min +1)) + min; 
}
    
function alterarBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');
    }else{
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }

}   


function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarBotao();
}

