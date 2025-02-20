// let amigos = [];
  

// function adicionar() {
//     let amigo = document.getElementById('nome-amigo');
//     let listaAmigos = document.getElementById('lista-amigos');
//     amigos.push(amigo.value);
    
//     if (listaAmigos.textContent == '') {
//         listaAmigos.textContent = amigo.value; 
        
//     }else{
//         listaAmigos.textContent = listaAmigos.textContent + ', ' + amigo.value;
        
//     }
//     amigo.value = '';
    
// }

// function sortear() {
//     embaralha(amigos);
//     console.log(amigos);
//     let sorteio = document.getElementById('lista-sorteio');
    

//     for (let i = 0; i < amigos.length; i++){
//         if (i == amigos.length -1 ) {
//             sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>'
//         }else{
//              sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1 ] + '<br>'
//         }
        
//     }
// }

// function embaralha(lista) {

//     for (let indice = lista.length; indice; indice--) {

//         const indiceAleatorio = Math.floor(Math.random() * indice);

//         // atribuição via destructuring
//         [lista[indice - 1], lista[indiceAleatorio]] = 
//             [lista[indiceAleatorio], lista[indice - 1]];
//     }
// }


// function reiniciar() {
//     amigos = [];
//     document.getElementById('lista-amigos').innerHTML = ' ';
//     document.getElementById('lista-sorteio').innerHTML = ' ';
// }

let amigos = [];

function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    let listaAmigos = document.getElementById('lista-amigos');
    amigos.push(amigo.value);

    atualizarListaAmigos();
    amigo.value = '';
}

function remover(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = amigos.map((amigo, index) => 
        `<span>${amigo} <button class="remove-btn" onclick="remover(${index})">X</button></span>`
    ).join(', ');
}

function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[0]}<br>`;
        } else {
            sorteio.innerHTML += `${amigos[i]} --> ${amigos[i + 1]}<br>`;
        }
    }
}

function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = ' ';
    document.getElementById('lista-sorteio').innerHTML = ' ';
}