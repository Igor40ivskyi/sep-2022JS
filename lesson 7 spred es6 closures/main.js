// function foo(obj) {
//     try {
//         console.log(obj.name);
//     } catch (e) {
//         console.log(e);
//     }
//     console.log('ddododododoododo');
// }
//
// foo();



// function divider(a, b) {
//     if (b === 0) {
//         throw new Error('wrong number');
//     }
//
//     return a / b;
// }
//
// console.log(divider(10, 2));
//
// try {
//     console.log(divider(10, 5));
// } catch (e) {
//     console.log(e);
// }
//
// console.log('dadadada');
// console.log('dfdfsdf');


// let user = {name:'vasya',
//
// } ;
//
// console.log(user?.wife?.age);
//
// console.log('dadaada');


// let name = 'vasya';
// let age = 31;
//
// let user =
//     {
//         name:name,
//         age: age,
//     }
//
// console.log(user);
//
//
// let user1 =
//     {
//         name,
//         age
//     }
//
// console.log(user1);
//
// user1.status = true;
// console.log(user1);
// console.log(user);


// let boy =
//     {
//         name: 'bodya',
//         age: 33,
//         status: true,
//         wife:
//             {
//             name: 'olya',
//             age: 23
//             }
//     };

// let name = boy.name;
// let age = boy.age;
// let status = boy.status;
//
// console.log(name);
// console.log(age);

// let {name, age, status} = boy;
//
// console.log(age, name, status);

// let {name, age, status,wife, wife: {name: wName, age: wAge}} = boy;
//
// console.log(wife);
//
// console.log(wName, wAge);

// let car =
//     {
//         name: 'kia',
//         year: 2008,
//         age: 10,
//         wheel: {
//             diameter: 18,
//             color: 'black',
//             disc: {
//                 color: 'silver',
//                 material: 'iron',
//                 classs: 'high',
//             }
//         },
//         engine: {
//             name: 'porche',
//             material: 'steel',
//             value: 3.4,
//             year: 2000,
//
//         },
//         requarimentsToDriver: {
//             name: 'vasya',
//             age: 33,
//             year: 1990,
//         },
//     };
//
//
// let {
//     name, age, year, wheel, wheel: {diameter, color, disc, disc: {color: dColor, material, classs}}, engine, engine: {
//         name: Ename, material: Ematerial,
//         value, year: eYear
//     }, requarimentsToDriver, requarimentsToDriver: {name: dName, age: dAge, year: dYear}
// } = car;
//
// console.log(name);
// console.log(requarimentsToDriver);
// console.log(dName);


// let name = 'dima';
// let age = 40;
// let status = true;
// let car = {
//     model: 'bmw',
//     value: 2.0,
//     color: 'black',
//
// };
//
// let objj =
//     {
//         name,
//         age,
//         status,
//         car,
//     };
//
//
// console.log(objj);

// let pazan = {
//     name: 'bodya',
//         age: 33,
//     status: true,
//     wife:
//     {
//         name: 'olya',
//             age: 23
//     }
// };
//
//
// let {name, age, status, wife, wife: {name: wName, age: wAge}} = pazan;
// console.log(wAge);


// let user =
//     {
//         name: 'vasya', age: 32
//     };
//
// let user1 = {...user};
// console.log(user1);
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];


// let map = users.map(value => ({name: value.name, age: value.age, status: value.status}));
// console.log(map);

// let map1 = users.map((value, index) => ({...value, id: index + 1}));
// console.log(map1);

// let map2 = users.map((value, index) => ({...value, id: index + 1}));
// console.log(map2);

// let man =
//     {
//         name: 'vasya',
//         age: 32,
//     };
//
// let man1 = man;
// man1.status = true;
//
// console.log(man);

// let client =
//     {
//         name: 'dima',
//         age: 33
//     };
//
// let client1 = {
//     name: client.name, age: client.age
// };
//
// client1.status = true;
//
// console.log(client);
// console.log(client1);

// let client =
//     {
//         name: 'dima',
//         age: 33,
//         wife:
//             {
//                 name: 'anna',
//                 age: 33,
//             }
//     };
// console.log(client);
// let client1 = {...client,wife:{...client.wife}};
// client1.name = 'oleg';
// console.log(client1);
//
// client1.wife.name = 'dina';
//
//
// let s = JSON.stringify(client);
// let parse = JSON.parse(s);
// console.log(parse);
// parse.wife.name = 'anya';
// console.log(client);

// let transform = (obj) => JSON.parse(JSON.stringify(obj));
//
// let transform1 = transform(client);
// console.log(transform1);


