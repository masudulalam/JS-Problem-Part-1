

const friends = ['Abdullah', 'Abdur Rahman', 'Abdullah', 'Abdur Raheem', 'Abdur Rahman',  'Abdus Subhan', 'Abdul Gaffar', 'Abdul Aleem', 'Abdul Gaffar', 'Abdul Gafuur'];

const numbers = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 11, 23, 47, 3, 17,];


function noDuplicate (array) {
    const unique = [];
    for (const element of array) {
        if(unique.includes(element) === false) {
            unique.push(element);
        }
    }  
    return unique;
}

const output = noDuplicate(numbers);
// console.log(friends);
console.log(numbers);
console.log(output);