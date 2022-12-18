// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

        let mainDiv = document.createElement('div');
        mainDiv.classList.add('mainDiv');
        document.body.appendChild(mainDiv);

fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {

        for (let user of value) {

            let userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');
            userDiv.innerText = `${user.id} - ${user.name}`;
            mainDiv.appendChild(userDiv);

            let anchorElement = document.createElement('a');
            anchorElement.innerText = 'get more info about user';
            userDiv.appendChild(anchorElement);
            anchorElement.href = 'user-details.html?key=' + user.id;

        }
    });