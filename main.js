const showTime = document.querySelector('.time');
const showDate = document.querySelector('.date');

const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


const showDateAndTime = () => {
    const time = new Date();

    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    let day = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();
    let dayName = daysName[time.getDay()];

    //Time
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    hours = hours < 10 ? `0${hours}` : `${hours}`;

    //Date
    day = day < 10 ? `0${day}` : `${day}`;
    month = month < 10 ? `0${month}` : `${month}`;

    showTime.textContent = `${hours}:${minutes}:${seconds}`;

    showDate.textContent = `${dayName}, ${day}-${month}-${year}`
}

setInterval(showDateAndTime, 1000);