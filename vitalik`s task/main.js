// 4356 --> '4000 + 300 + 50 + 6'

// const number = (number) => {
//     const arr = [];
//     let index = 0;
//
//     while (number) {
//         let i = number % 10 * 10 ** index++;
//         arr.unshift(i);
//         number /= 10;
//         number = parseInt(number);
//         if (i === 0) {
//             arr.shift();
//         }
//     }
//     return arr.join('+');
// }
//
// let s = number(30303);

//
// function d(number) {
//     let arr = [];
//     let index = 0;
//     while (number) {
//         let i = number % 10 * 10 ** index++;
//         arr.unshift(i);
//         console.log(i);
//
//         number /= 10;
//         number = parseInt(number);
//
//         if (i === 0) {
//             arr.shift();
//         }
//
//     }
//
//     return arr.join('+');
// }
//
// let d1 = d(220202);

// console.log(d1);

// let strings = d1.split('+');
// console.log(strings);
//
// function numMaker(arr) {
//     let reduce = arr.reduce((acc, value) => [...acc,+value],[]);
//     return reduce
// }
//
// let numMaker1 = numMaker(strings);
// console.log(numMaker1);
//
// console.log(numMaker1[0]);
// ========================================================== it was the first approach =====================================

// function expanded_from(val) {
//
//     let copy = String(val);
//     let res_arr = []
//
//     for (let i = 0; i < copy.length; ++i) {
//         if (copy[i] !== '0') {
//             let res = copy[i] + '0'.repeat(copy.length - 1 - i)
//             res_arr.push(res);
//         }
//     }
//     return res_arr.join('+');
// }
//
// console.log(expanded_from(2040320));


// function maker(number) {
//
//     let copy = String(number);
//     let arr = [];
//
//     for (let i = 0; i < copy.length; i++) {
//         if (copy[i] !== '0') {
//             let res = copy[i] + '0'.repeat(copy.length - 1 - i);
//             arr.push(res);
//         }
//     }
//     return arr.join('+');
// }
//
// let maker1 = maker(444590067);
// console.log(maker1);
// ========================================================= it was the second approach =====================================

// let ddd = (number) => `${number}`.split('').reduce((acc, value, index, array) =>
//         value !== 0 ? [...acc, value + '0'.repeat(array.length - 1 - index)] : acc
//     , [].join('+'));
//
// let s = ddd(9485663);
// console.log(s);

// ===================================================== it was the third approach Vitalik's approach ===========================