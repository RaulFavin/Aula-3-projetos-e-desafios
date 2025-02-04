// function verificarPalindromo() {
//     const frase = document.getElementById('frase').value;

//     // Remove espaços, pontuação e transforma tudo para minúsculas
//     const textoFormatado = frase.toLowerCase().replace(/[^a-z0-9]/g, '');

//     // Verifica se o texto formatado é igual ao seu reverso
//     const ehPalindromo = textoFormatado === textoFormatado.split('').reverse().join('');

//     const resultado = document.getElementById('resultado');
//     if (ehPalindromo) {
//         resultado.textContent = "É um palíndromo!";
//         resultado.style.color = "green";
//     } else {
//         resultado.textContent = "Não é um palíndromo.";
//         resultado.style.color = "red";
//     }
// }


// function ehPalindromo(texto) {
//     // Remove espaços, pontuação e transforma tudo para minúsculas
//     const textoFormatado = texto.toLowerCase().replace(/[^a-z0-9]/g, '');

//     // Verifica se o texto formatado é igual ao seu reverso
//     return textoFormatado === textoFormatado.split('').reverse().join('');
// }

// // Entrada do usuário
// const frase = prompt("Digite uma palavra ou frase para verificar se é um palíndromo:");

// if (ehPalindromo(frase)) {
//     console.log("É um palíndromo!");
// } else {
//     console.log("Não é um palíndromo.");
// }

essaPalavraEPalindromo()

function essaPalavraEPalindromo() {
    var palavra = "peido" ;
    var separandoPalvra = palavra.split("");
    var palavraInvertida = separandoPalvra.reverse();
    var palavraInvertida = palavraInvertida.join("");
     if (palavra == palavraInvertida){
        console.log(`A palvra ${palavra} e um palindromo`)
     }else{
        console.log(`A palvra ${palavra} nao e um palindromo`)
     }
}

const duasFrases = " O rato roueu a roupa do rei de roma, O rei de roma. taratra";
const separador = duasFrases.split(',');
console.log(separador);

const numerAseparar = 10 ,20 ,30 ,40;
const numerosSeparados = numerAseparar.split(',')
console.log(numerosSeparados);