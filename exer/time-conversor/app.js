function hoursToDays(time) {
    return Math.floor(time / 24);
}

function daysToHours(time) {
    return Math.floor(time * 24);
}

function minToHours(time) {
    return Math.floor(time / 60);
}

function hoursToMin(time) {
    return Math.floor(time * 60);
}

function hoursToDayClasses(time) {
    return Math.floor(time / 3);
}


function conversor() {
    let time = parseFloat(prompt('Enter the time:'));
    let unit = prompt('Enter the unit (hours, days, minutes, day classes):').toLowerCase();
    
    let result;

    if (unit === 'hours') {
        result = `${time} hours is equivalent to ${hoursToDays(time)} days, ${hoursToMin(time)} minutes, or ${hoursToDayClasses(time)} day classes.`;
    } else if (unit === 'days') {
        result = `${time} days is equivalent to ${daysToHours(time)} hours.`;
    } else if (unit === 'minutes') {
        result = `${time} minutes is equivalent to ${minToHours(time)} hours.`;
    } else if (unit === 'day classes') {
        let days = hoursToDayClasses(time);
        result = `${time} hours classes is equivalent to ${days}.`;
    } else {
        result = 'Invalid unit';
    }

    alert(result);
}

conversor();
