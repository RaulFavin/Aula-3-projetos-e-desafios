let numeroDigitado1 = parseInt(prompt("Digite o primeiro numero"));
let promptDoCalculo = prompt("Digite um dos operadores +, - , / ,*");
let numeroDigitado2 = parseInt(prompt("Digite o segundo numero"));


function calculo() {
    let num1 = parseInt(numeroDigitado1);
    let num2 = parseInt(numeroDigitado2);
    if (promptDoCalculo == "+") {
        soma(num1, num2);
    }else if (promptDoCalculo == "-") {
        subtra(num1, num2);
    }else if (promptDoCalculo == "*") {
        multip(num1, num2);
    }else if (promptDoCalculo == "/"){
        divisao(num1, num2);
    }else{
        console.log("operador invalido");
    }
}


function soma(numeroDigitado1 , numeroDigitado2) {
    let resposta = numeroDigitado1 + numeroDigitado2;
    console.log(resposta);
}

function multip(numeroDigitado1 , numeroDigitado2) {
    let resposta = numeroDigitado1 * numeroDigitado2;
    console.log(resposta);
}

function subtra(numeroDigitado1, numeroDigitado2) {
    let resposta = numeroDigitado1 - numeroDigitado2;
    console.log(resposta);
}

function divisao(numeroDigitado1, numeroDigitado2) {
    let resposta = numeroDigitado1 / numeroDigitado2;
    if (numeroDigitado2 == 0)
        alert("ERRO, DIVISAO POR 0");
    else{
        console.log(resposta);
    }
    
}

calculo();


// function adicao(a, b) {
//     return a + b;
// }

// function subtracao(a, b) {
//     return a - b;
// }

// function multiplicacao(a, b) {
//     return a * b;
// }

// function divisao(a, b) {
//     if (b !== 0) {
//         return a / b;
//     } else {
//         return "Erro: divisão por zero.";
//     }
// }

// function calculadora(operacao, a, b) {
//     switch (operacao) {
//         case 'soma':
//             return adicao(a, b);
//         case 'subtracao':
//             return subtracao(a, b);
//         case 'multiplicacao':
//             return multiplicacao(a, b);
//         case 'divisao':
//             return divisao(a, b);
//         default:
//             return "Operação inválida.";
//     }
// }

// // Exemplo de uso
// let resultado = calculadora('soma', 5, 3);
// console.log(resultado);  // Saída esperada: 8