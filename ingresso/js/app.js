document.getElementById('qtd').value = 1;

function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = parseInt(document.getElementById('qtd').value);

    if (isNaN(qtd) || qtd <= 0){
        alert("Quantidade invalida");
        return
    }
    
    
    if (tipo == 'pista') {
        comprarPista(qtd);
    }else if (tipo == 'inferior'){
        comprarInferior(qtd);
    }else{
        comprarSuperior(qtd);
    }
   
    // if (tipo == 'pista') {
    //     comprarPista(qtd)
    // }

    // if(tipo == 'inferior') {
    //     comprarInferior(qtd)
    // }

    // if (tipo == 'superior') {
    //     comprarSuperior(qtd)
    // }
    document.getElementById('qtd').value = 1;
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    if (qtd > qtdPista) {
        alert('Esgotou');
    }else{
        qtdPista = qtdPista - qtd;
        document.getElementById('qtd-pista').textContent = qtdPista;
        alert('Comprou');
    }

   
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if (qtd > qtdInferior) {
        alert('Esgotado');
    }else{
        qtdInferior = qtdInferior - qtd;
        document.getElementById('qtd-inferior').textContent = qtdInferior
        alert('Comprou');
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if (qtd > qtdSuperior) {
        alert('Esgotado');
    }else{
        qtdSuperior = qtdSuperior - qtd;
        ocument.getElementById('qtd-superior').textContent = qtdSuperior;
        alert('Comprou');
    }
}