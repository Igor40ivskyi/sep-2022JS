// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//

let mainDiv = document.createElement('div');
document.body.appendChild(mainDiv);
mainDiv.classList.add('mainDiv');

const usersDiv = document.createElement('div');
mainDiv.appendChild(usersDiv);
usersDiv.classList.add('usersDiv');

let postsDiv = document.createElement('div');
mainDiv.appendChild(postsDiv);
postsDiv.classList.add('postsDiv');

let comentsDiv = document.createElement('div');
mainDiv.appendChild(comentsDiv);
comentsDiv.classList.add('comentsDiv');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(value => {

        value.forEach(user => {

            let userDiv = document.createElement('div');
            usersDiv.appendChild(userDiv);
            userDiv.innerText = `${user.name}`;
            userDiv.classList.add('userDiv');

            let userButton = document.createElement('button');
            userDiv.appendChild(userButton);
            userButton.innerText = 'GET POSTS';
            userButton.classList.add('userButton');

            userButton.onclick = function () {

                fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                    .then(value => value.json())
                    .then(value => {

                        value.forEach(post => {

                            let postDiv = document.createElement('div');
                            postsDiv.appendChild(postDiv);
                            postDiv.innerText = post.body;
                            postDiv.classList.add('postDiv');

                            let postButton = document.createElement('button');
                            postDiv.appendChild(postButton);
                            postButton.innerText = 'GET COMMENTS';
                            postButton.classList.add('postButton');

                            postButton.onclick = function () {

                                fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
                                    .then(value => value.json())
                                    .then(value => {

                                        value.forEach(coment => {

                                        let comentDiv = document.createElement('div');
                                        console.log(comentDiv);
                                        comentsDiv.appendChild(comentDiv);
                                        comentDiv.innerText = coment.body;
                                        comentDiv.classList.add('comentDiv');
                                        });
                                    });
                            };
                        });
                    });
            };

        });
    });


