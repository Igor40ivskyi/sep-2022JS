let [block1] = document.getElementsByClassName('block1');
console.log(block1);

let [block2] = document.getElementsByClassName('block2');

let [button1] = document.getElementsByTagName('button');
button1.onclick = function () {
    block1.style.zIndex = 5;
    block1.style.background = 'orange';
    block2.style.zIndex = 0;
};

let [button2] = document.getElementsByClassName('button2');
button2.onclick = function () {
    block2.style.zIndex = 5;
    block1.style.zIndex = 0;
};