// ----------------------------------------------------------------- closure ------------------------------------------------

// let userBuilder = (name, age) => {
//
//     let user = {name, age};
//
//     return{
//         setAge: function (newAge) {
//             if (typeof newAge === 'string') {
//                 throw new Error('the age must be a number');
//             }else {
//                 user.age = newAge;
//             }
//         },
//         userInfo: function () {
//             return {...user};
//         },
//         getAge: function () {
//             return user.age;
//         },
//         setName: function (newName) {
//             if (typeof newName === 'number') {
//                 throw new Error('the new Name must be a string type');
//             }else {
//                 user.name = newName;
//             }
//         },
//     }
// };
//
// let builder = userBuilder('vasya', 33);
// builder.setAge(44);
// console.log(builder.userInfo());
// console.log(builder.getAge());
// builder.setName('danya');
// console.log(builder.userInfo());


// function userBuilder(name, age) {
//     let user = {name, age};
//
//     return {
//         setName: function (newName) {
//             if (typeof newName === 'number') {
//                 throw new Error('the new Name must be a string type');
//             } else {
//                 user.name = newName;
//             }
//         },
//         getInfo: function () {
//             return {...user};
//         },
//         setAge: function (newAge) {
//             if (typeof newAge === 'string') {
//                 throw new Error('the new name must be the number type');
//             } else {
//                 user.age = newAge;
//             }
//         },
//     }
// }
//
// let builder = userBuilder('vasya', 33);
// console.log(builder.getInfo());
// builder.setName('Vladik');
// console.log(builder.getInfo());
// builder.setAge(44);
// console.log(builder.getInfo());

// ================================ destructurisation repeat ================
//
// let user = {
//     name: 'dima',
//     age: 22,
//     wife: {
//         name: 'anna',
//         age: 25, status: true
//             }};
//
// let {name, age,wife, wife: {name:wName, age:wAge, status}} = user;
//
// console.log(wName);
// console.log(wAge);
// console.log(status);
//
// console.log(wife);
//
//
// let name1 = 'vasya';
// let age1 = 31;
// let status1 = true;
// let car = 'bmw';
//
// let user1 = {
//     name1,
//     age1,
//     status1,
//     car
// }
// console.log(user1);
//
// let user2 = {
//     name: 'kokos',
//     age: 41,
//     status: true
// };
//
// let user3 = {...user2, name: 'dimas'};
//
// console.log(user3);
//
// console.log(user3);
// console.log(user2);


// let user5 = {
//     name: 'ostap',
//     age: 20,
//     wife: {
//         name: 'diana',
//         age: 20
//     },
//     cars:{autopark: [1, 1, 1]}
//
// };
//
// let user6 = {...user5};
//
// user6.name = 'bobob';
// user6.age = 30;
// user6.wife.name = 'heyley';
// user6.cars.autopark[0] = 2;
//
// console.log(user5);
// console.log(user6);



// let user5 = {
//     name: 'ostap',
//     age: 20,
//     wife: {
//         name: 'diana',
//         age: 20
//     },
//     cars:{autopark: [1, 1, 1]}
//
// };
//
// let s = JSON.stringify(user5);
//
// const user6 = JSON.parse(s);
//
// user6.wife.name = 'lola';
// console.log(user5);
// console.log(user6);
//
//
// function copyCentr(obj) {
//     return JSON.parse(JSON.stringify(obj));
//
// }
//
// const copy = (obj) => JSON.parse(JSON.stringify(obj));

// let name = 'dimon';
// let age = 30;
// let status = true;
// let wife = {};
//
// let nameW = 'anyuta';
// let ageW = 34;
// let colorW = 'broun';
//
// let user = {
//     name,
//     age,
//     status,
//     wife: {nameW, ageW, colorW}
// };
//
// console.log(user);

// let boy = {
//     name: 'petryk',
//     age: 23,
//     status: true,
//     car: {model: 'bmw', year: 2000, beat: 'yes'},
//     wife: {name: 'diana', age: 20, education: 'high'}
// };
//
// let {name, age, status, car, car: {model, year, beat}, wife, wife: {name: Wname, age: Wage, education}} = boy;
//
// console.log(name);
// console.log(Wname);
//
// name = 'don';
// console.log(boy);
//
// console.log(name);
//
// let boy2 = {...boy};
// boy2.name = 'ivan';
// boy2.car.model = 'mers';
//
//
// let boy3 = JSON.parse(JSON.stringify(boy));
// boy3.name = 'titi';
// boy3.car.model = 'gmc';
//
//
// console.log(boy3);
// console.log(boy);
// console.log(boy2);
