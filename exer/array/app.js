let minhaListas = [1, 1, 2, 3];
let outraLista= [4, 5, 5, 4, 6];

let novaLista = minhaListas.concat(outraLista);
//console.log(novaLista);

novaLista.splice(5, 1);
novaLista = embaralhar(novaLista);
console.log(novaLista);

function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function removerDuplicatas(array) {
    let resultado = [];
    for (let i = 0; i < array.length;  i++){
        if (!resultado.includes(array[i])){
            resultado.push(array[i]);
        }
    }
    return resultado;
}
console.log(removerDuplicatas(novaLista));