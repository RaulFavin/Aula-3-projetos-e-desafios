let average = 0;
let numbers = [];
let firstNumber = 0;
let secondNumber = 0;

function findAverage() {
    firstNumber = Number(prompt('Enter the first grade:').trim());
    secondNumber = Number(prompt('Enter the second grade:').trim());
    numbers.push(firstNumber, secondNumber);
        if (isNaN(firstNumber) || isNaN(secondNumber)){
            alert('Tipe a valid number');
            return;
        }else{
            average = (firstNumber + secondNumber) / 2;
            alert(`The average is ${average}`);
        }
        console.log(numbers);
}

findAverage();


