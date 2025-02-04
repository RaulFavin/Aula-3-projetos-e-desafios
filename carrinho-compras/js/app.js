let total = 0 ; 
document.getElementById('lista-produtos').innerHTML = ' ';
document.getElementById('valor-total').innerText = 'R$0.00';
document.getElementById('quantidade').value = 1;

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];   
    //let valorUnitario = produto.split('R$')[1];
    let valorUnitario = parseFloat(produto.split('R$')[1].replace(',', '.')); // Converte para número
    let quantidade = parseInt(document.getElementById('quantidade').value);
    if (!produto || produto.trim() === ""){
        alert("Selecione um produto válido.");
        return;
    }
    if (quantidade >= 1){
        alert(`Voce adicionou ${quantidade} ${nomeProduto} no carrinho`)
    }else{
        alert('Selecione no min 1 produto')
        return
    }
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">R$${preco.toFixed(2)}</span>
        </section>
      </section>`;
    total += preco;
    let campoTotal = document.getElementById('valor-total').innerText = `R$${total.toFixed(2)}`;
    document.getElementById('quantidade').value = '1';
  
}

function limpar() {
    // document.getElementById('quantidade').value = '';
    // document.getElementById('lista-produtos').innerHTML = '';
    // total = 0;
    // document.getElementById('valor-total').innerText = "R$0.00";

    let total = 0 ; 
    document.getElementById('lista-produtos').innerHTML = ' ';
    document.getElementById('valor-total').innerText = 'R$0.00';
    document.getElementById('quantidade').value = 1;
}