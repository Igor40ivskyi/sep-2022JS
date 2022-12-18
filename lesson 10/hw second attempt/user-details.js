let url = new URL(location.href);
let id = url.searchParams.get('id');

console.log(id);
fetch('https://jsonplaceholder.typicode.com/users/'+id)
    .then(value => value.json())
    .then(value => {
        console.log(value);
        let userDiv = document.createElement('div');
        userDiv.classList.add('mainDiv');
        document.body.appendChild(userDiv);

        for (let key in value) {

            if (typeof value[key] === 'object') {

                let headDiv = document.createElement('div');
                headDiv.classList.add('headDiv');
                userDiv.appendChild(headDiv);
                headDiv.innerText = `${key}`;

                for (let field in value[key]) {

                    if (typeof value[key][field] === 'object') {

                        let headDiv2 = document.createElement('div');
                        headDiv2.classList.add('headDiv2');
                        headDiv2.innerText = `${field}`;
                        userDiv.appendChild(headDiv2);

                        for (let property in value[key][field]) {

                            let keyDiv3 = document.createElement('div');
                            keyDiv3.classList.add('keyDiv3');
                            keyDiv3.innerText = `${value[key][field][property]}`;
                            userDiv.appendChild(keyDiv3);
                        }

                    }else {

                        let keyDiv2 = document.createElement('div');
                        keyDiv2.classList.add('keyDiv2');
                        keyDiv2.innerText = `${value[key][field]}`;
                        userDiv.appendChild(keyDiv2);
                    }

                }


            }else {
                let keyDiv = document.createElement('div');
                keyDiv.innerText = `${value[key]}`;
                keyDiv.classList.add('keyDiv')
                userDiv.appendChild(keyDiv);
            }

        }


    });

