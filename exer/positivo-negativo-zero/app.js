let number = parseFloat(prompt('Enter a number;'));
let result;

function positiveNegativeZero() {
    if(number > 0){
        result = 'positive';
    }else if (number < 0){
        result = 'negativo';
    }
    else{
        result = 'zero';
    }
    alert(result);
}
positiveNegativeZero();