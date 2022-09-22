let myImge = document.querySelector('img');

myImge.onclick = function () {
    let mySrc = myImge.getAttribute('src');
    if (mySrc === 'images/monkey-blue.png') {
        myImge.setAttribute('src', 'images/monkey-yellow.png');
    } else {
        myImge.setAttribute('src', 'images/monkey-blue.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = propt('请输入你的名字。');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Monkey 酷毙了，' + myName;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Monkey 酷毙了，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}
