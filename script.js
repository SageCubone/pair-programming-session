// Easy(1)

// const splitNumbers = numbers => {
//     const oddsAndEvens = { odds: [], evens: [] };
//     numbers.forEach(number => {
//         oddsAndEvens[number % 2 === 0 ? 'evens' : 'odds']
//             .push(number);
//     });
//     return oddsAndEvens;
// };
// console.log(splitNumbers([1, 2, 3, 4,]))


// Easy (2)

// var numArray = [1,2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ,14 ,15 ,16, 17, 18, 19, 20]
//     numArray = numArray.filter((number) => {
//         for (var i = 2; i <= Math.sqrt(number); i++) {
//             if (number % i === 0) return false;
//         }
//         return true;
//     });
//     console.log(numArray)

// Medium(2)

// function isAnagram(stringA, stringB) {
//     const sanitizeString = function (str) {
//         return str.toLowerCase().replace(/[^a-z\d]/g, '').split('').sort().join('');
//     }
//     return sanitizeString(stringA) == sanitizeString(stringB)
// }

// console.log(isAnagram('silent', 'listen'));

// Hard (1)

// function matchingBrackets(input){
//     const open = ['(', '[', '{'];
//     const close = [')', ']', '}'];

//     for(let i=0; i<input.length; i++){
//         let openIndex = open.indexOf(input[i]);
//         if(openIndex != -1) {
//             for(let j=i+1; j<input.length; j++) {
//                 let closeIndex = close.indexOf(input[j]);
//                 if(closeIndex != -1)
//                     return true;
//             }

//         }

//     }     
//         return false;
// }

// console.log(matchingBrackets('(monkey)'));