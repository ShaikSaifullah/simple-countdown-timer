const days_el = document.getElementById("days");
const hours_el = document.getElementById("hours");
const mins_el = document.getElementById("mins");
const secs_el = document.getElementById("secs");

const date = "5 Dec 2022"

function countdown(){
    const dateCDown = new Date(date);
    const currDate = new Date();

    const diffSeconds = (dateCDown - currDate) / 1000;

    const days = Math.floor(diffSeconds / 3600 / 24);
    const hours = Math.floor(diffSeconds / 3600) % 24;
    const mins = Math.floor(diffSeconds / 60) % 60;
    const secs = Math.floor(diffSeconds) % 60;

    //console.log(diffSeconds, days, hours, mins, secs)

    days_el.innerHTML = days;
    hours_el.innerHTML = formatTime(hours);
    mins_el.innerHTML = formatTime(mins);
    secs_el.innerHTML = formatTime(secs);

}

function formatTime(x){
    return x < 10 ? `0${x}` : x;
}

countdown()

setInterval(countdown, 1000)