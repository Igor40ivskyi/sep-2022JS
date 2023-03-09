// function User(name,age,skills,wife) {
//     this.name = name;
//     this.age = age;
//     this.skills = skills;
//     this.wife = wife
//     this.greeting = function (msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     };
// }

// const user = new User('dima', 33, ['java'], {name: 'anna'});
// console.log(user);
//
// let s = user.greeting('HEELOOOOOOOO');
// console.log(s);

// const user1 = new User('vasya', 33, ['java'], {name: 'anna'});
//
// let friend = {
//     name: 'dima',
//     sdf: 'sdfk',
//     sfd: 'sdfd',
// };
//
// user1.greeting.call(friend,'heego');
//
// let user3 = new User();
// console.log(user3);

// =================== class

// class UserPuser {
//
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greeting() {
//         console.log(`hello my name is ${this.name}`);
//     }
//
// }
//
// let userPuser = new UserPuser('katya', 23);
// // console.log(userPuser);
//
// class SuperUser extends UserPuser {
//
// }
//
// let superUser = new SuperUser('koko',33);
// console.log(superUser);


// class User {
//
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     greeting(msg) {
//         console.log(`${msg} my name is ${this.name}`);
//     }
//
// }
//
// class SuperUser extends User {
//
//
//     constructor(skills) {
//         super(name, age);
//         this.skills = skills;
//     }
// }
//
//
// let superUser = new SuperUser('vasya', 33, [34, 34, 34]);
// console.log(superUser);


// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User(id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// const usersArr = [];
//
// for (let i = 0; i < 10; i++) {
//     usersArr.push(new User(i, 'vasya', 'sdf', 'sdfd', 4343));
// }
//
// console.log(usersArr);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

class Client {

    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }

}

let client = new Client(4, 'dima', 'dlfjdf', 'sdfjkl@gmail', 324324, [24, 234, 234]);

console.log(client);f

















