// 1) Створити масив з 20 чисел та:

// let arr = [];
// for (let i = 0; i < 20; i++) {
//
//     arr.push(Math.round(Math.random() * 100));
// }
//
// console.log(arr);

//     a) відсортувати його від меншого до більшого.

// let sort = arr.sort((a, b) => a - b);
// console.log(sort);

//     b) відсортувати його від більшого до меншого.

// let sort1 = arr.sort((a, b) => b - a);
// console.log(sort1);
//

//     c) Відфілтрувати числа які є кратними 3.

// let filter = arr.filter(value => value % 3 === 0 && value !== 0);
// console.log(filter);

// d) Відфілтрувати числа які є більшими за 10.

// let filter1 = arr.filter(value => value > 10);
// console.log(filter1);

// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// arr.forEach((value, index) => {
//     document.write(`<h2>${index + 1} ${value} </h2>`);
// });


// f) За допомогою map збільшити кожен елемент в масиві в три рази.

// console.log(arr.map(value => value * 3));


//     g) Порахувати загальну суму всіх елментів у масиві (reduce)

// let reduce = arr.reduce((accum, value) => {
//     return accum + value;
// },0);
//
// console.log(reduce);


// let nums = [1, 2, 3, 4, 5];
// debugger;
//
// let number = nums.reduce((acc, value) => {
//     return acc + value;
// },0);
//
// console.log(number);


// 2) Створити масив з 20 стрічок та:
// let strings = ['katmandu', 'brazil', 'dima', 'kolya', 'vasya', 'adf', 'doe', 'mrSmith', 'drop', 'kamhere',
//     'black', 'drag', 'basketball', 'golf', 'car', 'tree', 'snickers', 'breakfest', 'dinner', 'dream'];

//     a) Відсортувати його в алфавітному порядку

// console.log(strings.sort((a, b) => {
//     if (a < b) {
//         return -1;
//     }
//     if (a > b) {
//         return 1;
//     }
//     if (a === b) {
//         return 0;
//     }
// }));


// b) Відсортувати в зворотньому порядку

// console.log(strings.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     }
//     if (a < b) {
//         return 1;
//     }
//     if (a === b) {
//         return 0;
//     }
// }));


// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

// let strings2 = strings.filter(value => value.length > 4);
// console.log(strings2);

// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'

// let map = strings.map((value, index) => {
//     let newArr = [];
//     let sam = 'Sam says hell yeah ' + value
//     newArr.push(sam);
//     return newArr.join();
// });
//
// console.log(map);


// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :

// const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];


// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// let sort = users.sort((a, b) => a.age - b.age);
// console.log(sort);
//
// let sort1 = users.sort((a, b) => b.age - a.age);
// console.log(sort1);


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let sort2 = users.sort((a, b) => a.name.length - b.name.length);
// console.log(sort2);
//
// let sort3 = users.sort((a, b) => b.name.length - a.name.length);
// console.log(sort3);


// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)

// let map = users.map((value, index) => {
//     let newUser = {...value, id: Math.round(Math.random() * 100)};
//
//     return newUser;
// });
//
// console.log(map);


// d) відсортувати його за індентифікатором

// let sort = map.sort((a, b) => a.id - b.id);
// console.log(sort);


// e) Всі хто одружений мають попасти у новий масив та отримати квартиру (reduce)

// const users = [
//         {name: 'vasya', age: 31, isMarried: false},
//         {name: 'petya', age: 30, isMarried: true},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: false},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: true},
//         {name: 'olya', age: 31, isMarried: false},
//         {name: 'max', age: 31, isMarried: true}
//     ];
//
// let reduce = users.reduce((accum, value) => {
//     if (value.isMarried === true) {
//         accum.married.push({...value,flat:true});
//     }else {
//         accum.notMarried.push(value);
//     }
//
// return accum
// },{married:[], notMarried: []});
//
// console.log(reduce);
//
//
// let reduce2 = users.reduce((acc, value) => {
//     if (value.isMarried) {
//         value.flat = true;
//         acc.push(value);
//     }
//     return acc;
// },[]);
//
// console.log(reduce2);

// ================================ розкладання acc start ======================================================================

