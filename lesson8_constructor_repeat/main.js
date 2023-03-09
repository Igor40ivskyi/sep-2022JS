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

// class Client {
//
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = order;
//     }
//
// }
//
// let client = new Client(4, 'dima', 'dlfjdf', 'sdfjkl@gmail', 324324, [24, 234, 234]);
//
// console.log(client);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
// з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, brand, year, maxSpeed, volume) {
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//     };
//     this.info = function () {
//         for (let key in this) {
//            if (typeof this[key] !== "function") console.log(`${key} - ${this[key]}`)
//         }
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed += newSpeed;
//     };
//
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driver) {
//         this.driver = driver;
//     };
// }
//
// let car = new Car('s5', 'bmw', 2000, 300, 3.5);
//
// console.log(car);
//
// car.info();
//
// car.increaseMaxSpeed(40);
//
// console.log(car.maxSpeed);

// Створити клас який дозволяє створювати об'єкти car, з властивостями
// модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    model;
    brand;
    year;
    maxSpeed;
    volume;

    constructor(model, brand, year, maxSpeed, volume) {
        this.model = model;
        this.brand = brand;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} per hour`)
    }

    info() {
        for (let key in this) {
            if (typeof this[key] !== "function") {
                console.log(`${key} - ${this[key]}`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed
    }

    changeYear(newYear) {
        this.year = newYear;
    }

    addDriver() {

    }
}

let car = new Car('mers', 'kadilak', 3000, 300, 34);

car.info()







