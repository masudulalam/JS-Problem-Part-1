// Inch to Feet
function inchToFeet (inch) {
    const feet = inch / 12;

    return feet;
}

// const output = inchToFeet(70.5);

// console.log(output, 'Feet');

// output feet and inch
function inchToFeet2 (inch) {
    const feetFraction = inch / 12;
    const feetInt = parseInt(feetFraction);
    const inchRemaining = inch % 12;
    const result = feetInt + ' feet' + ' ' + inchRemaining + ' Inch';

    return result;
}

// const output = inchToFeet2(70.5);

// console.log(output);


// mile to kilometer function
function mileToKilometer (mile) {
    const kilometer = mile * 1.609;

    return kilometer;
}

// const output = mileToKilometer(5);

// console.log(output, 'kilometer');


// kilometer to mile function
function kilometerToMile (kilometer) {
    const mile = kilometer * 0.621371;

    return mile;
}

const output = kilometerToMile(14);

console.log(output, 'mile');