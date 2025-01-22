function retornarNumeros(a, b, c) {
    numeros = [a ,b, c]
    numeros.sort((x,y) => x - y);
    console.log(`${numeros}`);
    return numeros;
}

retornarNumeros(5, 12 ,6)
