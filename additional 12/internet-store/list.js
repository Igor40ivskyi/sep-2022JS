let basket = JSON.parse(localStorage.getItem('items'));

let [mainDiv] = document.getElementsByClassName('mainDiv');


basket.forEach((item,index) => {

    item.id = index;

    let itemDiv = document.createElement('div');
    mainDiv.appendChild(itemDiv);
    itemDiv.innerHTML = `${item.title} - ${item.quantity} - ${item.price}$  <img src="${item.image}" alt="${item.title}">`;
    itemDiv.classList.add('itemDiv');

    let itemButton = document.createElement('button');
    itemDiv.appendChild(itemButton);
    itemButton.innerHTML = 'TAKE OFF';



    itemButton.onclick = function () {
        // debugger;
        console.log(item.id);

        basket.splice(item.id,1);

        localStorage.setItem('items', JSON.stringify(basket));

        window.location.reload();

    };


});


let [buttonClear] = document.getElementsByClassName('buttonClear');

buttonClear.onclick = function () {

    localStorage.clear();

};

