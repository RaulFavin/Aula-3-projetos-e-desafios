function somaDosProdutos(array) {
    let somaPar= 0;
    let imparProduto = 1;

        for (let numero of array){
            if (numero % 2 === 0){
                somaPar += numero;
            }else {
                imparProduto *= numero;
            }
        }
        return {
            somaPar,
            imparProduto
        };
}

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const resultado = somaDosProdutos(numero);
console.log("Soma dos numneros pares:" ,resultado.somaPar);
console.log("Produto dos numeros impares:" ,resultado.imparProduto); 