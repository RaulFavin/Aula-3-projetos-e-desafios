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
