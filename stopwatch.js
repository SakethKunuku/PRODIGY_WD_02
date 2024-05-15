var time_ele = document.getElementsByClassName("time")[0];
var start_btn = document.getElementById("start");
var lap_btn = document.getElementById("lap");
var stop_btn = document.getElementById("stop");
var reset_btn = document.getElementById("reset");
var l1 = document.getElementById("lap1");
var l2 = document.getElementById("lap2");
var l3 = document.getElementById("lap3");
var l4 = document.getElementById("lap4");
var l5 = document.getElementById("lap5");

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let ctr = 0;

start_btn.addEventListener("click", start);
lap_btn.addEventListener("click", lap);
stop_btn.addEventListener("click", stop);
reset_btn.addEventListener("click", reset);

function timer() {
    milliseconds++;
    if (milliseconds >= 250) {
        milliseconds = 0;
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
    }

    let msDisplay = milliseconds < 100 ? '0' + Math.floor(milliseconds / 10) : Math.floor(milliseconds / 10);
    let secDisplay = seconds < 10 ? '0' + seconds : seconds;
    let minDisplay = minutes < 10 ? '0' + minutes : minutes;
    let hrsDisplay = hours < 10 ? '0' + hours : hours;

    time_ele.innerHTML = `${hrsDisplay}:${minDisplay}:${secDisplay}:${msDisplay}`;
}

function start() {
    if (interval) {
        return;
    }
    interval = setInterval(timer, 1); // Updated to update every millisecond
}

function lap() {
    ctr++;
    if (ctr % 5 == 1)
        l1.innerHTML = "Lap " + ctr + ":  " + time_ele.innerHTML;
    if (ctr % 5 == 2)
        l2.innerHTML = "Lap " + ctr + ":  " + time_ele.innerHTML;
    if (ctr % 5 == 3)
        l3.innerHTML = "Lap " + ctr + ":  " + time_ele.innerHTML;
    if (ctr % 5 == 4)
        l4.innerHTML = "Lap " + ctr + ":  " + time_ele.innerHTML;
    if (ctr % 5 == 0)
        l5.innerHTML = "Lap " + ctr + ":  " + time_ele.innerHTML;
}

function stop() {
    clearInterval(interval);
    interval = null;
}

function reset() {
    stop();
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    ctr = 0;
    l1.innerHTML = " ";
    l2.innerHTML = " ";
    l3.innerHTML = " ";
    l4.innerHTML = " ";
    l5.innerHTML = " ";
    time_ele.innerHTML = "00:00:00:00"; // Updated to include milliseconds
}
