fetch('https://jsonplaceholder.typicode.com/users/1')
    .then(value => value.json())
    .then(user => {

        let userDiv = document.createElement('div');
        document.body.append(userDiv);
        userDiv.classList.add('userDiv');

        for (let key in user) {

            if (typeof user[key] === 'object') {

                let keyDivO = document.createElement('div');
                keyDivO.classList.add('keyDiv');
                keyDivO.innerText = key;
                console.log(key);
                userDiv.append(keyDivO);

                for (let field in user[key]) {

                    if (typeof user[key][field] === 'object') {

                        let keyDivO2 = document.createElement('div');
                        keyDivO2.classList.add('keyDiv');
                        keyDivO2.innerText = field;
                        userDiv.append(keyDivO2)

                        for (let property in user[key][field]) {

                            let keyDivNO3 = document.createElement('div');
                            keyDivNO3.classList.add('keyDiv');
                            keyDivNO3.innerText = user[key][field][property];
                            userDiv.append(keyDivNO3);
                        }

                    } else {
                        let keyDivNO2 = document.createElement('div');
                        keyDivNO2.classList.add('keyDiv');
                        keyDivNO2.innerText = user[key][field];
                        userDiv.append(keyDivNO2);
                    }
                }
            } else {
                let keyDivNO = document.createElement('div')
                keyDivNO.classList.add('keyDiv');
                keyDivNO.innerText = user[key];
                userDiv.append(keyDivNO)
            }
        }

});

