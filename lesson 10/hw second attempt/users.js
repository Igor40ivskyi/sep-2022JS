fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(data => {

        let usersDiv = document.createElement('div');
        usersDiv.classList.add('usersDiv');
        document.body.appendChild(usersDiv);

        let ul = document.createElement('ul');
        usersDiv.appendChild(ul);

        for (let user of data) {

            let liUser = document.createElement('li');
            liUser.classList.add('liUser');
            ul.appendChild(liUser);

            let a = document.createElement('a');
            liUser.appendChild(a);
            a.innerText = `${user.id} -- ${user.name}`;
            a.href = 'user-details.html?id=' + user.id;
            a.target = 'blank'
        }


    });