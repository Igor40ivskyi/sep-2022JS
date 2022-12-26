//
//
// let users = [
//     {
//     name: 'vasya',
//     age: 31,
//     status: false,
//     address: {city: 'MYK', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
// }, {
//     name: 'petya',
//     age: 30,
//     status: true,
//     address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
// }, {
//     name: 'kolya',
//     age: 29,
//     status: true,
//     address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
// }, {
//     name: 'olya',
//     age: 28,
//     status: false,
//     address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
// }, {
//     name: 'max',
//     age: 30,
//     status: true,
//     address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
// }, {
//     name: 'anya',
//     age: 31,
//     status: false,
//     address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
// }, {
//     name: 'oleg',
//     age: 28,
//     status: false,
//     address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
// }, {
//     name: 'andrey',
//     age: 29,
//     status: true,
//     address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
// }, {
//     name: 'masha',
//     age: 30,
//     status: true,
//     address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
// }, {
//     name: 'olya',
//     age: 31,
//     status: false,
//     address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
// }, {
//     name: 'max',
//     age: 31,
//     status: true,
//     address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
// }];

// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.

// const newArr = [];
//
// for (const user of users) {
//
//     let  {address} = user;
//     // console.log(address);
//
//     let addressCopy = JSON.parse(JSON.stringify(address));
//     // console.log(addressCopy);
//
//     newArr.push(addressCopy);
//
// }
//
// console.log(newArr);
// console.log(users);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.

// for (const user of users) {
//
//     let userDiv = document.createElement('div');
//     document.body.appendChild(userDiv);
//     userDiv.innerText = `${user.name} - ${user.age} - ${user.status}  - ${user.address.city} - ${user.address.country} - ${user.address.street} - ${user.address.houseNumber}`;
//
// }

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)

// for (const user of users) {
//
//     let userDiv = document.createElement('div');
//     document.body.appendChild(userDiv);
//     userDiv.classList.add('userDiv');
//
//     for (const key in user) {
//
//         let keyDiv = document.createElement('div');
//         keyDiv.classList.add('keyDiv');
//         userDiv.appendChild(keyDiv);
//
//         if (typeof user[key] !== 'object') {
//
//             keyDiv.innerText = `${key} - ${user[key]}`;
//         } else {
//
//                 let keyDiv2 = document.createElement('div');
//
//             let names = Object.getOwnPropertyNames(user[key]);
//
//             keyDiv.innerText = `${key} : ${names[0]} - ${user[key].city} , ${names[1]} - ${user[key].country} ,
//              ${names[2]} - ${user[key].street} , ${names[3]} - ${user[key].houseNumber} `;
//
//         }
//     }
// }


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

// for (const user of users) {
//
//     let userDiv = document.createElement('div');
//     document.body.appendChild(userDiv);
//     userDiv.classList.add('userDiv');
//
//     for (const key in user) {
//
//         let keyDiv = document.createElement('div');
//         userDiv.appendChild(keyDiv);
//         keyDiv.classList.add('keyDiv');
//
//         if (typeof user[key] !== 'object') {
//
//             keyDiv.innerText = `${key} - ${user[key]}`;
//         }else {
//
//             let keyDiv2Wrap = document.createElement('div');
//             keyDiv.appendChild(keyDiv2Wrap);
//             keyDiv2Wrap.classList.add('keyDiv2Wrap');
//             keyDiv2Wrap.innerText = `${key} :`;
//
//
//             for (const field in user[key]) {
//
//                 let keyDiv2 = document.createElement('div');
//                 keyDiv2Wrap.appendChild(keyDiv2);
//                 keyDiv2.innerText = `${field} - ${user[key][field]}`;
//                 keyDiv2.classList.add('keyDiv2');
//
//             }
//         }
//     }
// }

//
//
//
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

//
//
// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить  кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
// ];
//
// for (const rule of rules) {
//
//     let ruleDiv = document.createElement('div');
//     document.body.appendChild(ruleDiv);
//     ruleDiv.classList.add('ruleDiv');
//
//         for (const key in rule) {
//
//
//             if (key === 'title') {
//
//                 let keyH2 = document.createElement('h2');
//                 ruleDiv.appendChild(keyH2);
//                 keyH2.innerText = rule[key];
//             }else {
//
//                 let keyP = document.createElement('p');
//                 ruleDiv.appendChild(keyP);
//                 keyP.innerText = `${rule[key]}`;
//
//             }
//         }
// }
