// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let [form] = document.getElementsByTagName('form');


let [button] = document.getElementsByTagName('button');

let inputTitle = document.getElementById('title');
let inputQuantity = document.getElementById('quantity');
let inputPrice = document.getElementById('price');
let inputImage = document.getElementById('image');


button.onclick = function (e) {
    e.preventDefault();
    const itemsSet = {title: null, quantity: null, price: null, image: null};

    itemsSet.title = inputTitle.value;
    itemsSet.quantity = inputQuantity.value;
    itemsSet.price = inputPrice.value;
    itemsSet.image = inputImage.value;

    let items = JSON.parse(localStorage.getItem('items'));

    if (!items) {
        items = [];
    }

    items.push(itemsSet)
    localStorage.setItem('items', JSON.stringify(items));

};

