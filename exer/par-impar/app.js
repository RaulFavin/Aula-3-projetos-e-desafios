let numero = parseInt(prompt("Digite um numero positivo"));
// function parImpar(numero) {
//     if (isNaN(numero) || numero < 0){
//         alert("Digite um numero valido");
//         return;
//     }
//     if(numero % 2 == 0)
//         alert(`${numero} é par`)
//     else{
//         alert(`${numero} é impar`)
//     }
// }

function parImparIfTernario() {
    isNaN(numero) === 0 ? alert("Zero") : numero % 2 === 0 ? alert("Par") : alert("Impar")
}


parImparIfTernario();
parImpar(numero);