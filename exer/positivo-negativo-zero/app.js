let number = parseFloat(prompt('Enter a number;'));
let result;

// function positiveNegativeZero() {
//     if(number > 0){
//         result = 'positive';
//     }else if (number < 0){
//         result = 'negativo';
//     }
//     else{
//         result = 'zero';
//     }
//     alert(result);
// }
// positiveNegativeZero();


function postiveOperadorTernario() {
    let result = number > 0 ? 'positive' : number < 0 ? 'negative' : 'zero';
    alert(result);
    
}

postiveOperadorTernario();