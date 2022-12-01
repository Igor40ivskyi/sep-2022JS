// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// let str1UpperCase = str1.toUpperCase();
// console.log(str1UpperCase);
//
// let str2UpperCase = str2.toUpperCase();
// console.log(str2UpperCase);
//
// let str3UpperCase = str3.toUpperCase();
// console.log(str3UpperCase);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let s1 = 'HELLO WORLD';
// let s2 = 'LOREM IPSUM';
// let s3 = 'JAVASCRIPT IS COOL';
//
// let s1Lower = s1.toLowerCase();
// let s2Lower = s2.toLowerCase();
// let s3Lower = s3.toLowerCase();
// console.log(s1Lower, s2Lower, s3Lower);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// let strTrim = str.trim();
// console.log(strTrim);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// let stringToarray = (str) => {
//     let newStr = str.split(' ');
//     return newStr;
// };
//
// let stringToarray1 = stringToarray(str);
// console.log(stringToarray1);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let strings = arr.map(value => value.toString());
// console.log(strings);
//
// let strings2 = arr.map(value => value + '');
// console.log(strings2);
//
// let strings1 = arr.map(value => String(value));
// console.log(strings1);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
//
// let sortNums = (arr, direction) => {
//     if (direction === 'ascending') {
//         arr.sort((a, b) => a - b
//         );
//     }else if (direction === 'descending') {
//         arr.sort((a, b) => b - a);
//     }
//     return arr;
// };
//
// let sortNums1 = sortNums(nums, 'ascending');
// console.log(sortNums1);
//
// let sortNums2 = sortNums(nums, 'descending');
// console.log(sortNums2);
//
// console.log(sortNums(nums, 'ascending'));


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
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// let aar = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration)
//     .filter(value => value.monthDuration > 5);
//
// console.log(aar);


//
// let newCoursesAndDurationArray = coursesAndDurationArray.sort(function (a, b) {
//     if (a.monthDuration > b.monthDuration) {
//         return -1;
//     }
//     if (a.monthDuration < b.monthDuration) {
//         return 1;
//     }
//     if (a.monthDuration === b.monthDuration) {
//         return 0;
//     }
//
// })
//     .filter(value => value.monthDuration > 5);
//
//
// console.log(newCoursesAndDurationArray);


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
// // - знайти піковий туз
// let aceSpade = cardDeck.find(element => element.cardSuit === 'spade' && element.value === 'ace');
// console.log(aceSpade);
//
//
// // - всі шістки
// let allThe6 = cardDeck.filter(element => element.value === 6);
// console.log(allThe6);
//
//
// // - всі червоні карти
// let allReds = cardDeck.filter(element => element.color === 'red');
// console.log(allReds);
//
//
// // - всі буби
// let diamonds = cardDeck.filter(value => value.cardSuit === 'diamond');
// console.log(diamonds);
//
//
// // - всі трефи від 9 та більше
// let clubsMorethan9 = cardDeck.filter(value => value.cardSuit === 'clubs')
//     .sort((a, b) => {
//         if (a.value > b.value) {
//             return 1;
//         }
//         if (a.value < b.value) {
//             return -1;
//         }
//         if (a.value === b.value) {
//             return 0;
//         }
//     })
//     .filter((value, index, array) => index > 3);
//
// console.log(clubsMorethan9);


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
// let reduce = cardDeck.reduce((warehouse, value,arr) => {
//
//     if (value.cardSuit === 'spade') {
//         warehouse.spades.push(value)
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



//-------------------------------------------- the card deck task second approach -----------------------------------------

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


// let suitsColors =
//     [
//         {cardSuit: 'spade', color: 'black'},
//         {cardSuit: 'diamond', color: 'red'},
//         {cardSuit: 'heart', color: 'red'},
//         {cardSuit: 'clubs', color: 'black'},
//     ];
//
// values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king','ace'];
//
// let deckOfCards = [];
//
// for (let suitColor of suitsColors) {
//     for (let value of values) {
//         let card = {cardSuit: suitColor.cardSuit, value: value, color: suitColor.color};
//         deckOfCards.push(card);
//     }
// }
//
// deckOfCards.push({value: 'jocker', color: 'black'}, {value: 'jocker', color: 'red'});
//
// console.log(deckOfCards);

// - знайти піковий туз

// let filter = deckOfCards.filter((value, index, array) => value.cardSuit === 'spade' && value.value === 'ace');
// console.log(filter);


// - всі шістки

// let filter2 = deckOfCards.filter(value => value.value === 6);
// console.log(filter2);


// - всі червоні карти

// let filter2 = deckOfCards.filter(value => value.color === 'red');
// console.log(filter2);


// - всі буби

// let filter3 = deckOfCards.filter(value => value.cardSuit === 'diamond');
// console.log(filter3);


// - всі трефи від 9 та більше

// let filter4 = deckOfCards.filter(value => value.value >= 9 && value.cardSuit === 'clubs' || typeof value.value === 'string' && value.cardSuit === 'clubs');
// console.log(filter4);


// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// let reduce = deckOfCards.reduce((accum, value) => {
//     if (value.cardSuit === 'spade' || (value.value === 'jocker' && value.color === 'black')) {
//         accum.spades.push(value);
//     } else if (value.cardSuit === 'diamond') {
//         accum.diamonds.push(value);
//     } else if (value.cardSuit === 'heart' || (value.value === 'jocker' && value.color === 'red')) {
//         accum.hearts.push(value);
//     } else if (value.cardSuit === 'clubs') {
//         accum.clubs.push(value);
//     }
//     return accum;
// },{spades:[],diamonds:[],hearts:[], clubs: []});
//
// console.log(reduce);