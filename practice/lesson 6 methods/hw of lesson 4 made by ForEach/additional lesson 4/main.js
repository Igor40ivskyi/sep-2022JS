// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr = [5, 6, 7, 8, 9, 's', 'f', true, false];
//
// arr.forEach(function (e, i) {
//     console.log(e);
// });


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// 1. перебрати його циклом while
// arr.forEach(function (e) {
//     console.log(e);
// });



//     3. перебрати циклом while та вивести  числа тільки з непарним індексом

// arr.forEach(function (e, i) {
//     i % 2 ? console.log(e) : 0;
// });


// 5. перебрати циклом while та вивести  числа тільки парні  значення

// arr.forEach(function (value, index, array) {
//     value % 2 ? 0 : console.log(value);
// });


// 7. замінити кожне число кратне 3 на слово "okten"

// arr.forEach(function (value, index, array) {
//     index % 3 ? 0 : value = 'okten'
//     console.log(value);
// });


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

// let arr2 = [12, 33, 4, 5, 6, 7, 8, 9, 0, 8];
// arr.forEach(function (value) {
//     console.log(value);
// });


// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор

// let books = [
//     {title:'adventures',pageCount:345,authors:
//             [
//                 {name:'jakie', age: 33},
//                 {name:'jinni', age: 23}
//             ],
//         genres: ['madness', 'fun', 'nice']
//     },
//
//     {title:'asd',pageCount:390,authors:
//             [
//                 {name:'jakie', age: 33}
//             ],
//         genres: ['madness', 'fun', 'fighting','bite']
//     },
//
//     {title:'gfghfh',pageCount:234,authors:
//             [
//                 {name:'jakie', age: 33},
//                 {name:'jakie', age: 33},
//                 {name:'jinni', age: 23}
//             ],
//         genres: ['madness', 'fun', 'nice','nice','nice','nice','nice','nice','nice','nice']
//     },
//
//     {title:'hghgh',pageCount:140,authors:
//             [
//                 {name:'jakie', age: 33},
//                 {name:'jakie', age: 33},
//                 {name:'jinni', age: 23}
//             ],
//         genres: ['madness',]
//     },
//
//     {title:'ghfghreyrtyhrthtyhty',pageCount:900,authors:
//             [
//                 {name:'jakie', age: 33},
//                 {name:'jinni', age: 23},
//                 {name:'jinni', age: 23},
//                 {name:'jinni', age: 23},
//                 {name:'jinni', age: 23},
//             ],
//         genres: ['madness','madness','madness','madness', 'fun', 'nice']
//     }
// ];

// - знайти книжку/ки які писали 2 автори

// books.forEach(function (value, index, array) {
//     if (value.authors.length === 2) {
//         console.log(value);
//     }
// });


// - знайти книжку/ки які писав 1 автор

// books.forEach(function (value) {
//     if (value.authors.length === 1) {
//         console.log(value);
//     }
// });


