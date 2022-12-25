let favorites = JSON.parse(localStorage.getItem('favorites'));

let [mainDiv] = document.getElementsByClassName('mainDiv');

favorites.forEach(user => {

    let userDiv = document.createElement('div');
    mainDiv.appendChild(userDiv);
    userDiv.innerText = `${user.name} ${user.age} ${user.status}`;
    userDiv.classList.add('userDiv');

});

let anchor = document.createElement('a');
mainDiv.appendChild(anchor);
anchor.innerText = 'HOME PAGE';
anchor.href = 'index.html';

