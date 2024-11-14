// Simple method
function isLeapYear (year) {
    if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

// const output = isLeapYear(2025);
// console.log(output);



// Another Method
function isLeapYear2 (year) {
    if (year % 100 !== 0 && year % 4 === 0){
        return true;
    }
    else if (year % 100 === 0 && year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}

const output = isLeapYear2(2024);
const isLeap = isLeapYear2(2100);
const isLeap2 = isLeapYear2(1900);
const isLeap3 = isLeapYear2(2400);
console.log(output, isLeap, isLeap2, isLeap3);