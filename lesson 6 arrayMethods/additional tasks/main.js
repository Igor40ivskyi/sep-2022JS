// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// let cutString = (str, n) => {
//     let arr = [];
//     for (let i = 0; i < str.length; i+=n) {
//         arr.push(str.substring(i, i+ n));
//     }
//     return arr;
// };
//
// console.log(cutString('dadadadada', 2));

// function cutString(str, n) {
//     let res = [];
//     for (let i = 0; i < str.length; i += n) {
//         res.push(str.substring(i, Math.min(str.length, i + n)));
//     }
//     return res;
// }
//
// console.log(cutString('пропозиція', 3));
//

// function cutString(str,n) {
//     let res = [];
//     for (let i = 0; i < str.length; i += n) {
//         let sub = str.substring(i, i + n);
//         res.push(sub);
//     }
//     return res;
// }
//
// console.log(cutString('satisfy', 3));


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
//
// let delete_charecters = (str, length) => str.substring(0, length);
// console.log(delete_charecters('Каждый охотник желает знать', 7));


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

// let insert_dash = (str) => str.toUpperCase().replaceAll(' ', '-');
// let str = "HTML JavaScript PHP";
// console.log(insert_dash(str));

// let insert_dash2 = (str) => str.split(' ').join('-').toUpperCase();
// console.log(insert_dash2(str));


// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

// let upFirst = (str) => str.substring(0, 1).toUpperCase() + str.substring(1, str.length);
// console.log(upFirst('dima'));
// console.log(upFirst('vasya'));


// let upFirst2 = (str) => str[0].toUpperCase() + str.slice(1, str.length);
// console.log(upFirst2('vasya'));


// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

// let n1 = 'Harry..Potter';
// let s = n1.replaceAll('..', ' ');
// console.log(s);
//
// let n2 = 'Ron---Whisley';
// let s1 = n2.replaceAll('---', ' ');
// console.log(s1);
//
// let n3 = 'Hermione__Granger';
// let s2 = n3.replaceAll('__', ' ');
// console.log(s2);


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

// function randomNumberGenerator() {
//     let arr = [];
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * 100));
//     }
//     return arr;
// }
//
// console.log(randomNumberGenerator());


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// let arrRandom = randomNumberGenerator();
// let sort = arrRandom.sort((a, b) => a - b);
// console.log(sort);
//
// let sort1 = arrRandom.sort((a, b) => b - a);
// console.log(sort1);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)

// let randomArr = randomNumberGenerator();
//
// let filter = randomArr.filter(value => value % 2 === 0 && value !== 0);
// console.log(filter);


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

// let str = 'harry potter and ron whisley';

// function capitalize(str) {
//
//     let splitArr = str.split(' ');
//     let map = splitArr.map(value => {
//         let Upcase = value.substring(0, 1).toUpperCase();
//         let splice = value.substring(1,value.length);
//         return [Upcase,splice] ;
//     });
//
//     let strings = map.map(value1 => {
//         let s = value1.join('');
//         return s;
//     });
//
//     let s1 = strings.join(' ');
//
//     return s1;
// }
//
// let s = capitalize('harry potter and ron whisley');
// console.log(s);


// let str = 'harry potter and ron whisley';
//

// let upAllFirstSymbols = (str) => str.split(' ').map(value => value[0].toUpperCase() + value.slice(1)).join(' ');
//
// console.log(upAllFirstSymbols('bananas and apples and tomatos'));


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)



// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// function validator(email) {
//     let verification = [];
//     let counter = 0;
//
//     if (email.indexOf('@') > 0) {
//      counter++, verification.push({symbolsBE: true})
//     }else { verification.push({symbolsBE:false})}
//
//     if (email.includes('@')) {
//        counter++, verification.push({includesE: true})
//     }else {verification.push({includesE: false})}
//
//     if (email.split('@')[1].indexOf('.') > 0) {
//        counter++, verification.push({dotAfterEMin2: true})
//     }else {verification.push({dotAfterEMin2: false})}
//
//     if (counter === 3) {
//         verification.push('EMAIL VALID');
//     }else{
//         verification.push('EMAIL IS NOT VALID');}
//
//     return verification;
// }
//
// console.log(validator('someemail@g.mailcom'));
// console.log(validator('someeMAIL@gmail.com'));
// console.log(validator('someeMAIL@i.ua'));
// console.log(validator('some.email@gmail.com'));
// console.log(validator('someemail@.com'));


