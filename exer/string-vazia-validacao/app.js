let stringTovalidate = prompt('Enter a string;').trim();
function stringTovalidateCheck(){
    if (stringTovalidate === ''){
        alert('Empty string');
        return;
    }else{
        alert('string is not empty');   
    }

}
stringTovalidateCheck();

function stringCheckOperadorTernario() {
    let result = stringTovalidate === '' ? 'Empty string' : 'String is not empty';
    alert(result);
    
}

stringCheckOperadorTernario();