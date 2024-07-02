var number_html = document.getElementById("number");
var userInput = document.getElementById("userInput");
var result = document.getElementById("result");
var start_btn = document.getElementById("start_btn")
var running = 0;
var gameinterval;

function start() {
    if (userInput.value) {
        
        gameinterval = setInterval(function(){
            if (running >= 1000) {
                clearInterval(gameinterval)
                running = 0;
                number_html.innerHTML = running ;
                result.innerText = "You are late";
                result.style.color = "black"
                start_btn.disabled = false;
            }else{
                running++;
                number_html.innerText = running < 10 ? "0" + running : running;
            
            }
              
        }, 50);
        start_btn.disabled = true;
        
    }else{
        alert("Number to dhal lo")
    }

    
}
function stop() {

    clearInterval( gameinterval);
    if (userInput.value == running) {
      result.innerText = "You Win";
      result.style.color = "green"
    } else {
      result.innerText = "You Lose";
      result.style.color = "red"

    }
    running = 0;
    number_html.innerText = 0 < 10 ? "0" + running : running;
    start_btn.disabled = false;
  }

