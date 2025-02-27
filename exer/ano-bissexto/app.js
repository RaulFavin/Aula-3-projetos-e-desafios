let year = prompt('Enter a year;').trim();

function isLeapYear(year) {

    if (isNaN(year) ||  year === ''){
        alert('Invalid year');
        return;
    }
    year = Number(year);

    if (year % 400 === 0) {
        alert('Leap year');
        return true;
    } else if (year % 100 === 0) {
        alert('Not a leap year');
        return false;
    } else if (year % 4 === 0) {
        alert('Leap year');
        return true;
    } else {
        alert('Not a leap year');
        return false;
    }
}

isLeapYear(year);