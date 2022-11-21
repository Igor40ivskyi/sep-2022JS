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

let users = [
    {id: 1, name: 'vasya', age: 33, status: true},
    {id: 2, name: 'vasya', age: 33, status: true},
    {id: 3, name: 'vasya', age: 33, status: true},
    {id: 4, name: 'vasya', age: 33, status: true},
    {id: 5, name: 'vasya', age: 33, status: true},
    {id: 6, name: 'vasya', age: 33, status: true},
    {id: 7, name: 'vasya', age: 33, status: true},
    {id: 8, name: 'vasya', age: 33, status: true},
    {id: 9, name: 'vasya', age: 33, status: true}
];

users.forEach(function (s, d,g) {
    console.log(Array.isArray(g) );
});
