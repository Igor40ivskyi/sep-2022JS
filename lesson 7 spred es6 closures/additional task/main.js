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

class Atributs {

    constructor(titleOfAttr, actionOfAttr) {
        this.titleOfAttr = titleOfAttr;
        this.actionOfAttr = actionOfAttr;
    }
}
// Таким чином описати теги
// -a


let tegA = new Teg('a', 'визначає гіперсилку, для переходу на певне місце на сторінці', [new Atributs('download', 'повід' +
    'омляє, що ця ссилка повинна була би бути використана для скачування файлу'), new Atributs('href', 'єдиний обовязковий атрибут для визначення ссилки')]);

console.log(tegA);


// -div


// -h1
// -span
// -input
// -form
// -option
// -select




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
