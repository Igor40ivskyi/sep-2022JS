// let str = 'hello okten !!!';
// console.log(str);
// // let s = str.concat('!!!');
// // console.log(s);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.startsWith('hel'));
// console.log(str.endsWith('en'));
// console.log(str.substring(0, 7));
// console.log(str.indexOf('o'));
// console.log(str.lastIndexOf('o'));
// console.log(str.indexOf('o', 5));
// console.log(str.charAt(8));
// // console.log(str.replace('e', '!'));
// console.log(str.replaceAll('e', '!'));
// let split = str.split(' ');
// console.log(split);

// let str = 'hello okten';
// console.log(str);
// let s = str.concat('aaaaa');
// console.log(s);
// console.log(str);
//
// let s1 = s.concat('nnnnnn');
// console.log(s1);
//
// let s2 = s1.concat('ddddddd');
// console.log(s2);
//
// let s3 = str.toUpperCase();
// console.log(s3);
// let s4 = s3.toLowerCase().concat('ggggg').toUpperCase();
// console.log(s4);
//
// let b = str.startsWith('okt');
// console.log(b);


// let cars = ['bmw', 'mersedes', 'kia', 'fiat'];
//
// cars.push('ford');
//
// cars.push('zaporozhec', 'passat', 'audi', 'jetta');
// console.log(cars);
//
// for (let i = 1; i <= 10; i++) {
//     cars.push(i);
// }
//
// console.log(cars);
//
// let s = cars.pop();
// console.log(s);
// console.log(cars);
// console.log(cars);
//
// let concat = cars.concat('vig', 'vig', 'vig');
// console.log(concat);

// let users = [
//     {id: 1, name: 'vasya', age: 33, status: true},
//     {id: 2, name: 'dima', age: 50, status: false},
//     {id: 3, name: 'danya', age: 32, status: true},
//     {id: 4, name: 'anya', age: 38, status: true},
//     {id: 5, name: 'masha', age: 9, status: false},
//     {id: 6, name: 'dasha', age: 23, status: false},
//     {id: 7, name: 'kolya', age: 22, status: true},
//     {id: 8, name: 'ric', age: 19, status: false},
//     {id: 9, name: '', age: 33, status: true}
// ];


// users.forEach(function (s, d,g) {
//     console.log(Array.isArray(g) );
// });

// let filter = users.filter(function (value) {
//     return !value.status;
// });

// console.log(filter);
//
// let filter1 = users.filter(value => value.age > 30);
// console.log(filter1);
// let filter2 = users.filter(value => value.age < 30);
// console.log(filter2);
//
// let filter3 = users.filter(value => value.name === 'vasya');
// console.log(filter3);
//
// let filter4 = users.filter(value => value.name === 'johny');
// console.log(filter4);
//
// let filter5 = users.filter(value => value.id >= 5);
// console.log(filter5);
//
// let filter6 = users.filter(value => value.name === 'anya');
// console.log(filter6);


// let map = users.map(value => value.name);
// console.log(map);

// function doo(arr) {
//     let userNames = [];
//     for (let i = 0;i<arr.length;i++) {
//    userNames[i] = arr[i].name
//     }
//     return userNames
// }
//
// let doo1 = doo(users);
// console.log(doo1);

// let map1 = users.map(value => value.age);
// console.log(map1);
//
// let map2 = users.map(value => value.id);
// console.log(map2);

// let map = users.map(value => ({nickname: value.name, age: value.age}));
// console.log(map);

// let map = users.map(value => ({klychka: value.name, age: value.age, address: 'Zadorozhnya street'}));
// console.log(map);

// let map = users.map((value, index) => ({
//     id: value.id,
//     name: value.name,
//     age: value.age,
//     status: value.status,
//     number: index + 1
// }));
// console.log(map);

// let map7 = users.map((value, index) => ({name: value.name,id: value.id, age: value.age, status: value.status}));
// console.log(map7);

// let map10 = users.map(value => ({
//     id: value.id, name: value.name, age: value.age, status: value.status,
//     randomNumber: Math.floor(Math.random() * 100)
// }));
//
// console.log(map10);

// let map11 = users.map((value, index) => ({...value, number: index * 10}));
// console.log(map11);
//
// let map12 = users.map((value, index) => ({index: index * 100, ...value, gang: 'LA gang'}));
// console.log(map12);

