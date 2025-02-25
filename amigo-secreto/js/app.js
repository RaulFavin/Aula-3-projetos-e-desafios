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
    let nameUpper = amigo.value.toUpperCase();
    let regex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

    if (amigo.value.trim() == ''){
        alert("Digite um nome para adicionar a lista");
        return;
    }if (amigos.includes(nameUpper)){
        alert("Este nome já foi adicionado a lista");
        return;
    }else if (!regex.test(amigo.value)){
        alert("Digite um nome válido");
        return;
    }
    
    

    amigos.push(nameUpper);
    atualizarListaAmigos();
    amigo.value = '';
}

function remover(index) {
    amigos.splice(index, 1);
    atualizarListaAmigos();
    atualizarSorteio();
}

function atualizarSorteio() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';
}


function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('lista-amigos');
    listaAmigos.innerHTML = amigos.map((amigo, index) => 
        `<span>${amigo} <button class="remove-btn" onclick="remover(${index})">X</button></span>`
    ).join(', ');
}

function sortear() {
    if (amigos.length < 3) {
        alert("Adicione pelo menos 3 amigos para sortear");
        return;
    }
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
    document.getElementById('nome-amigo').value = '';
}

// function removerDuplicatas(array) {
//     let resultado = [];
//     for (let i = 0; i < array.length;  i++){
//         if (!resultado.includes(array[i])){
//             resultado.push(array[i]);
//         }
//     }
//     return resultado;
// }