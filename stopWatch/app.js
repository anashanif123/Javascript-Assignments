
var minute_html =document.getElementById("minute");
var second_html =document.getElementById("second");
var milisecond_html =document.getElementById("milisecond");
var start_butn = document.getElementById("start_butn")

var watchinterval; 
var minutes = 0;
var seconds = 0;
var miliseconds = 0;


function start() {
    watchinterval =setInterval(function() {
        miliseconds++;
        if (miliseconds >= 99) {
            seconds++
            miliseconds =0
        }
        if (seconds >= 59) {
            minutes++
            seconds =0

            
        }
        minute_html.innerHTML=   minutes < 10 ? "0" + minutes : minutes;
        second_html.innerHTML =  seconds < 10 ? "0" + seconds : seconds;
        milisecond_html.innerHTML= miliseconds < 10 ? "0" + miliseconds : miliseconds;
        start_butn.disabled = true
    }, 10);
}
function stop() {
    clearInterval(watchinterval);
    start_butn.disabled = false;
    
}
function reset() {
    clearInterval(watchinterval);
    
    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    minute_html.innerHTML= 0;
    second_html.innerHTML = 0;
    milisecond_html.innerHTML= 0;
    start.disabled = false
}
