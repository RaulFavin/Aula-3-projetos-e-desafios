let celsius = null;
let fahrenheit = "77";



function celsiusToFahre(celsius) {
    fahrenheit = celsius * (9/5) + 32;
    console.log(fahrenheit);
}
//celsiusToFahre(25);

function FahreTocelsius(fahrenheit) {
    celsius = (fahrenheit - 32) * 5/9;
    console.log(celsius)
}

//FahreTocelsius(77);

function conversor() {
    if (!celsius) {
        celsius = (fahrenheit - 32) * 5/9;
        console.log(celsius);
    }else{
        fahrenheit = celsius * (9/5) + 32;
        console.log(fahrenheit);
    }
    
}
conversor();


