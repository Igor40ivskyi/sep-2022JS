// let arr = [
//     {name:'vasya',age:31, status: true},
//     {name:'petya',age:34, status: true},
//     {name:'kolya',age:23, status: false},
//     {name:'danik',age:65, status: true},
//     {name:'vetal',age:43, status: false},
//     {name:'igor',age:32, status: false},
//     {name:'kaktus',age:31, status: true},
//     {name:'durik',age:11, status: false},
//     {name:'dany',age:36, status: true},
//     {name:'mr solve', age: 75, status: false}
// ]
// let space = ' ';
// function iterator(arr) {
//     for (const arrElement of arr) {
//         document.write(`<h3 class="heading">${arrElement.name} ${arrElement.age} ${arrElement.status}</h3>`);
//     }
// }
// iterator(arr);

// function square(a, b) {
//     let squareOfRoom = a * b;
//     return squareOfRoom;
// }
//
// let square1 = square(534, 4434);
// console.log(square1);
//
// console.log(square(4, 4));
//
// console.log(square(345, 23));
//
// console.log(square(2345, 600));
//
// function sendCounter(a,b) {
//     let square = a * b;
//     let x = square * 100;
//     return x;
// }
//
// console.log(sendCounter(4, 3));
//
//
// function counter(a, b) {
//     let square = a * b;
//     return square;
// }

// function writer(title, price, description) {
//
//     document.write(`
//     <div>
//     <h1>${title} ${price}</h1>
//     <p>${description}</p>
// </div>
//
//     `);
// }
//
// writer('milk', 22, 'dood milk');
// writer('juice', 33, 'good juice');
// writer('beer', 49, 'good beer');
// writer('chokolate', 44, 'good chokolate');


let arr = [1, 'df'];
console.log(arr);
arr[2] = 'dfdf ';

console.log(arr);
for (let i = 4; i < 9; i++) {
     let n = Math.random() * 100
    arr[i] = n;
}
console.log(arr);