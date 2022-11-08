// - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = +prompt('enter a number');
// if (x !== 0) {
//     console.log('correct');
// }else if (x === 0) {
//     console.log('uncorrect');
// }else {
//     console.log('????????');
// }


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = prompt('what time is it ?');
// if (time >= 0 && time <= 15) {
//     console.log('first quarter');
// }else if (time >= 16 && time <= 30) {
//     console.log('second quarter');
// }else if (time >= 31 && time <= 45) {
//     console.log('third quarter');
// }else if (time >= 46 && time <= 59) {
//     console.log('fourth quarter');
// }else {
//     console.log('????????');
// }


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = prompt('day');
// if (day > 0 && day < 10) {
//     console.log('1st decade');
// }else if (day > 9 && day < 20) {
//     console.log('2nd decade');
// }else if (day > 19 && day < 32) {
//     console.log('3rd decade');
// }else {
//     console.log('??????????');
// }


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let day = +prompt('number of the day');
// switch (day) {
//     case 1:
//         console.log('monday');
//         break;
//     case 2:
//         console.log('tuesday');
//         break;
//     case 3:
//         console.log('wednesday');
//         break;
//     case 4:
//         console.log('thursday');
//         break;
//     case 5:
//         console.log('friday');
//         break;
//     case 6:
//         console.log('saturday');
//         break;
//     case 7:
//         console.log('Sunday');
//         break;
//     default:
//         console.log('????????????');
// }



//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.
// let a = +prompt('number');
// let b = +prompt('number');
//
// if (a > b) {
//     console.log(a);
// }else if (b > a) {
//     console.log(b);
// }else if (a === b) {
//     console.log('draw');
// }else {
//     console.log(false);
// }


//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

// let x = prompt('say something') || 'default';
//
// console.log(x);
