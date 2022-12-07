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
// let user = new User(3, 'dima', 'dddd', 'e45435@', 34534345);
//
// let user1 = new User(4, 'vasya', 'ludvig', 'fsdf@sdfsd', 34534634634);
//
// let user2 = new User(5, 'tutya', 'dfdsf', 'sdjfklds@', 243234545);
//
// let user3 = new User(6, 'dushan', 'sdfsdf', 'dsfsdf@', 45345345);
//
// let user4 = new User(7, 'vilya', 'sdfjsd', 'dsfjsdh@', 344576800979);
//
// let user5 = new User(9, 'dira', 'sdjfkj', 'sdjf@', 80980);
//
// let user6 = new User(89, 'odlik', 'jdsfj', 'd@', 545);
//
// let user7 = new User(34, 'danya', 'sdjfkdf', 'k@', 65);
//
// let user8 = new User(58, 'dragun', 'sdjf', 'kj@', 459);
//
// let user9 = new User(980, 'gina', 'dkjfk', 'dljsf@', 8797);
//
// let newArr = [new User(999, 'tolya', 'dfsdf', 'k@', 999999900)];
//
// newArr.push(user, user2, user1, user3, user4, user5, user6, user7, user8, user9);
//
// console.log(newArr);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// let reduce = newArr.reduce((acc, value) => value.id % 2 ? acc : [...acc, value], []);
// console.log(reduce);

// let filter1 = newArr.filter(value => value.id % 2 === 0);
// console.log(filter1);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort1 = newArr.sort((a, b) => a.id - b.id);
// console.log(sort1);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)

// class Client {
//
//     constructor(id, name, surname, email, phone, orderArr) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order = orderArr;
//     }
//
// }


// створити пустий масив, наповнити його 10 об'єктами Client

// let clients = [
//     new Client(1, 'vasya', 'pupkin', 'djfkdjsf@', 3434,['food', 'mood', 'good', 'wood', 'could']),
//     new Client(2, 'vasya', 'pupkin', 'djfkdjsf@',4356, ['food', 'mood']),
//     new Client(3, 'vasya', 'pupkin', 'djfkdjsf@',4356, ['food', 'mood', 'good', 'wood', 'could']),
//     new Client(4, 'vasya', 'pupkin', 'djfkdjsf@',4356, ['food']),
//     new Client(5, 'vasya', 'pupkin', 'djfkdjsf@',4356, ['food', 'mood', 'good', 'wood', 'could']),
//     new Client(6, 'vasya', 'pupkin', 'djfkdjsf@',4356, ['food', 'mood', 'good', 'wood', 'could']),
//     new Client(7, 'vasya', 'pupkin', 'djfkdjsf@',4356, ['food', 'mood', 'good', 'wood', 'could', 'dfjkl']),
//     new Client(8, 'vasya', 'pupkin', 'djfkdjsf@',4356, ['food', 'mood', 'good']),
//     new Client(9, 'vasya', 'pupkin', 'djfkdjsf@',4356, ['food', 'mood', 'good', 'wood',]),
//     new Client(10, 'vasya', 'pupkin', 'djfkdjsf@',456, ['food', 'mood', 'good', 'wood', 'could', 'ddf', 'joj'])
//
// ];
//
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let clients1 = clients.sort((a, b) => a.orderArr.length - b.orderArr.length);
// console.log(clients);

// let clients1 = clients.sort((a, b) => a.order.length - b.order.length);
// console.log(clients1);


//
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// function Car(model, producer, year, maxSpeed, volume,) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volume = volume;
//
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxSpeed}`);
//     };
//     this.info = function () {
//         console.log(this);
//     };
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxSpeed = newSpeed;
//     };
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     };
//     this.addDriver = function (driverObj) {
//         this.driver = driverObj;
//     };
// }
//
//
//
// let car = new Car('camry', 'toyota', 2000, 300, 3.5);
// console.log(car);
// car.addDriver({name:'vasya', age: 31})
//
// console.log(car);
//
// car.changeYear(1000);
// console.log(car);


// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// - (Те саме, тільки через клас)

// class Car {
//
//     constructor(model, producer, year, maxSpeed, volume) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volume = volume;
//
//         this.drive = function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed}`);
//         };
//         this.info = function () {
//             console.log(this);
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed = newSpeed;
//         };
//         this.changeYear = function (newValue) {
//             this.year = newValue;
//         };
//         this.ddDriver = function (driverObj) {
//             this.driver = driverObj;
//         };
//     }
// }
//
// let car = new Car('passat', 'volkswagen', 2005, 350, 2);
// console.log(car);
//
// car.info();
//
// car.changeYear(2020);

// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

// function Cinderella (name, age, feetSize) {
//     this.name = name;
//     this.age = age;
//     this.feetSize = feetSize;
//
// }
//
// let cinderellas = [
//     new Cinderella('hanya', 33, '9us'),
//     new Cinderella('hanya', 33, '8us'),
//     new Cinderella('hanya', 33, '6us'),
//     new Cinderella('hanya', 33, '9us'),
//     new Cinderella('hanya', 33, '6us'),
//     new Cinderella('hanya', 33, '5us'),
//     new Cinderella('hanya', 33, '2us'),
//     new Cinderella('hanya', 33, '1us'),
//     new Cinderella('hanya', 33, '3us'),
//     new Cinderella('hanya', 33, '10us')
// ];



// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

// class Prince {
//
//     constructor(name, age, foundShoe) {
//         this.name = name;
//         this.age = age;
//         this.shoe = foundShoe;
//     }
// }
//
// let prince = new Prince('vasyl', 33, '9us');


//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

//     let foundCinderella = undefined;
// for (let cinderella of cinderellas) {
//     if (cinderella.feetSize === prince.shoe) {
//         foundCinderella = cinderella;
//     }
// }
//
// console.log(foundCinderella);


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

// let cinderella1 = cinderellas.find(cinderella => cinderella.feetSize === '9us');
// console.log(cinderella1);