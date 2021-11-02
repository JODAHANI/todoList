const table = document.querySelector('table');
const value = document.querySelector('.value');

function length_Check (value_length) {
    if(value_length > 8) value.style.fontSize = '40px';
    if(value_length > 12) value.style.fontSize = '30px';
    if(value_length > 17) value.innerHTML = value.innerHTML;
}

function calc(e) {
    let value_length = value.innerHTML.length;
    let push = e.target
    let arr1 = 0;
    if(push == table) return;
    if (push.classList[0] == 'value') return;
    if(push.innerHTML === 'AC') value.innerHTML = 0;
    else if(push.innerHTML === 'Del') { 
        arr1 = value.innerHTML;
        arr1 = arr1.substring(0,arr1.length-1);
        value.innerHTML = arr1;
        if(value.innerHTML.length == 0) value.innerHTML = 0;
        
    } else if(push.innerHTML === 'AC') {
        value.innerHTML = 0;
        value.style.fontSize = '60px'

    } else if (push.innerHTML == '%') {
        value.innerHTML = parseInt(value.innerHTML) / 100;
    } else if (push.innerHTML == '=') {
        value.innerHTML = eval(value.innerHTML);
        value.style.fontSize = '60px';
    } 
    else if(parseInt(value.innerHTML) === 0) {
        value.innerHTML = push.innerHTML;
    } else {
        length_Check(value_length)
        value.innerHTML = value.innerHTML + push.innerHTML;
    }
    
     
}


function init() {
    table.addEventListener('click', calc);
}





init();