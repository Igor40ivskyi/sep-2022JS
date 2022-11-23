// let str = 'hello okten !!!';
// console.log(str);
// // let s = str.concat('!!!');
// // console.log(s);
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.startsWith('hel'));
// console.log(str.endsWith('en'));
// console.log(str.substring(0, 7));
// console.log(str.indexOf('o'));
// console.log(str.lastIndexOf('o'));
// console.log(str.indexOf('o', 5));
// console.log(str.charAt(8));
// // console.log(str.replace('e', '!'));
// console.log(str.replaceAll('e', '!'));
// let split = str.split(' ');
// console.log(split);

// let str = 'hello okten';
// console.log(str);
// let s = str.concat('aaaaa');
// console.log(s);
// console.log(str);
//
// let s1 = s.concat('nnnnnn');
// console.log(s1);
//
// let s2 = s1.concat('ddddddd');
// console.log(s2);
//
// let s3 = str.toUpperCase();
// console.log(s3);
// let s4 = s3.toLowerCase().concat('ggggg').toUpperCase();
// console.log(s4);
//
// let b = str.startsWith('okt');
// console.log(b);


// let cars = ['bmw', 'mersedes', 'kia', 'fiat'];
//
// cars.push('ford');
//
// cars.push('zaporozhec', 'passat', 'audi', 'jetta');
// console.log(cars);
//
// for (let i = 1; i <= 10; i++) {
//     cars.push(i);
// }
//
// console.log(cars);
//
// let s = cars.pop();
// console.log(s);
// console.log(cars);
// console.log(cars);
//
// let concat = cars.concat('vig', 'vig', 'vig');
// console.log(concat);

// let users = [
//     {id: 1, name: 'vasya', age: 33, status: true},
//     {id: 2, name: 'dima', age: 50, status: false},
//     {id: 3, name: 'danya', age: 32, status: true},
//     {id: 4, name: 'anya', age: 38, status: true},
//     {id: 5, name: 'masha', age: 9, status: false},
//     {id: 6, name: 'dasha', age: 23, status: false},
//     {id: 7, name: 'kolya', age: 22, status: true},
//     {id: 8, name: 'ric', age: 19, status: false},
//     {id: 9, name: '', age: 33, status: true}
// ];


// users.forEach(function (s, d,g) {
//     console.log(Array.isArray(g) );
// });

// let filter = users.filter(function (value) {
//     return !value.status;
// });

// console.log(filter);
//
// let filter1 = users.filter(value => value.age > 30);
// console.log(filter1);
// let filter2 = users.filter(value => value.age < 30);
// console.log(filter2);
//
// let filter3 = users.filter(value => value.name === 'vasya');
// console.log(filter3);
//
// let filter4 = users.filter(value => value.name === 'johny');
// console.log(filter4);
//
// let filter5 = users.filter(value => value.id >= 5);
// console.log(filter5);
//
// let filter6 = users.filter(value => value.name === 'anya');
// console.log(filter6);


// let map = users.map(value => value.name);
// console.log(map);

// function doo(arr) {
//     let userNames = [];
//     for (let i = 0;i<arr.length;i++) {
//    userNames[i] = arr[i].name
//     }
//     return userNames
// }
//
// let doo1 = doo(users);
// console.log(doo1);

// let map1 = users.map(value => value.age);
// console.log(map1);
//
// let map2 = users.map(value => value.id);
// console.log(map2);

// let map = users.map(value => ({nickname: value.name, age: value.age}));
// console.log(map);

// let map = users.map(value => ({klychka: value.name, age: value.age, address: 'Zadorozhnya street'}));
// console.log(map);

// let map = users.map((value, index) => ({
//     id: value.id,
//     name: value.name,
//     age: value.age,
//     status: value.status,
//     number: index + 1
// }));
// console.log(map);

// let map7 = users.map((value, index) => ({name: value.name,id: value.id, age: value.age, status: value.status}));
// console.log(map7);

// let map10 = users.map(value => ({
//     id: value.id, name: value.name, age: value.age, status: value.status,
//     randomNumber: Math.floor(Math.random() * 100)
// }));
//
// console.log(map10);