// const users = [
//         {name: 'vasya', age: 31, isMarried: true},
//         {name: 'petya', age: 30, isMarried: false},
//         {name: 'kolya', age: 29, isMarried: true},
//         {name: 'olya', age: 28, isMarried: false},
//         {name: 'max', age: 30, isMarried: true},
//         {name: 'anya', age: 31, isMarried: true},
//         {name: 'oleg', age: 28, isMarried: false},
//         {name: 'andrey', age: 29, isMarried: true},
//         {name: 'masha', age: 30, isMarried: false},
//         {name: 'olya', age: 31, isMarried: true},
//         {name: 'max', age: 31, isMarried: false}
//     ];
//
// let reduce = users.reduce((acc, value, index) => value.isMarried ? [...acc, {...value, flat: index + 1}] :acc, []);
//
// console.log(reduce);

// =========================== отак працює редюс і то треба вивчити просто start ! ===================================================

// let reduce2 = users.reduce((acc, value, index) => value.isMarried ? [...acc, {
//         ...value,
//         flat: index + 1
// }] : [...acc, {...value, flat: true}], []);


// =========================== отак працює редюс і то треба вивчити просто end ! ===================================================



// ================================================== розкладання acc end ==================================================================


// let arr = [1, 2, 3, 4, 5];
// let reduce = arr.reduce((acc, value) => acc + value,);
//
// console.log(reduce);

// let a = [];
// a.push('item1', 'item2', 'item3', 'item4', 'item5');
//
// // console.log(a);
//
// let b = [...a];
//
// // console.log(a === b);
//
// let c = [...a];
// console.log(b === c);


// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// const cars = [
//     {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//     {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//     {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//     {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//     {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//     {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//     {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//     {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//     {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//     {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//     {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//     {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//     {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];
//
// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

// let filter = cars.filter(value => value.volume > 3);
// console.log(filter);

// let reduce = cars.reduce((acc, value) => value.volume > 2 ? [...acc,{...value}] : acc, []);
// console.log(reduce);


// - двигун = 2л

// let filter1 = cars.filter((value, index) => value.volume === 2);
// console.log(filter1);

// let reduce2 = cars.reduce((acc, value) => value.volume === 2 ? [...acc, {...value, superCar: true}] : acc, []);
// console.log(reduce2);

// - виробник мерс

// let filter2 = cars.filter(value => value.producer === 'mercedes');
// console.log(filter2);

// let reduce3 = cars.reduce((acc, value) => value.producer === 'mercedes' ? [...acc, {...value, isMers: true}] : [...acc, {
//         ...value,
//         isMers: false
// }], []);
//
// console.log(reduce3);

// - двигун більше 3х літрів + виробник мерседес

// let filter3 = cars.filter(value => value.volume > 3 && value.producer === 'mercedes');
// console.log(filter3);

// - двигун більше 3х літрів + виробник субару

// let filter4 = cars.filter(value => value.volume > 3 && value.producer === 'subaru');
// console.log(filter4);

// - сили більше ніж 300

// let filter5 = cars.filter(value => value.power > 300);
// console.log(filter5);

// let reduce5 = cars.reduce((acc, value) => value.power > 300 ? [...acc, {...value, more300: true}] : [...acc, {
//         ...value,
//         more300: false
// }], []);
//
// console.log(reduce5);


// - сили більше ніж 300 + виробник субару

// let filter6 = cars.filter(value => value.power > 300 && value.producer === 'subaru');
// console.log(filter6);

// let reduce6 = cars.reduce((acc, value) => value.power > 300 && value.producer === 'subaru' ? [...acc, {
//         ...value,
//         powerMore300AndSubaru: true
// }] : acc, []);
//
// console.log(reduce6);

// - мотор серіі ej

// let filter7 = cars.filter(value => value.engine.includes('ej'));
// console.log(filter7);

// - сили більше ніж 300 + виробник субару + мотор серіі ej

// let filter8 = cars.filter(value => value.power > 300 && value.producer === 'subaru' && value.engine.includes('ej'));
// console.log(filter8);

// - двигун меньше 3х літрів + виробник мерседес

