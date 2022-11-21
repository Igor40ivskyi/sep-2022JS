// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function minNumberFinder(a, b, c) {
//     let min = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]) {
//             min = arguments[i];
//         }
//     }
//     return min;
// }
//
// console.log(minNumberFinder(6, 6, 3));
//
//
// function minNumber() {
//     let min = arguments[0]
//     for (let i = 0; i < arguments.length; i++) {
//         if (min > arguments[i]) {
//             min = arguments[i];
//         }
//     }
//     return min;
// }
//
// console.log(minNumber(4, 5, 7, 8, 6, 4, 6, 3, 2));


// function xxx(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     }
//     else if (b < c && b < a) {
//         console.log(b);
//     }
//     else if (c < b && c < a) {
//         console.log(c);
//     }else {
//         console.log('error');
//     }
// }
//
// xxx(4, 6, 7);
// xxx(7, 5, 4);
// xxx(3, 3, 3);


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function maxNumberfinder(a, b, c) {
//     let max = arguments[0];
//     for (let i = 0; i < arguments.length; i++) {
//         if (max < arguments[i]) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
//
// console.log(maxNumberfinder(6, 7, 2));


// function ddd (a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     }else if (b > a && b > c) {
//         console.log(b);
//     }else if (c > b && c > a) {
//         console.log(c);
//     }else {
//         console.log('error');
//     }
// }
//
// ddd(4, 6, 7);
// ddd(4, 4, 4);


// - створити функцію яка повертає найбільше число з масиву

// function maxNumberFinder(arr) {
//     let maxNumber = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (maxNumber < arr[i]) {
//             maxNumber = arr[i];
//         }
//     }
//     return maxNumber;
// }
//
// console.log(maxNumberFinder([4, 6, 7, 8, 3, 5, 66, 2000, 45, 6556, 56,8000]));


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function average(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     let average = sum / arr.length;
//     return average;
// }
//
// console.log(average([5, 5, 5, 5, 10, 10, 10, 10]));


// let arr = [2, 5, 2];
//
// function average(array) {
//     let sum = 0;
//     for (const arrayElement of array) {
//         sum += arrayElement;
//     }
//     return sum / array.length;
// }
//
// console.log(average(arr));


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// let minMax = (...xxx) => {
//     let min = xxx[0];
//     let max = xxx[0];
//     for (let element of xxx) {
//         if (element < min) {
//             min = element;
//         }
//         if (element > max) {
//             max = element;
//         }
//     }
//     console.log(max);
//     return min;
//
// };
//
// console.log(minMax(4, 6, 7, 4, 2, 4, 8, 2));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function randomNumbers() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * 100);
//     }
//     return arr;
// }
//
// let arrRandom = randomNumbers();
// console.log(arrRandom);


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomCreater(limit) {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr[i] = Math.round(Math.random() * limit);
//     }
//     return arr;
// }
//
// console.log(randomCreater(100));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function reversArr(arr) {
//     let newArr = [];
//     for (let i = arr.length -1,j=0; i >= 0; i--,j++) {
//         newArr[j] = arr[i];
//     }
//     return newArr;
// }
//
// console.log(reversArr([1, 2, 3, 4, 5,6,7,8,9]));


// let reversArrMaker = (arr) => {
//     let newArr = [];
//     for (let i = arr.length - 1, j = 0; i >= 0; i--) {
//         newArr[j++] = arr[i];
//     }
//     return newArr;
// };
//
// console.log(reversArrMaker([1, 2, 3, 4, 5]));


// let reversArrMaker2 = (arr) => {
//     let newArr = [];
//     for (let i = 0,j = arr.length - 1; i < arr.length; i++) {
//         newArr[j--] = arr[i];
//     }
//     return newArr;
// };
//
// console.log(reversArrMaker2([5, 4, 3, 2, 1,]));


// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// let oneTwo = (...xxx) => {
//     if (xxx.length === 1) {
//         console.log(xxx[0]);
//     }
//     if (xxx.length === 2) {
//         console.log(xxx[0] + xxx[1]);
//     }
// };
//
// oneTwo('ddd');
// oneTwo('ddd', 'ggg');

// let oneTwo2 = (...xxx) => xxx.length === 2 ? xxx[0] + xxx[1] : xxx[0];
// console.log(oneTwo2('d'));
// console.log(oneTwo2('d', 's'));
// console.log(oneTwo2('a', 'd', 'g'));


// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]


// let arrOne = [2, 4, 6];
// let arrTwo = [3, 5, 7, 9];
//
// let arrayAdditor = (arr1, arr2) => {
//     let newArr = [];
//     let leadArray = arr1.length > arr2.length ? arr1 : arr2;
//     for (let i = 0; i < leadArray.length; i++) {
//         newArr[i] = (arr1[i] || 0) + (arr2[i] || 0);
//     }
//     return newArr;
// };
//
// console.log(arrayAdditor(arrTwo, arrOne));

// let arrayAdditor2 = (arr1, arr2) => {
//     let newArr = [];
//     for (let i = 0,j=0; i < arr1.length,j < arr2.length; i++,j++) {
//         newArr[i] = (arr1[i] || 0) + (arr2[j] || 0);
//     }
//     return newArr;
// };
//
// console.log(arrayAdditor2([2, 3, 4], [2, 3, 4, 6, 8]));


// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// let convertorObj = (arr) => {
//     let arrKeys = [];
//     for (let i =0,j=0;i<arr.length;i++) {
//         for (let key in arr[i]) {
//             arrKeys[j++] = key;
//         }
//     }
//     return arrKeys;
// };
//
// console.log(convertorObj(arr));

// function foo(array) {
//     let newArray = [];
//     for (let i = 0, j = 0; i < array.length; i++) {
//         for (const key in array[i]) {
//             newArray[j++] = key;
//         }
//     }
//     return newArray;
// }


//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
//
// let arr = [{name: 'Dima', age: 13}, {model: 'Camry'}];
//
// function converter(array) {
//     let newArr = [];
//     for (let i = 0,j=0; i < array.length; i++) {
//         for (let element in array[i]) {
//             newArr[j++] = array[i][element];
//         }
//     }
//     return newArr;
// }
//
// console.log(converter(arr));