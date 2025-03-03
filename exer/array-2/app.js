let imputNames = prompt('Enter names separated by commas:');
let arrayNames = imputNames.toUpperCase().split(',').map(name => name.trim());

function verifyIncludes(arr, element) {
    return arr.includes(element.toUpperCase());
}
   // console.log(arrayNames);
    //console.log(verifyIncludes(arrayNames, 'Raul'));

let strings =['Maca', 'Banana', 'Pera', 'Uva'];

console.log(strings.includes('Banana'));