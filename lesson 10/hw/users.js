fetch('http://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(data => {

        let ul = document.querySelector('.target');


        for (let user of data) {

            let li = document.createElement('li');
            li.classList.add('listItem')
            ul.appendChild(li);

            let anchorElement = document.createElement('a');
            anchorElement.innerText = `${user.id} -- ${user.name}`;
            li.appendChild(anchorElement)
            anchorElement.href = 'user-details.html?id=' + user.id;


        }


    });
