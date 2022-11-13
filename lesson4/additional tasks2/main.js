// 1. Створити пустий масив та :

// let arr = [];


//     a. заповнити його 50 парними числами за допомоги циклу.

// for (let i = 0; i < 50; i++) {
//     arr[i] = (i +1) * 2;
// }
// console.log(arr);

// for (let i = 0, j = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         arr[j] = i;
//         j++;
//     }
// }
// console.log(arr);

//     b. заповнити його 50 непарними числами за допомоги циклу.

// for (let i = 0,j = 0; i < 100; i++) {
//     if (i % 2) {
//         arr[j] = i;
//         j++;
//     }
// }
// console.log(arr);


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     let randomNumber = Math.round(Math.random() * 100);
//     arr[i] = randomNumber;
// }
// console.log(arr);


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let arr2 = [];
// for (let i = 0; i < 20; i++) {
//     let randomNumber = Math.round(Math.random() * (732 - 8) + 8) ;
//     arr2[i] = randomNumber;
// }
// console.log(arr2);


// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 0; i < arr2.length; i++) {
//     if (i % 3 === 0) {
//         console.log(arr2[i]);
//     }
// }


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

// for (let i = 0; i < arr2.length; i+=3) {
//     if (arr2[i] % 2 === 0) {
//         console.log(arr2[i]);
//     }
// }


// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let newArr = [];
// for (let i = 0,j = 0; i < arr2.length; i +=3) {
//     if (arr2[i] % 2 === 0) {
//         newArr[j] = arr2[i];
//         j++;
//     }
// }
// console.log(newArr);


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let arr = [1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i = 0, k = 1; i < arr.length; i++,k++) {
//     if (arr[k] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] % 2 === 0) {
//         console.log(arr[i]);
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let single = [100, 250, 50, 168, 120, 345, 188];
//
// let arr = [100, 100, 100, 100, 100, 100];
//
// let count = 0;
// for (let i = 0; i < single.length; i++) {
//     count = count + single[i];
// }
// let res = count /single.length;
// console.log(res);


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arrRandom = [];
// for (let i = 0; i < 20; i++) {
//     let randomNumber = Math.round(Math.random() * 100);
//     arrRandom[i] = randomNumber;
// }
//
// let newArrRandomto5 = [];
//
// for (let i = 0; i < arrRandom.length; i++) {
//     let to5 = arrRandom[i] * 5;
//     newArrRandomto5[i] = to5;
// }
//
// console.log(arrRandom);
// console.log(newArrRandomto5);

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let arrAnyvalues = ['fffdf', 'dhf', 343, 'sdfj', 4554, true, false, 'dhg', 34453];
// let newarrAnyvalues = [];
// for (let i = 0,j = 0; i < arrAnyvalues.length; i++) {
//     if (typeof arrAnyvalues[i] === 'number') {
//         newarrAnyvalues[j] = arrAnyvalues[i];
//         j++;
//     }
// }
// console.log(newarrAnyvalues);


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

// let users = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
//     cities = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// let userCity = [];
//
// for (let i = 0; i < users.length; i++) {
//     userCity[i] = users[i];
// }
//
// for (let i = 0; i < userCity.length; i++) {
//     for (let j = 0; j < cities.length; j++) {
//         if (userCity[i].id === cities[j].user_id) {
//             userCity[i].address = cities[j];
//         }
//     }
// }
//
// console.log(userCity);



//
//
//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// let arr = [];
// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.round(Math.random() * 100);
//     arr[i] = randomNumber;
// }
//
// for (const arrElement of arr) {
//     if (arrElement % 2 === 0) {
//         console.log(arrElement);
//     }
//
// }
// console.log(arr);


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let empty = [];
// for (let i = 0; i < 10; i++) {
//     let randomNumber = Math.round(Math.random() * 100);
//     empty[i] = randomNumber;
// }
//
// // console.log(empty);
//
// let empty2 = [];
//
// for (let i = 0; i < empty.length; i++) {
//     empty2[i] = empty[i];
// }
//
// console.log(empty);
// console.log(empty2);
//


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

// let str = '';
// let arr = ['a', 'b', 'c'];
// debugger;
// for (let i = 0; i < arr.length; i++) {
//     str = str + arr[i];
// }
// console.log(str);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

// let str = '';
// let arr = ['a', 'b', 'c'];
// let i = 0;
// while (i < arr.length) {
//     str += arr[i];
//     i++;
// }
// console.log(str);


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

// let str = '';
// let arr = ['a', 'b', 'c'];
//
// for (const element of arr) {
//     str = str + element;
// }
// console.log(str);