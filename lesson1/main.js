//
// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
let text1 = 'hello';
let text2 = 'owu';
let text3 = 'ua';
let text1num = 1;
let text2num = -999;
let text3num = 123;
let text4num = 3.14;
let text5num = 2.7;
let text6num = 16;
let text1bool = true;
let text2bool = false;

console.log(text1);
console.log(text2);
console.log(text3);
console.log(text1num, text2num, text3num, text4num, text5num, text6num);
console.log(text1bool);
console.log(text2bool);

//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
let firstName = 'Igor';
let middleName = 'Sorokivskyi';
let lastName = 'Levovych';
let person = firstName + ' ' + middleName + ' ' + lastName;
console.log(person);

//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let info = prompt('enter the first name');
// console.log(info);

let info2 = prompt('enter the middle name');
// console.log(info2);

let info3 = prompt('enter the last name');
// console.log(info3);

console.log(`${info} ${info2} ${info3}`);