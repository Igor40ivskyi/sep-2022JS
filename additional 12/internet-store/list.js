let basket = JSON.parse(localStorage.getItem('items'));

let [mainDiv] = document.getElementsByClassName('mainDiv');


basket.forEach((item,index) => {

    let itemDiv = document.createElement('div');
    mainDiv.appendChild(itemDiv);
    itemDiv.innerHTML = `${item.title} ${item.quantity} - ${item.price} - <img src="${item.image}" alt="${item.title}">`;
    itemDiv.classList.add('itemDiv');

    let itemButton = document.createElement('button');
    itemDiv.appendChild(itemButton);
    itemButton.innerHTML = 'TAKE OFF';

    item.id = index;

    console.log(item.id);

    console.log(basket);

    itemButton.onclick = function () {

        console.log(item.id);

        basket.splice(item.id, item.id + 1);

        console.log(item.id);

        localStorage.setItem('items', JSON.stringify(basket));

        window.location.reload();
        // itemDiv.style.display = 'none';

    };


});

console.log(basket);

let [buttonClear] = document.getElementsByClassName('buttonClear');

buttonClear.onclick = function () {

    localStorage.clear();

};
