const h1 = document.querySelector('.date h1');
const p = document.querySelector('.date p');
const monthDays = document.querySelector('.days');
const prev_date = document.querySelector('.prev-date');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

const date = new Date();

const renderCalender = () =>{
    const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const lastDay = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
    const prevLastDay = new Date(date.getFullYear(),date.getMonth(),0).getDate();
    const firstDayIndex = date.getDay();
    // const firstDayIndex = new Date(date.getFullYear(),date.getMonth(),1).getDay();
    const lastDayIndex = new Date(date.getFullYear(),date.getMonth()+1,0).getDay();
    const nextDays = 7 - lastDayIndex-1;    
    let days = "";
    date.setDate(1)
    date_Paint();

    function nextDatePaint() {
        for(let i = 1; i <= nextDays; i++) {
            days += `<div class="next-date">${i}</div>`
        }
        monthDays.innerHTML = days;
    }
    
    function daysPaint() {
        for(let i = 1; i <= lastDay; i++) {
            if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()) {
                days += `<div class="today">${i}</div>`    
            }
            else days += `<div>${i}</div>`;
        }
        nextDatePaint();
    }
    
    function prevPaint() {
        for(let i = firstDayIndex; 0 < i; i--) {
            days += `<div class="prev-date">${prevLastDay - i + 1}</div>`
        }
        daysPaint();
    }
    
    function date_Paint() {
        h1.innerHTML = months[date.getMonth()];
        p.innerHTML = new Date().toDateString()
        prevPaint();
    }
}
    
prev.addEventListener('click', () => {
    date.setMonth(date.getMonth()-1);
    renderCalender();
});
next.addEventListener('click', () => {
    date.setMonth(date.getMonth()+1);
    renderCalender();
});

renderCalender();