// - є масивlet coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
//
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// let sort = coursesArray.sort((a, b) => b.modules.length - a.modules.length);
// console.log(sort);


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

// function count(str, stringsearch) {
//     let counter = 0;
//     for (let i = 0,j=1; i < str.length; i++) {
//         let s = str.substring(i, j++);
//         if (s === stringsearch) {
//             counter++;
//         }
//     }
//     return counter
// }
//
// // console.log(count('dddaadddadddaddadaaaddadda', 'a'));
// let str = "Астрономия это наука о небесных объектах";
// let symb = "о";
// console.log(count(str, symb));

// let count2 = (str, stringsearch) => {
//     let counter = 0;
//     let split = str.split('');
//     for (let sign of split) {
//         if (sign === stringsearch) {
//             counter++;
//         }
//     }
//         return counter;
// };
//
//     console.log(count2(str, symb));
// console.log(count2('oooodddodododdddodddod', 'd'));


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// let cutString = (str, n) => {
//     let split = str.split(' ');
//     let newStr = []
//     for (let i = 0; i < n; i++) {
//         newStr.push(split[i]);
//     }
//     let s = newStr.join(' ');
//
//     return s;
// };
//
// console.log(cutString('Сила тяжести приложена к центру масс тела', 5));

let str2 = "Сила тяжести приложена к центру масс тела";
let cutString2 = (str, n) => str.split(' ').splice(0, n).join(' ');
let cutString = cutString2(str2, 5);
console.log(cutString);
let cutString1 = cutString2('harry potter and the stone and the mystery room', 5);
console.log(cutString1);


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).

// let booksArr = [
//     {title:'git hub',
//     pageCount:345,
//         authors: [
//             {
//                 name: 'john',
//                 age: 33,
//             },
//             {name:'dima',
//                 age: 32
//             }
//         ],
//         genres: ['sciense', 'adventures'],
//     },
//     {title:'materialoznavstvo',
//     pageCount:999,
//         authors: [
//             {
//                 name: 'ivanko',
//                 age: 8,
//             },
//             {name:'andrusha',
//                 age: 16
//             }
//         ],
//         genres: ['sciense', 'adventures','bodybuilding'],
//     },
//     {title:'make up',
//     pageCount:100,
//         authors: [
//             {
//                 name: 'lyuda',
//                 age: 99,
//             },
//             {name:'anna',
//                 age: 3
//             },
//             {name:'olena',
//             age:34
//             },
//             {name:'dianka',
//                 age: 23,
//             }
//         ],
//         genres: ['building', 'shiting','kurwa'],
//     },
//
//     {title:'hz shoooooooooooooooooooooooooooooooooooooo',
//     pageCount:9999,
//         authors: [
//             {
//                 name: 'hz hto',
//                 age: 44,
//             }
//         ],
//         genres: ['d'],
//     },
//
// ];


// -знайти наібльшу книжку.

// function finderMaxBook(arr) {
//     let sort = arr.sort((a, b) => b.pageCount - a.pageCount);
//     return sort[0];
// }
//
// console.log(finderMaxBook(booksArr));

// - знайти книжку/ки з найбільшою кількістю жанрів

// let maxGenres = (arr) => {
//     let sort = arr.sort((a, b) => b.genres.length - a.genres.length);
//     return sort[0];
// };
//
// console.log(maxGenres(booksArr));

// - знайти книжку/ки з найдовшою назвою

// function longestTitleFinder(arr) {
//     let sort = arr.sort((a, b) => b.title.length - a.title.length);
//     return sort[0];
// }
//
// console.log(longestTitleFinder(booksArr));


// - знайти книжку/ки які писали 2 автори

// let filter = booksArr.filter(value => value.authors.length === 2);
// console.log(filter);


// - знайти книжку/ки які писав 1 автор

// let filter = booksArr.filter(value => value.authors.length === 1);
// console.log(filter);

// - вісортувати книжки по кількості сторінок по зростанню

// let sort = booksArr.sort((a, b) => a.pageCount - b.pageCount);
// console.log(sort);


