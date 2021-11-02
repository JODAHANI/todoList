const slide_box = document.querySelector('.slide_box');
const greeting_form = document.querySelector('.greeting_form');
const input = document.querySelector('.input');
const userName = document.querySelector('.userName');
const text_edit_form = document.querySelector('.text_edit_form');
const text_edit_input = document.querySelector('.text_edit_input');
const pencil = document.querySelector('.fa-pencil');
const edit_button = document.querySelector('.text_edit');
const edit_form = document.querySelector('.name_edit_form');
const edit_input = document.querySelector('.name_edit_input');
const edit_btn = document.querySelector('.name_edit_btn');


function cssControl(){
    slide_box.style.display = "block";
}
function paintName(user) {
    userName.innerHTML = `${user}님 :D`;
    cssControl();
}



function init() {
    let user = localStorage.getItem('name');
    paintName(user);
        
}




init();