// let filter9 = cars.filter(value => value.volume < 3 && value.producer === 'mercedes');
// console.log(filter9);

// - двигун більше 2л + сили більше 250

// let filter10 = cars.filter(value => value.volume > 2 && value.power > 250);
// console.log(filter10);

// - сили більше 250  + виробник бмв

// let filter11 = cars.filter(value => value.power > 250 && value.producer === 'bmw');
// console.log(filter11);


//
// - взять слдующий массив
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// -- Відсортувати їх по ID

// let sort = usersWithAddress.sort((a, b) => a.id - b.id);
// console.log(sort);

// -- Відсортувати їх по ID в зворотньому порядку

// let sort1 = usersWithAddress.sort((a, b) => b.id - a.id);
// console.log(sort1);

// -- Відсортувати по віку

// let sort2 = usersWithAddress.sort((a, b) => a.age - b.age);
// console.log(sort2);

// -- Відсортувати по віку в зворотньому порядку

// let sort3 = usersWithAddress.sort((a, b) => b.age - a.age);
// console.log(sort3);

// -- Відсорутвати по імені

// let sort4 = usersWithAddress.sort((a, b) => {
//     if (a.name > b.name) {
//         return 1;
//     }
//     if (a.name < b.name) {
//         return -1;
//     }
//     if (a.name === b.name)
//         return 0;
// });
//
// console.log(sort4);

// -- Відсорутвати по назві вулиці

// let sort5 = usersWithAddress.sort((a, b) => {
//     if (a.address.street > b.address.street) {
//         return 1;
//     }
//     if (a.address.street < b.address.street) {
//         return -1;
//     }
//     if (a.address.street === b.address.street) {
//         return 0;
//     }
// });

// console.log(sort5);

// -- Відсорутвати по номеру будинку

// let sort6 = usersWithAddress.sort((a, b) => a.address.number - b.address.number);
// console.log(sort6);

// -- Залигити тільки тих, хто молодший ніж 30 (filter)

// let filter = usersWithAddress.filter(value => value.age < 30);
// console.log(filter);

// -- Залишити тільки одружених

// let filter1 = usersWithAddress.filter(value => value.isMarried);
// console.log(filter1);

// -- Залишити тільки одружених, які молодні за 30

// let filter2 = usersWithAddress.filter(value => value.isMarried && value.age < 30);
// console.log(filter2);

// -- Залишити лише тих, в кого парні номери будинків.

// let filter3 = usersWithAddress.filter(value => value.address.number % 2 === 0);
// console.log(filter3);

// -- Порахувати загальний вік всіх людей. (reduce)

// let number = usersWithAddress.reduce((acc, value) => {
//  return acc + value.age
// },0);

// console.log(number);


// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

// let reduce = usersWithAddress.reduce((acc, value) => {
//     if (value.isMarried === true && value.age > 30) {
//         value.child = {name:'nazarko', age: 12}
//         acc.push(value);
//     }
//    return acc;
// },[]);
//
// console.log(reduce);

// ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
//     Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
//     Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.

