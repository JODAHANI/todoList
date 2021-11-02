const slide_box = document.querySelector('.slide_box');
const greeting_form = document.querySelector('.greeting_form');
const input = document.querySelector('.input');
const greeting2 = document.querySelector('.greeting2');
const userName = document.querySelector('.userName');
const text_edit_form = document.querySelector('.text_edit_form');
const text_edit_input = document.querySelector('.text_edit_input');
const pencil = document.querySelector('.fa-pencil');
const edit_button = document.querySelector('.text_edit');
const edit_form = document.querySelector('.name_edit_form');
const edit_input = document.querySelector('.name_edit_input');
const edit_btn = document.querySelector('.name_edit_btn');

// name 
function cssControl(){
    slide_box.style.display = "block";
    input.style.display = "none";
    greeting2.style.opacity = 1;
}
function paintName(user) {
    userName.innerHTML = `${user}님 :D`;
    cssControl();
}

function name_Set(e) {
    e.preventDefault();
    let user = input.value;
    localStorage.setItem('name',user);
    paintName(user);
}    

function change_Name(user) {
    localStorage.setItem('name',user);
    paintName(user);
}

function edit_name(e) {
    e.preventDefault()
    let user = edit_input.value;
    change_Name(user);
}

function check_Login() {
    let user = localStorage.getItem('name');
    if(!user) {
        greeting_form.addEventListener('submit', name_Set);
    } else {
        paintName(user);
    }
}



function paint_greeting(hi) {
    greeting2.innerHTML = hi;
    greeting2.animate([{ opacity: 0},{ opacity: 1 }], 1000);         
    

    // pencil.classList.add('on');
    // edit_button.classList.add('on');
}

function load_greeting() {
    let greeting = localStorage.getItem('greeting');
    let hi = "HI"
    if(!greeting) {
        localStorage.setItem('greeting',"HI");
        paint_greeting(hi);
    } else {
        paint_greeting(greeting);
    }
}

function greeting_edit(e) {
    e.preventDefault();
    localStorage.setItem('greeting',text_edit_input.value);
    paint_greeting(text_edit_input.value);
    text_edit_input.value = "";
    text_edit_input.classList.remove("on") ;
    
    
};


function init() {
    check_Login();
    load_greeting();
    text_edit_form.addEventListener('submit', greeting_edit);
    edit_form.addEventListener('submit', edit_name);
        
        
}




init();