// ---------------------------------------- chain construction practice ---------------------------------------
// let users = [
//     {id: 1, name: 'vasya', age: 33, status: true},
//     {id: 2, name: 'dima', age: 50, status: false},
//     {id: 3, name: 'danya', age: 32, status: true},
//     {id: 4, name: 'anya', age: 38, status: true},
//     {id: 5, name: 'masha', age: 9, status: false},
//     {id: 6, name: 'dasha', age: 23, status: false},
//     {id: 7, name: 'kolya', age: 22, status: true},
//     {id: 8, name: 'ric', age: 19, status: false},
//     {id: 9, name: '', age: 33, status: true}
// ];
//
//  users.map(function (value, index, array) {
//     return {name: value.name, age: value.age, number: index + 1};
// })
//     .filter((value) => value.age < 30)
//     .forEach(value => console.log(value))



// let users = [
//     {id: 1, name: 'vasya', age: 33, status: true},
//     {id: 2, name: 'dima', age: 50, status: false},
//     {id: 3, name: 'danya', age: 32, status: true},
//     {id: 4, name: 'anya', age: 38, status: true},
//     {id: 5, name: 'masha', age: 9, status: false},
//     {id: 6, name: 'dasha', age: 23, status: false},
//     {id: 7, name: 'kolya', age: 22, status: true},
//     {id: 8, name: 'ric', age: 19, status: false},
//     {id: 9, name: '', age: 33, status: true}
// ];
//
// users.sort(function (a, b) {
//     if (a.name < b.name) {
//         return -1
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// });

// let users = [
//     {id: 1, name: 'vasya', age: 33, status: true},
//     {id: 2, name: 'dima', age: 50, status: false},
//     {id: 3, name: 'danya', age: 32, status: true},
//     {id: 4, name: 'anya', age: 38, status: true},
//     {id: 5, name: 'masha', age: 9, status: false},
//     {id: 6, name: 'dasha', age: 23, status: false},
//     {id: 7, name: 'kolya', age: 22, status: true},
//     {id: 8, name: 'ric', age: 19, status: false},
//     {id: 9, name: '', age: 33, status: true}
// ];

// users.sort(function (a, b) {
//     if (a.id < b.id) {
//         return 1;
//     }
//     if (a.id > b.id) {
//         return -1;
//     }
//     if (a.id === b.id) {
//         return 0;
//     }
// });

// let users2 = users.map(function (value, index, array) {
//     return {...value, randomNumber: Math.round(Math.random() * 100)}
// })
//     .sort(function (a, b) {
//         if (a.randomNumber > b.randomNumber) {
//             return 1;
//         }
//         if (a.randomNumber < b.randomNumber) {
//             return -1;
//         }
//         if (a.randomNumber === b.randomNumber) {
//             return 0;
//         }
//     });

// console.log(users2);


// ---------------------------------------- reduce -------------------------------------------------------------

// let users = [
//     {id: 1, name: 'vasya', age: 33, status: true},
//     {id: 2, name: 'dima', age: 50, status: false},
//     {id: 3, name: 'danya', age: 32, status: true},
//     {id: 4, name: 'anya', age: 38, status: true},
//     {id: 5, name: 'masha', age: 9, status: false},
//     {id: 6, name: 'dasha', age: 23, status: false},
//     {id: 7, name: 'kolya', age: 22, status: true},
//     {id: 8, name: 'ric', age: 19, status: false},
//     {id: 9, name: '', age: 33, status: true}
// ];
//
// let reduce = users.reduce((warehouse, value) => {
//     warehouse.ages.push(value.age);
//     warehouse.names.push(value.name);
//     return warehouse;
// },{ages:[],names:[]});
//
// console.log(reduce);

// ------------------------------------------------ lesson 6 hw ----------------------------------------------------------


// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// console.log(str1.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// let str1Upper = str1.toUpperCase();
// let str2Upper = str2.toUpperCase();
// let str3Upper = str3.toUpperCase();
//
// console.log(str1Upper, str2Upper, str3Upper);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str11 = 'HELLO WORLD';
// let str22 = 'LOREM IPSUM';
// let str33 = 'JAVASCRIPT IS COOL';
//
// let s11Lower = str11.toLowerCase();
// console.log(s11Lower);
//
// let s22Lower = str22.toLowerCase();
// console.log(s22Lower);
//
// let s33Lower = str33.toLowerCase();
// console.log(s33Lower);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let sClean = str.trim();
// console.log(sClean);
// console.log(str);


