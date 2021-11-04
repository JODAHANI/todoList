const slide_box = document.querySelector('.slide_box');
const userName = document.querySelector('.userName');
const write_page = document.querySelector('.write_page');
const write_btn = document.querySelector('.write');
const edit_form = document.querySelector('.name_edit_form');
const edit_input = document.querySelector('.name_edit_input');
const edit_btn = document.querySelector('.name_edit_btn');


function edit_name(e) {
    e.preventDefault()
    let userName = edit_input.value;
    change_Name(userName);
}

function change_Name(user) {
    localStorage.setItem('name',user);
    paintName(user);
}

function paintName(user) {
    userName.innerHTML = `${user}님 :D`;
}

function init() {
    let user = localStorage.getItem('name');
    paintName(user);
    edit_input.value = user
    edit_form.addEventListener('submit', edit_name);
};



init();