//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// let objPrototype = {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
//
//
//
// class Company {
//     name;catchPhrase;bs
//
//     constructor(name,catchPhrase,bs) {
//         this.name = name;
//         this.catchPhrase = catchPhrase;
//         this.bs = bs;
//     }
// }
// class Geo {
//
//     constructor(lat, lng) {
//         this.lat = lat;
//         this.lng = lng;
//     }
// }
//
// class Address {
//
//     constructor(street, suite, city, zipcode, geo) {
//         this.street = street;
//         this.suite = suite;
//         this.city = city;
//         this.zipcode = zipcode;
//         this.geo = geo;
//     }
// }
//
// class User2 {
//
//     constructor(id, name, username, email, address, phone, website, company) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = address;
//         this.phone = phone;
//         this.website = website;
//         this.company = company;
//     }
// }
//
// let user2 = new User2(1, 'kolya', 'lolik', 'ddd@', new Address('Shevchenka', 23, 'Lviv', 34324, new Geo('-37.3159', '81.1496')),
//     34324, 'sdfdsgsdg', new Company('lesta', 'sdkjgsdgj', 'sdfsdgsd'));
//
// console.log(user2);



// function User(id, name, username, email, addres, phone, website, company) {
//     this.id = id;
//     this.name = name;
//     this.username = username;
//     this.email = email;
//     this.address = addres;
//     this.phone = phone;
//     this.website = website;
//     this.company = company;
// }
//
// function Addres(street, suite, city, zipcode,geo) {
//     this.street = street;
//     this.suite = suite;
//     this.city = city;
//     this.zipcode = zipcode;
//     this.geo = geo;
// }
//
// function Geo(lat, lng) {
//     this.lat = lat;
//     this.lng = lng;
// }
//
// function Company(name, catchPhrase, bs) {
//     this.name = name;
//     this.catchPhrase = catchPhrase;
//     this.bs = bs;
// }
//
//
//
// let user3 = new User(1, 'vasya', 'pupkin', 'ddd@', new Addres('zelena', 12, 'Lviv', 34355,new Geo('-37.3159','81.1496')), 453453, 'jujujuj', new Company('' +
//     'dragon', 'Multi-layered client-server neural-net', 'harness real-time e-markets'));
//
// console.log(user3);
//
//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
//
class Teg {

    constructor(name, action, atributs) {
        this.name = name;
        this.action = action;
        this.atributs = atributs;
    }
}

class Atribut {

    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}
// Таким чином описати теги
// -a


let aTeg = new Teg('a', 'визначає гіперсилку, для переходу на певне місце на сторінці', [new Atribut('download', 'повід' +
    'омляє, що ця ссилка повинна була би бути використана для скачування файлу'), new Atribut('href', 'єдиний обовязковий атрибут для визначення ссилки')]);

console.log(aTeg);


// -div

let divTeg = new Teg('div', 'є універсальним контейнером для контенту', [new Atribut('class', 'дозволяє отримувати досту до елементів і стилізувати їх'), new Atribut('id',
    'унікальний ідентифікатор')]);

console.log(divTeg);

// -h1

let h1Teg = new Teg('h1', 'є заголовком виділяє текст жирним', [new Atribut('class', 'дозволяє отримувати досту до елементів і стилізувати їх'), new Atribut('id',
    'унікальний ідентифікатор')]);

console.log(h1Teg);

// -span

let spanTeg = new Teg('span', 'є основним стрічковим контейнером для фразового контенту', ['atribut1', 'atribut2']);

// -input

let input = new Teg('input', 'використовується для отримування інформації від користувача', [new Atribut('type', 'тип елементу відобраєення'), new Atribut(
    'acept', 'приймає щось'
)]);

console.log(input);

// -form

let form = new Teg('form', 'sdfs', [1, 2]);

console.log(form);

// -option

let option = new Teg('option', 'sdjfkfdj ', [1, 2]);

// -select

let select = new Teg('select', 'sajdfklj s', [1, 2]);





// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }
//
//
