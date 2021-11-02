const slide_box = document.querySelector('.slide_box');
const userName = document.querySelector('.userName');
const write_page = document.querySelector('.write_page');
const write_btn = document.querySelector('.write');


function paintName(user) {
    userName.innerHTML = `${user}님 :D`;
}

function init() {
    let user = localStorage.getItem('name');
    paintName(user);
};



init();