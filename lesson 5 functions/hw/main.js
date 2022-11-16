// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function squareCounter(a, b) {
//     return a * b;
// }
// console.log(squareCounter(4, 6));
// let square1 = squareCounter(4, 4);
// console.log(square1);


// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circleSquareCounter(r) {
//     const p = 3.14;
//     let s = p * (r ** 2);
//     return s;
// }
//
// circleSquareCounter(5);
// let number = circleSquareCounter(6);
// console.log(number);



// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// S = 2 π R h + 2 π R 2 = 2 π R(R + h)

// function cylinderSquareCounter(h, r) {
//     const pp = 3.14;
//     let s = 2 * pp * r * (r + h);
//     return s;
// }
//
// cylinderSquareCounter(3, 6);
// cylinderSquareCounter(5, 6);
// let number1 = cylinderSquareCounter(4, 4);
// console.log(number1);



// - створити функцію яка приймає масив та виводить кожен його елемент

// let dudes = [
//     {name:'vasya',age:31, status: true},
//     {name:'petya',age:34, status: true},
//     {name:'kolya',age:23, status: false},
//     {name:'danik',age:65, status: true},
//     {name:'vetal',age:43, status: false},
//     {name:'igor',age:32, status: false},
//     {name:'kaktus',age:31, status: true},
//     {name:'durik',age:11, status: false},
//     {name:'dany',age:36, status: true},
//     {name:'mr solve', age: 75, status: false}
// ]
//
// function printer(arr) {
//     for (const arrElement of arr) {
//         console.log(arrElement);
//
//     }
// }
//
// printer(dudes);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function paragraph(text) {
//     document.write(`<p>${text}</p>`);
// }
//
// paragraph('sdghksdjh lsjdflksjdkfljsd dfjdsfkj');
// let text1 = 'pobachym pobachym koly';
// paragraph(text1);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function listCreater(text) {
//     document.write(`
// <ul>
// <li>${text}</li>
// <li>${text}</li>
// <li>${text}</li>
// </ul>`)
// }
//
// listCreater('jdsgkjkldjsfk sdkfjsdfj ksdfjkds')


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function listCreater2(text,liQuantity ) {
//     document.write(`<ul>`)
//     for (let i = 0; i < liQuantity; i++) {
//         document.write(`
//                             <li>${text}</li>
//                        `);
//     }
//     document.write(`</ul>`)
// }
//
// listCreater2('Cambodia', 3);
// listCreater2('Alabama', 10);
// listCreater2('Lviv', 10);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrPrinter(arr) {
//     for (const arrElement of arr) {
//         document.write(`<h3>${arrElement}</h3>`);
//     }
// }
//
// let arri = ['djf', 34, 443, 'df', true, false, 343];
// arrPrinter(arri);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// function userPrinter(arr) {
//     for (let item of arr) {
//         document.write(`<div>`)
//         for (let element in item) {
//             document.write(` ${element} &nbsp; --- &nbsp;${item[element]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
//         }
//         document.write(`</div>`)
//     }
// }
//
// let clients = [
//     {name:'vasya',age:31, status: true},
//     {name:'petya',age:34, status: true},
//     {name:'kolya',age:23, status: false},
//     {name:'danik',age:65, status: true},
//     {name:'vetal',age:43, status: false},
//     {name:'igor',age:32, status: false},
//     {name:'kaktus',age:31, status: true},
//     {name:'durik',age:11, status: false},
//     {name:'dany',age:36, status: true},
//     {name:'mr solve', age: 75, status: false}
// ]

// userPrinter(clients);


// - створити функцію яка повертає найменьше число з масиву

// function minNumberDetector(arr) {
//     let min = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         if (min > arr[i]) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
//
// let arr1 = [34, 34, 65, 34365, 2, 4656, 32456, 5565434, 342, 43, 657, 8888, 4546787];
// let minNumber = minNumberDetector(arr1);
// console.log(minNumber);


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function summer(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum = sum + arrElement;
//     }
//     return sum;
// }
//
// let arr2 = [3, 5, 6, 10, 10, 10, 4];
//
// let sum = summer(arr2);
// console.log(sum);

