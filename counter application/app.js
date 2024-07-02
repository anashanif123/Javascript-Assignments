const video = document.getElementById('bg-video');

function playVideo() {
    video.currentTime = 0; // Reset video to the beginning
    video.play();
}
setInterval(playVideo, 8500);

var counter_html = document.getElementById("counter");
var history_html = document.getElementById("history");
var count = 0;
function updatecounter() {
  if (count % 2 === 0) { 
    counter_html.style.color = "green";
    
  }else{
    counter_html.style.color = "red";
  }
}
function increment() {
    count++;
    counter_html.innerText = count;
    updatecounter();
    userhistory();
}
function dicrement() {
    if(count > 0 ){
    count--;
    counter_html.innerText = count;
    updatecounter();
    userhistory();    
}
}
function reset() {
    count = 0;    
    counter_html.innerText = count;
    updatecounter();
    userhistory();   
  }
function userhistory() {
    history_html.innerHTML += `<h3>Count: ${count}</h3>`;
     
    
}