//     Створити не менше 7 та не більше 20 машинок.
// let car1 =
//     {
//         producer: 'bmw',
//         volume: 2,
//         power:300,
//         price: 1000,
//         yearOfrelease: 2000,
//         owner: {
//             name: 'vasya',
//             age: 31,
//             experiance: 3
//         }
//     };
//    let car2 = {
//         producer: 'bmw',
//         volume: 2.5,
//        power:350,
//        price: 1050,
//         yearOfrelease: 2015,
//         owner: {
//             name: 'vasyl',
//             age: 29,
//             experiance: 3
//         }
//     };
//    let car3 = {
//         producer: 'bmw',
//         volume: 1,
//        power:100,
//        price: 100,
//         yearOfrelease: 1990,
//         owner: {
//             name: 'vasya',
//             age: 22,
//             experiance: 10
//         }
//     };
//    let car4 = {
//         producer: 'mercedes',
//         volume: 5,
//        power:600,
//        price: 2000,
//         yearOfrelease: 1995,
//         owner: {
//             name: 'dima',
//             age: 40,
//             experiance: 1
//         }
//     };
//    let car5 = {
//         producer: 'kia',
//         volume: 1.5,
//        power:200,
//        price: 3000,
//         yearOfrelease: 2017,
//         owner: {
//             name: 'serhiy',
//             age: 35,
//             experiance: 9
//         }
//     };
//    let car6 = {
//         producer: 'varburg',
//         volume: 1.1,
//        power:170,
//        price: 90,
//         yearOfrelease: 1983,
//         owner: {
//             name: 'danik',
//             age: 50,
//             experiance: 20
//         }
//     };
//    let car7 = {
//         producer: 'mistubushi',
//         volume: 4.5,
//        power:700,
//        price: 5000,
//         yearOfrelease: 2005,
//         owner: {
//             name: 'slon',
//             age: 22,
//             experiance: 5
//         }
//     };
//    let car8 = {
//         producer: 'bmw',
//         volume: 2.6,
//        power:499,
//        price: 2000,
//         yearOfrelease: 2000,
//         owner: {
//             name: 'karoline',
//             age: 40,
//             experiance: 13
//         }
//     };
//    let car9 = {
//         producer: 'pegeuot',
//         volume: 2.5,
//        power:260,
//        price: 2500,
//         yearOfrelease: 2000,
//         owner: {
//             name: 'kolya',
//             age: 25,
//             experiance: 6
//         }
//     };
//    let car10 = {
//         producer: 'lanos',
//         volume: 1.5,
//        power:90,
//        price: 1100,
//         yearOfrelease: 1998,
//         owner: {
//             name: 'dima',
//             age: 54,
//             experiance: 2
//         }
//     };
//    let car11 = {
//         producer: 'subaru',
//         volume: 4,
//        power:900,
//        price: 4500,
//         yearOfrelease: 1999,
//         owner: {
//             name: 'karina',
//             age: 34,
//             experiance: 5
//         }
//     };

//     Для початку вкладіть всі наші створені автомобілі в масив cars.

// let cars = [];
// cars.push(car1, car2, car3, car4, car5, car6, car7, car8, car9, car10, car11);
// console.log(cars);

//     Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).

// let reduce = cars.reduce((acc, value, index) => {
//
//     if (index <= 6) {
//         value.power = value.power + (value.power / 100) * 10;
//         value.fixed = true;
//         acc.push(value);
//     }else {
//         acc.push(value);
//     }
//
//
//     return acc;
// },[]);
//
// console.log(reduce);
// console.log(cars);


// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).

// let reduce1 = reduce.reduce((acc, value) => {
//     if (value.fixed) {
//         value.driver = 'ura profi';
//         acc.push(value);
//     }else {
//         acc.push(value);
//     }
//     return acc;
// },[]);
//
// console.log(reduce1);

// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%

// for (let i = 0; i < reduce1.length; i += 2) {
//     cars[i].power = cars[i].power + (cars[i].power / 100) * 10;
//     cars[i].price = cars[i].price + (cars[i].price / 100) * 5;
//     cars[i].upPowerPrice = true;
// }
// console.log(reduce1);


// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
//     то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.

// let driverCourses = reduce1.reduce((acc, value) => {
//     if (value.owner.experiance < 5 && value.owner.age > 25) {
//         value.owner.experiance++
//         acc.push(value.owner);
//     }
//     return acc;
// }, []);
//
// console.log(driverCourses);


//     Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі

// let sum = 0;
//
// for (let i = 0; i < reduce1.length; i++) {
//     sum = sum + reduce1[i].price;
// }
// console.log(sum);


// Задача: дан отсортированный по возрастанию массив целых чисел.
//     Необходимо вернуть наименьший и наибольший индекс заданного элемента.
//     Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
//     Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
//     Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
//
// let arr1 = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14];
//
// function minMaxIndexFinder(arr, key) {
//         let answer = '';
//         for (let i = 0; i < arr.length; i++) {
//                 if (arr[i] === key) {
//
//         let minIndex = arr.indexOf(key);
//         let maxIndex = arr.lastIndexOf(key);
//          answer = `MinIndex = ${minIndex}, MaxIndex = ${maxIndex}`;
//                 }else {
//                         answer = -1
//                 }
//         }
//         return answer
// }
//
// console.log(minMaxIndexFinder(arr1, 14));