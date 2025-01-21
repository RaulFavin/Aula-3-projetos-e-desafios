function verificarPalindromo() {
    const frase = document.getElementById('frase').value;

    // Remove espaços, pontuação e transforma tudo para minúsculas
    const textoFormatado = frase.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Verifica se o texto formatado é igual ao seu reverso
    const ehPalindromo = textoFormatado === textoFormatado.split('').reverse().join('');

    const resultado = document.getElementById('resultado');
    if (ehPalindromo) {
        resultado.textContent = "É um palíndromo!";
        resultado.style.color = "green";
    } else {
        resultado.textContent = "Não é um palíndromo.";
        resultado.style.color = "red";
    }
}


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
