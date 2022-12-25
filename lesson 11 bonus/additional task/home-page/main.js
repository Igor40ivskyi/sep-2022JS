// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву
// favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);
mainDiv.classList.add('mainDiv');

localStorage.setItem('favorites', JSON.stringify([]));

for (let user of users) {

    let userDiv = document.createElement('div');
    mainDiv.appendChild(userDiv);
    userDiv.classList.add('userDiv');


    let keysWrapDiv = document.createElement('div');
    userDiv.appendChild(keysWrapDiv);
    keysWrapDiv.classList.add('keysDivWrap');

    let button = document.createElement('button');
    userDiv.appendChild(button);
    button.innerText = 'ADD To Favorites';
    button.classList.add('button');

    for (let key in user) {

        let keyDiv = document.createElement('div');
        keysWrapDiv.appendChild(keyDiv);
        keyDiv.innerText = `${key} - ${user[key]}`;
        keyDiv.classList.add('keyDiv');


    }

    button.onclick = function (ev) {

        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        favorites.push(user);
        localStorage.setItem('favorites',JSON.stringify(favorites));

        // button.disabled = true;
    };

}

let anchor = document.createElement('a');
mainDiv.appendChild(anchor);
anchor.innerText = 'FAVORITES';
anchor.href = './favorites.html';

