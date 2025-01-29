let total = 0 ; 

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];   
    //let valorUnitario = produto.split('R$')[1];
    let valorUnitario = parseInt(produto.split('R$')[1].replace(',', '.')); // Converte para número
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span>${nomeProduto}<span class="texto-azul">R$${preco.toFixed(2)}</span>
        </section>
      </section>`;
    total = total + preco ;
    
  
}

function limpar() {
    
}