// let map11 = users.map((value, index) => ({...value, number: index * 10}));
// console.log(map11);
//
// let map12 = users.map((value, index) => ({index: index * 100, ...value, gang: 'LA gang'}));
// console.log(map12);

// ---------------------------------------- chain construction practice ---------------------------------------
// let users = [
//     {id: 1, name: 'vasya', age: 33, status: true},
//     {id: 2, name: 'dima', age: 50, status: false},
//     {id: 3, name: 'danya', age: 32, status: true},
//     {id: 4, name: 'anya', age: 38, status: true},
//     {id: 5, name: 'masha', age: 9, status: false},
//     {id: 6, name: 'dasha', age: 23, status: false},
//     {id: 7, name: 'kolya', age: 22, status: true},
//     {id: 8, name: 'ric', age: 19, status: false},
//     {id: 9, name: '', age: 33, status: true}
// ];
//
//  users.map(function (value, index, array) {
//     return {name: value.name, age: value.age, number: index + 1};
// })
//     .filter((value) => value.age < 30)
//     .forEach(value => console.log(value))



// let users = [
//     {id: 1, name: 'vasya', age: 33, status: true},
//     {id: 2, name: 'dima', age: 50, status: false},
//     {id: 3, name: 'danya', age: 32, status: true},
//     {id: 4, name: 'anya', age: 38, status: true},
//     {id: 5, name: 'masha', age: 9, status: false},
//     {id: 6, name: 'dasha', age: 23, status: false},
//     {id: 7, name: 'kolya', age: 22, status: true},
//     {id: 8, name: 'ric', age: 19, status: false},
//     {id: 9, name: '', age: 33, status: true}
// ];
//
// users.sort(function (a, b) {
//     if (a.name < b.name) {
//         return -1
//     }
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name === b.name) {
//         return 0;
//     }
// });

// let users = [
//     {id: 1, name: 'vasya', age: 33, status: true},
//     {id: 2, name: 'dima', age: 50, status: false},
//     {id: 3, name: 'danya', age: 32, status: true},
//     {id: 4, name: 'anya', age: 38, status: true},
//     {id: 5, name: 'masha', age: 9, status: false},
//     {id: 6, name: 'dasha', age: 23, status: false},
//     {id: 7, name: 'kolya', age: 22, status: true},
//     {id: 8, name: 'ric', age: 19, status: false},
//     {id: 9, name: '', age: 33, status: true}
// ];

// users.sort(function (a, b) {
//     if (a.id < b.id) {
//         return 1;
//     }
//     if (a.id > b.id) {
//         return -1;
//     }
//     if (a.id === b.id) {
//         return 0;
//     }
// });

// let users2 = users.map(function (value, index, array) {
//     return {...value, randomNumber: Math.round(Math.random() * 100)}
// })
//     .sort(function (a, b) {
//         if (a.randomNumber > b.randomNumber) {
//             return 1;
//         }
//         if (a.randomNumber < b.randomNumber) {
//             return -1;
//         }
//         if (a.randomNumber === b.randomNumber) {
//             return 0;
//         }
//     });

// console.log(users2);


// ---------------------------------------- reduce -------------------------------------------------------------

// let users = [
//     {id: 1, name: 'vasya', age: 33, status: true},
//     {id: 2, name: 'dima', age: 50, status: false},
//     {id: 3, name: 'danya', age: 32, status: true},
//     {id: 4, name: 'anya', age: 38, status: true},
//     {id: 5, name: 'masha', age: 9, status: false},
//     {id: 6, name: 'dasha', age: 23, status: false},
//     {id: 7, name: 'kolya', age: 22, status: true},
//     {id: 8, name: 'ric', age: 19, status: false},
//     {id: 9, name: '', age: 33, status: true}
// ];
//
// let reduce = users.reduce((warehouse, value) => {
//     warehouse.ages.push(value.age);
//     warehouse.names.push(value.name);
//     return warehouse;
// },{ages:[],names:[]});
//
// console.log(reduce);







