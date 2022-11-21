//
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// let min = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     }else if (b < a && b < c) {
//         console.log(b);
//     }else if (c < b && c < a) {
//         console.log(c);
//     }else {
//         console.log('??????????????');
//     }
// };
//
// min(5, 6, 3);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// let max = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     }else if (b > a && b > c) {
//         console.log(b);
//     }else if (c > b && c > a) {
//         console.log(c);
//     }else {
//         console.log('????????????????');
//     }
// };
//
// max(6, 5, 4);


// - створити функцію яка повертає найбільше число з масиву

// let maxOfArr = (arr) => {
//     let max = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i]
//         }
//     }
//     return max;
// };
//
// console.log(maxOfArr([6, 5, 3, 7, 6, 7, 9]));


// - створити функцію яка повертає найменьше число з масиву

// let minOfArr = (arr) => {
//     let min = arr[0];
//     for (let i =0;i<arr.length;i++) {
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//     }
//     return min;
// };
//
// console.log(minOfArr([5, 5, 5, 5, 7, 8, 3]));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// let sumator = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// };
//
// console.log(sumator([4, 4, 4, 4]));


// - Дано натуральное число n. Выведите все числа от 1 до n.

// let xxx = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// };
//
// xxx(5);
// xxx(7);


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.

// const abPrinter = (a, b) => {
//     if (a < b) {
//         for (let i = a; i <= b; i++) {
//             console.log(i);
//         }
//     }
//     if (a > b) {
//         for (let i = a; i >= b; i--) {
//             console.log(i);
//         }
//     }
//     if (a === b) {
//         console.log('wrong action');
//     }
// };
//
//
// abPrinter(8,2);
// abPrinter(8, 8);
// abPrinter(2, 9);
// abPrinter(5, 5);
// abPrinter(9, 3);


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

// let changer = (arr, index) => {
//     if (arr[index + 1]) {
//         let tepm = arr[index];
//         arr[index] = arr[index + 1];
//         arr[index + 1] = tepm;
//         return arr;
//     }else {
//         console.log('errorrrrr');
//     }
//
// };
//
// let testArr = [1, 2, 3, 4, 5, 6, 7, 8];
//
// let xxx = changer(testArr, 9);
//
// console.log(xxx);


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// let arrr = [1, 2, 0, 3, 0, 4, 5];
// let zeroToEnd = (arr) => {
//     let notZero = [];
//     let zero = [];
//     if (arr.length <= 100) {
//         for (let i = 0, j = 0, h = 0; i < arr.length; i++) {
//             if (arr[i] !== 0) {
//                 notZero[j++] = arr[i];
//             } else if (arr[i] === 0) {
//                 zero[h++] = arr[i];
//             }
//         }
//         for (let a = notZero.length, k = 0; a < arr.length; a++) {
//             notZero[a] = zero[k++];
//         }
//         return notZero;
//     }else {
//         console.log('it is to much for me');
//     }
//     }
//
//
// console.log(zeroToEnd(arrr));
// console.log(zeroToEnd([2, 3, 0, 0, 0, 0, 6, 4, 8, 9, 0, 0, 0, 6, 7, 0]));
// let arrMoreOneHundred = [];
// for (let i = 0; i < 110; i++) {
//     arrMoreOneHundred[i] = i;
// }
// console.log(arrMoreOneHundred);
//
// zeroToEnd(arrMoreOneHundred);


// function foo(array) {
//     const newArray = [];
//     let counter = 0;
//     let index = 0;
//     for (let i = 0; i < array.length; i++) {
//         array[i] ? newArray[index++] = array[i] : counter++;
//     }
//     const num = newArray.length;
//     for (let i = num; i < num + counter; i++) {
//         newArray[i] = 0;
//     }
//     return newArray;
// }


// let zeroToEnd2 = (arr) => {
//     let newArr = [];
//     let counter = 0;
//     let index = 0;
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] ? newArr[index++] = arr[i] : counter++;
//     }
//     const lengthh = newArr.length;
//     for (let i = lengthh; i < lengthh + counter; i++) {
//         newArr[i] = 0;
//     }
//     return newArr;
//
// };



















