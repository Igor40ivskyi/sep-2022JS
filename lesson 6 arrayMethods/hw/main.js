// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// console.log(str1.length, str2.length, str3.length);


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
//
// let str11 = str1.toUpperCase();
// console.log(str11);
//
// let str21 = str2.toUpperCase();
// console.log(str21);
//
// let str31 = str3.toUpperCase();
// console.log(str31);


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str5 = 'HELLO WORLD';
// let str6 = 'LOREM IPSUM';
// let str7 = 'JAVASCRIPT IS COOL';
//
// let str51 = str5.toLowerCase();
// console.log(str51);
//
// let str61 = str6.toLowerCase();
// console.log(str61);
//
// console.log(str7.toLowerCase());


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   ';
// console.log(str);
// console.log(str.trim());

//
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
//
// let stringToarray = (str) => str.split(' ');
//
// let stringToarray1 = stringToarray(str);
// console.log(stringToarray1);


//
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
//
// let strings = arr.map(value => value.toString());
// console.log(strings);
//
// let strings1 = arr.map(value => String(value));
// console.log(strings1);
//
// let strings2 = arr.map(value => value + '');
// console.log(strings2);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
// let nums = [11,21,3];
//
// let sortNums = (nums,direction) => {
//     if (direction === 'ascending') {
//         nums.sort((a, b) => a - b);
//     }
//     if (direction === 'descending') {
//         nums.sort((a, b) => b - a);
//     }
//     return nums
// };
//
// let numsAscending = sortNums(nums, 'ascending');
// console.log(numsAscending);
//
// let sortNums1 = sortNums(nums, 'descending');
// console.log(sortNums1);


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
// console.log(coursesAndDurationArray);
// let sort = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);
// console.log(sort);
//
//
// let filter = sort.filter((value, index) => value.monthDuration > 5);
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

let suitColor =
    [
        {cardSuit: 'spade', color: 'black'},
        {cardSuit: 'diamond', color: 'red'},
        {cardSuit: 'heart', color: 'red'},
        {cardSuit: 'clubs', color: 'black'},
    ];

let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace','joker'];

let deck = [];
// debugger;
for (let st of suitColor) {
    for (let value of values) {
        if (value === 'joker' && st.cardSuit === 'spade' || value === 'joker' && st.cardSuit === 'heart') {
            let card = {value: value, color: st.color};
            deck.push(card);
        } else if (value !== 'joker') {
            let card = {cardSuit: st.cardSuit, value: value, color: st.color};
            deck.push(card);
        }
    }
}

console.log(deck);

// - знайти піковий туз

let find = deck.find(value => value.cardSuit === 'spade' && value.value === 'ace');
console.log(find);


// - всі шістки

let filter = deck.filter(value => value.value === 6);
console.log(filter);


// - всі червоні карти

let filter1 = deck.filter(value => value.color === 'red');
console.log(filter1);


// - всі буби

let filter2 = deck.filter(value => value.cardSuit === 'diamond');
console.log(filter2);


// - всі трефи від 9 та більше

let filter3 = deck.filter(value => value.cardSuit === 'clubs' && value.value > 9 || value.cardSuit === 'clubs' && typeof value.value !== 'number');
console.log(filter3);


//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

// let reduce = deck.reduce((accum, value) => {
//     if (value.cardSuit === 'spade') {
//         accum.spades.push(value);
//     }else if (value.cardSuit === 'diamond') {
//         accum.diamonds.push(value);
//     }else if (value.cardSuit === 'heart') {
//         accum.hearts.push(value);
//     }else if (value.cardSuit === 'clubs') {
//         accum.clubss.push(value);
//     }
//     return accum;
// },{spades:[],diamonds:[],hearts:[], clubss: []});
//
// console.log(reduce);