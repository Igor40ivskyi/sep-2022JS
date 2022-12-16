let url = new URL(location.href);
let id = url.searchParams.get('id');

fetch('https://jsonplaceholder.typicode.com/users/' + id)
    .then(value => value.json())
    .then(value => {

        let userDiv = document.createElement('div');
        document.body.appendChild(userDiv);

        for (let key in value) {

            if (typeof value[key] === 'object'){

                let keyDivHeading = document.createElement('div');
                keyDivHeading.innerText = key;
                keyDivHeading.classList.add('keyDivHeading');
                userDiv.appendChild(keyDivHeading);

            for (let field in value[key]) {

                if (typeof value[key][field] === 'object') {

                    let keyDivHeading = document.createElement('div');
                    keyDivHeading.innerText = field;
                    keyDivHeading.classList.add('keyDivHeading');
                    userDiv.appendChild(keyDivHeading);

                    for (let property in value[key][field]) {

                        let keyDiv = document.createElement('div');
                        keyDiv.classList.add('keyDiv');
                        userDiv.appendChild(keyDiv);
                        keyDiv.innerText = value[key][field][property];

                    }


                } else {
                    let keyDiv = document.createElement('div');
                    keyDiv.innerText = value[key][field];
                    keyDiv.classList.add('keyDiv');
                    userDiv.appendChild(keyDiv);
                }


            }

            }else {

                let keyDiv = document.createElement('div');
                keyDiv.innerText = value[key];
                keyDiv.classList.add('keyDiv');
                userDiv.appendChild(keyDiv);

            }



        }

    });