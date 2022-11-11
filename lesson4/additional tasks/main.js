// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

// let arr = [434, 34, 3, 6, 809, 'vasya', 'kolya', 'petya', 'dodik', 'kysil', 43, 34, 'wds', true, false];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }



// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let arr1 = [];
// arr1[0] = 'vasya';
// arr1[1] = 4343;
// arr1[2] = 'dododoododod';
// arr1[3] = 'dragon';
// arr1[4] = true;
// arr1[5] = false;
// arr1[6] = 'tralalalal';
// arr1[7] = 'trorloloolo';
// arr1[8] = 'dkdkdkdk';
// arr1[9] = 343435464646;





//
//
//
// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = 0;
// while (i < arr2.length) {
//     console.log(arr2[i]);
//     i++;
// }
//     2. перебрати його циклом for
// for (let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }
//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let i = 0;
// while (i < arr2.length) {
//     if (i % 2 !== 0) {
//         console.log(arr2[i]);
//     }
//     i++;
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i = 0; i < arr2.length; i++) {
//     if (i % 2 !== 0) {
//         console.log(arr2[i]);
//     }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let i = 0;
// while (i < arr2.length) {
//     if (arr2[i] % 2 === 0 &&) {
//         console.log(arr2[i]);
//     }
//     i++;
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 2 === 0) {
//         console.log(arr2[i]);
//     }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i] % 3 === 0) {
//         arr2[i] = 'okten';
//     }
// }
//
// console.log(arr2);
// 8. вивести масив в зворотньому порядку.
// for (let i = arr2.length - 1; i >= 0; i--) {
//     console.log(arr2[i]);
//
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let arr2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
// let i = arr2.length - 1;
// while (i >= 0) {
//     console.log(arr2[i]);
//     i--;
// }

// for (let i = arr2.length - 1; i >= 0; i--) {
//     console.log(arr2[i]);
// }

// let i = arr2.length - 1;
// while (i >= 0) {
//     if (i % 2 !== 0) {
//         console.log(arr2[i]);
//     }
//     i--;
// }

// for (let i = arr2.length -1; i >= 0; i--) {
//     if (i % 2 !== 0) {
//         console.log(arr2[i]);
//     }
// }

// let i = arr2.length - 1;
// while (i >= 0) {
//     if (arr2[i] % 2 === 0) {
//         console.log(arr2[i]);
//     }
//     i--;
// }

// for (let i = arr2.length - 1; i >= 0; i--) {
//     if (arr2[i] % 2 === 0) {
//         console.log(arr2[i]);
//     }
// }

// for (let i = arr2.length - 1; i >= 0; i--) {
//     if (arr2[i] % 3 === 0) {
//         arr2[i] = 'okten';
//     }
// }
//
// for (const number of arr2) {
//     console.log(number);
//
// }

//
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arr3 = [];
// for (let i = 0; i < 10; i++) {
//     arr3[i] = +`${i +1}`;
// }
// console.log(arr3);
// for (let item of arr3) {
//     console.log(item);
// }
//
// console.log(typeof arr3[3]);
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arr4 = [];
// for (let i = 0; i < 10; i++) {
//     arr4[i] = `point ${i +1}`;
//
// }
// for (const arr4Element of arr4) {
//     console.log(arr4Element);
//
// }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr5 = [];
// arr5[0] = 345435;
// arr5[1] = 5443545;
// arr5[2] = true;
// arr5[3] = false;
// arr5[4] = 'vasya';
// arr5[5] = 'sdjfkljsdfj';
// arr5[6] = 'asd';
// arr5[7] = '34234234';
// arr5[8] = 'trartatat a';
// arr5[9] = 45435345;
//
// for (const arr5Element of arr5) {
//     console.log(arr5Element);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr6 = [3, 4, 56, 546, 78, 2, 35454, 5645, 2, 546,
//     'vasiliy', 'lola', 'dima', 'triririr', 'djsfds', 'give',
//     'little', 'tola', 'dila', 'ddfj', 'jdfl', false, true, false, true, true, true, false, false, false, true];
//
// console.log(typeof arr6[21]);
// for (let i = 0; i < arr6.length; i++) {
//     if (typeof arr6[i] === 'boolean') {
//         console.log(arr6[i]);
//     }
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// for (let i = 0; i < arr6.length; i++) {
//     if (typeof arr6[i] === 'number') {
//         console.log(arr6[i]);
//     }
// }
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// for (const arr6Element of arr6) {
//     if (typeof arr6Element === 'string') {
//         console.log(arr6Element);
//     }
//
// }
//
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let arr7 = [];
// arr7[0] = 'dyadya';
// arr7[1] = 'vasya';
// arr7[2] = 'dima';
// arr7[3] = 'tanya';
// arr7[4] = true;
// arr7[5] = 34355;
// arr7[6] = false;
// arr7[7] = 3434;
// arr7[8] = true;
// arr7[9] = 'dfdfrer';
//
// for (let i = 0; i < arr7.length; i++) {
//     console.log(arr7[i]);
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// document.write(`<ul>`)
// for (let i = 0; i < 10; i++) {
//     document.write(`<h1>${i}</h1>`);
//     console.log(`${i}`);
// }
// document.write(`</ul>`);

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//     document.write(`<ul>`)
// for (let i = 0; i < 100; i++) {
//     document.write(`<h2>${i}</h2>`)
//     console.log(i);
// }
//     document.write(`</ul>`)

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 0; i < 100; i += 2) {
//     document.write(`${i}`);
//     console.log(i);
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i = 0; i < 100; i++) {
//     if (!(i % 2)) {
//         console.log(i);
//     }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i = 0; i < 100; i++) {
//     if (i % 2) {
//         console.log(i);
//     }
// }
//
//

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let books = [
    {title:'adventures',pageCount:345,authors:
            [
                {name:'jakie', age: 33},
                {name:'jinni', age: 23}
            ],
        genres: ['madness', 'fun', 'nice']
    },

    {title:'asd',pageCount:390,authors:
            [
                {name:'jakie', age: 33}
            ],
        genres: ['madness', 'fun', 'fighting','bite']
    },

    {title:'gfghfh',pageCount:234,authors:
            [
                {name:'jakie', age: 33},
                {name:'jakie', age: 33},
                {name:'jinni', age: 23}
            ],
        genres: ['madness', 'fun', 'nice','nice','nice','nice','nice','nice','nice','nice']
    },

    {title:'hghgh',pageCount:140,authors:
            [
                {name:'jakie', age: 33},
                {name:'jakie', age: 33},
                {name:'jinni', age: 23}
            ],
        genres: ['madness',]
    },

    {title:'ghfghreyrtyhrthtyhty',pageCount:900,authors:
            [
                {name:'jakie', age: 33},
                {name:'jinni', age: 23},
                {name:'jinni', age: 23},
                {name:'jinni', age: 23},
                {name:'jinni', age: 23},
            ],
        genres: ['madness','madness','madness','madness', 'fun', 'nice']
    }
];




console.log(books[0].authors);


// -знайти наібльшу книжку.
let max = books[0]
for (let book of books) {
    if (book.pageCount > max.pageCount) {
        max = book;
    }
}
console.log(max);

// - знайти книжку/ки з найбільшою кількістю жанрів
let maxGenreCount = books[0];
for (let book of books) {
    if (book.genres.length > maxGenreCount.genres.length) {
        maxGenreCount = book;
    }
}
console.log(maxGenreCount);

// - знайти книжку/ки з найдовшою назвою
let maxTitle = books[0];
for (let i = 0; i < books.length; i++) {
    if (books[i].title.length > maxTitle.title.length) {
        maxTitle = books[i];
    }
}
console.log(maxTitle);

// - знайти книжку/ки які писали 2 автори
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 2) {
        console.log(books[i]);
    }
}

// - знайти книжку/ки які писав 1 автор
for (let i = 0; i < books.length; i++) {
    if (books[i].authors.length === 1) {
        console.log(books[i]);
    }
}