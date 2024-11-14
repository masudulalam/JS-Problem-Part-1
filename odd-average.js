function oddAverage (numbers) {
    const oddNumbers = [];
    for (number of numbers) {
        if (number % 2 === 1) {
            oddNumbers.push(number);
        }
    }
    const oddNumbersSize = oddNumbers.length;
    let oddNumbersSum = 0;

    for (const number of oddNumbers) {
        oddNumbersSum += number;
    }
    const oddNumbersAverage = oddNumbersSum / oddNumbersSize

    return oddNumbersAverage;
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const output = oddAverage(numbers);
console.log(output);