//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
    let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']


// const stringToarray = (str) => {
//     let split = str.split(' ');
//     return split;
// };
//
// console.log(stringToarray(str));


//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let strings = arr.map(value => value.toString());
// let strings1 = arr.map(value => String(value));
// let strings2 = arr.map(value => value + '');
// console.log(strings2);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// const sortNums = (direction, arr) => {
//     if (direction === 'ascending'){
//         arr.sort((a, b) => {
//             return a - b;
//         });
//     }else if (direction === 'descending') {
//         arr.sort((a, b) => b - a);
//     }
//     return arr;
// };
//
// console.log(sortNums('ascending', nums));
// console.log(sortNums('descending', nums));


//
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let a = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(a);
//
// // -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//
// let filter = a.filter(value => value.monthDuration > 5);
// console.log(filter);


// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// let cardDeck = [
//
//     {
//         cardSuit: 'spade',
//         value: 6,
//         color: 'black'
//
//     },
//     {
//         cardSuit: 'diamond',
//         value: 6,
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'heart',
//         value: 6,
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'clubs',
//         value: 6,
//         color: 'black'
//
//     },
//
//     {
//         cardSuit: 'spade',
//         value: 7,
//         color: 'black'
//
//     },
//     {
//         cardSuit: 'diamond',
//         value: 7,
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'heart',
//         value: 7,
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'clubs',
//         value: 7,
//         color: 'black'
//
//     },
//
//     {
//         cardSuit: 'spade',
//         value: 8,
//         color: 'black'
//
//     },
//     {
//         cardSuit: 'diamond',
//         value: 8,
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'heart',
//         value: 8,
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'clubs',
//         value: 8,
//         color: 'black'
//
//     },
//
//     {
//         cardSuit: 'spade',
//         value: 9,
//         color: 'black'
//
//     },
//     {
//         cardSuit: 'diamond',
//         value: 9,
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'heart',
//         value: 9,
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'clubs',
//         value: 9,
//         color: 'black'
//
//     },
//
//     {
//         cardSuit: 'spade',
//         value: 10,
//         color: 'black'
//
//     },
//     {
//         cardSuit: 'diamond',
//         value: 10,
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'heart',
//         value: 10,
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'clubs',
//         value: 10,
//         color: 'black'
//
//     },
//
//     {
//         cardSuit: 'spade',
//         value: 'jack',
//         color: 'black'
//
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'jack',
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'heart',
//         value: 'jack',
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'jack',
//         color: 'black'
//
//     },
//
//     {
//         cardSuit: 'spade',
//         value: 'queen',
//         color: 'black'
//
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'queen',
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'heart',
//         value: 'queen',
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'queen',
//         color: 'black'
//
//     },
//
//     {
//         cardSuit: 'spade',
//         value: 'king',
//         color: 'black'
//
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'king',
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'heart',
//         value: 'king',
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'king',
//         color: 'black'
//
//     },
//
//     {
//         cardSuit: 'spade',
//         value: 'ace',
//         color: 'black'
//
//     },
//     {
//         cardSuit: 'diamond',
//         value: 'ace',
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'heart',
//         value: 'ace',
//         color: 'red'
//
//     },
//     {
//         cardSuit: 'clubs',
//         value: 'ace',
//         color: 'black'
//
//     },
//
//     {
//         value: 'joker',
//         color: 'red',
//     },
//
//     {
//         value: 'joker',
//         color: 'black',
//     }
//
// ];
//
//
// let reduce = cardDeck.reduce((warehouse, value) => {
//     if (value.cardSuit === 'spade') {
//         warehouse.spades.push(value);
//     }
//     if (value.cardSuit === 'diamond') {
//         warehouse.diamonds.push(value);
//     }
//     if (value.cardSuit === 'heart') {
//         warehouse.hearts.push(value);
//     }
//     if (value.cardSuit === 'clubs') {
//         warehouse.clubs.push(value);
//     }
//     return warehouse;
// },{spades:[],diamonds:[],hearts:[], clubs: []});
//
// console.log(reduce);