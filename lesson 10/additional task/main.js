//
//
//
//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//

// let curseWordsArray = ['fuck', 'dick', 'dickhead', 'asshole', 'dipsheat', 'moron'];
//
// let input = document.createElement('input');
// document.body.appendChild(input);
//
// let button = document.createElement('button');
// document.body.appendChild(button);
//
// button.innerText = 'SEND';
//
// button.onclick = function () {
//
//     if (curseWordsArray.includes(input.value)) {
//         alert('wrong word!');
//     }
//         input.value = '';
//
// };


//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
// let curseWordsArray2 = ['fuck', 'dick', 'dickhead', 'asshole', 'dipsheat', 'moron'];
//
// let input = document.createElement('input');
// document.body.appendChild(input);
//
// let button = document.createElement('button');
// button.innerText = `SEND`;
// document.body.appendChild(button);
//
// button.onclick = function () {
//
//     let value = input.value;
//     let strings = value.split(' ');
//     for (let string of strings) {
//         if (curseWordsArray2.includes(string)) {
//             alert('WRONG WORD!');
//         }
//     }
//     input.value = '';
// };

//
//
//
// - Создайте меню, которое раскрывается/сворачивается при клике

// let [menuHead] = document.getElementsByClassName('menuHead');
// let [menuContent] = document.getElementsByClassName('menuContent');
// let [ul] = document.getElementsByClassName('ul');
//
//
//
// menuHead.onclick = function () {
//     if (menuContent.style.overflow !== 'hidden') {
//         menuContent.style.overflow = 'hidden';
//     } else {
//         menuContent.style.overflow = 'inherit';
//     }
//
//
//
// };
//
// fetch('https://jsonplaceholder.typicode.com/albums')
//     .then(values => values.json())
//     .then(values => {
//
//         let ul = document.createElement('ul');
//         menuContent.appendChild(ul);
//         ul.classList.add('ul');
//
//         for (let i = 0; i < 10; i++) {
//             let titleLi = document.createElement('li');
//             titleLi.innerText = values[i].title;
//             ul.appendChild(titleLi);
//
//         }
//
//
//     });


//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

// let comentsArr = [
//     {title: 'coment1', body: 'jslfjdkldfjs sdkfj skdfsdjfkldsjfkldsjf '},
//     {title: 'coment2', body: 'jslfjdkldfjs sdkfj skdfsdjfkldsjfkldsjf '},
//     {title: 'coment3', body: 'jslfjdkldfjs sdkfj skdfsdjfkldsjfkldsjf '},
//     {title: 'coment4', body: 'jslfjdkldfjs sdkfj skdfsdjfkldsjfkldsjf '},
//     {title: 'coment5', body: 'jslfjdkldfjs sdkfj skdfsdjfkldsjfkldsjf '}
// ];
//
// let mainDiv = document.createElement('div');
// document.body.appendChild(mainDiv);
//
// for (let coment of comentsArr) {
//
//     let comentDiv = document.createElement('div');
//     comentDiv.classList.add('comentDiv');
//     comentDiv.innerText = `${coment.title}`;
//     document.body.appendChild(comentDiv);
//
//     let comentBodyDiv = document.createElement('div');
//     comentBodyDiv.classList.add('comentBodyDiv');
//     comentDiv.appendChild(comentBodyDiv);
//     comentBodyDiv.innerText = `${coment.body}`;
//
//     let button = document.createElement('button');
//     button.style.marginLeft = '10px';
//     button.innerText = 'COLLAPSE';
//     comentBodyDiv.appendChild(button);
//
//         let button2 = document.createElement('button');
//         button2.style.marginLeft = '10px';
//         button2.style.display = 'none';
//         button2.innerText = 'SHOW';
//         comentDiv.appendChild(button2)
//
//
//     button.onmouseover = function () {
//         comentBodyDiv.style.display = 'none';
//         button2.style.display = 'block';
//
//         button.style.display = 'none';
//         };
//
//         button2.onmouseover = function () {
//             comentBodyDiv.style.display = 'block';
//             button2.style.display = 'none';
//             button.style.display = 'block';
//             comentBodyDiv.style.display = 'flex'
//     };
//
// }


//
// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.

// let button = document.createElement('button');
// button.innerText = 'SEND';
// document.body.appendChild(button);
//
// button.onclick = function () {
//     button.style.display = 'none';
// };

//
//
//
// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// document.onclick = function (ev) {
//     const params = {
//         tag: ev.target.tagName,
//         classList: ev.target.className,
//         id: ev.target.id,
//         size: ev.target.offsetHeight + '*' + ev.target.offsetWidth
//     }
//
//     console.log(params.tag, params.classList, params.id, params.size);
//     alert(`
//     tag:${params.tag}
//     classList:${params.classList}
//     id:${params.id}
//     size:${params.size}
//     `);
// };


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина






// -- взять массив пользователей
// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.








//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
