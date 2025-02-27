let age = Number(prompt('Enter your age:'));


function ageCheck() {
    if (isNaN(age)){
        alert('Invalid age');
        return;
    }
    if (age >= 18){
        alert ('You are of legal age');
    }else{
        alert('Not legal age');
    }
    
}

ageCheck();