// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
// let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
// if (friends.length >= 3) {
//     document.write('it is a large one, 3 or more elements');
// }else if (friends.length < 3) {
//     document.write('it is little one, less then 3 elements');
// }

//
// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
// let a = prompt('number');
// let b = prompt('number');
// let c = prompt('number');
//
// if (a > b && a < c || a < b && a > c ) {
//     console.log(a, 'average digit');
// }else if (b > a && b < c || b < a && b > c) {
//     console.log(b, 'average digit');
// } else if (c > a && c < b || c < a && c > b) {
//     console.log(c, 'average digit');
// }else if (a === c || a === b || c === b) {
//     console.log('not average available');
// }


// - Перепишіть конструкцію if з використанням умовного оператора '?':
// let result;
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }
//
// let result;
// let a = 4;
// let b = 2;
// a + b < 4 ? result = 'Мало' : result = 'Багато';
// console.log(result);
//
// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
// let xxx = +prompt('a number');
// xxx < 0 ?  console.log('negative') : xxx === 0 ? console.log(0) : console.log('positive');


//
//
//
//
//
//
// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
//
// let test = confirm('yes or no');
// test === true ? console.log('correct') : console.log('uncorrect');
//
// let test1 = confirm('yes or no');
// test1 === false ? console.log('uncorrect') : console.log('correct');

// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
// let question = prompt('what is the JavaScript official lable?');
//
// if (question === 'ECMAScript') {
//     console.log('correct');
// }else {
//     console.log('don`t you know? ECMAScript!');
// }




//
//
//
//
//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
// let xxx = prompt('find your entrance');
// if (xxx > 0 && xxx < 21) {
//     console.log('it is 1st entrance');
// }else if (xxx > 20 && xxx < 49) {
//     console.log('it is 2nd entrance');
// }else if (xxx > 48 && xxx < 91) {
//     console.log('it is 3rd entrance');
// }else {
//     console.log('there is no entrance related to this number');
// }


//
// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
// let number = +prompt('number');
// number === 10 ? console.log('correct') : console.log('uncorrect');


//
// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
// let temperature = 11;
// temperature > 9 && temperature < 23 ? console.log('go study') : console.log('study online');



//
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
// let number = +prompt('number');
// switch (number) {
//     case 1 :
//         console.log('car');
//         break;
//     case 2 :
//         console.log('bycicle');
//         break;
//     case 3:
//         console.log('phone');
//         break;
//     case 4:
//         console.log('diamond');
//         break;
//     case 5:
//         console.log('villa');
//         break;
//     default:
//         console.log('wrong number');
// }