let mainDiv = document.createElement('div');
document.body.append(mainDiv);

let url = new URL(location.href);
let userJSON = url.searchParams.get('key');

let user = JSON.parse(userJSON);

for (let key in user) {

    let keyDiv = document.createElement('div');
        mainDiv.appendChild(keyDiv);

    if (typeof user[key] !== 'object') {

        keyDiv.innerText = `${key} - ${user[key]}`;

    }else {
        keyDiv.innerText = `${key} :`;

        for (let field in user[key]) {

            const userInnerDiv = document.createElement('div');
            keyDiv.appendChild(userInnerDiv);

            if (typeof user[key][field] !== 'object') {
                userInnerDiv.innerText = `${field} - ${user[key][field]}`;
            }else {
                userInnerDiv.innerText = `${field} :`;

                for (let property in user[key][field]) {
                    const userinnser2Div = document.createElement('div');
                    userInnerDiv.appendChild(userinnser2Div);
                    if (typeof user[key][field][property] !== 'object') {
                        userinnser2Div.innerText = `${property} ${user[key][field][property]}`;
                    }
                }
            }

        }
    }
}
