


var user_number = document.getElementById("user_Number")
var random_number = document.getElementById("random_number")
var result = document.getElementById("result");
var result_colour = document.getElementById("result_colour");
var rounds = document.getElementById("rounds");
var win = document.getElementById("win");
var loss = document.getElementById("loss");
var message = document.getElementById("message");
var lives = 10;
var finalWin = 0;
var finalLoss = 0;
function myLuck(userNumber) {
    var randomNumber = Math.ceil(Math.random() * 6);
    console.log(randomNumber);
    user_number.innerText = userNumber
    random_number.innerText = randomNumber
    rounds.innerText = --lives;
    if (userNumber === randomNumber) {
        console.log("win");
        result.innerText = "win";
        result_colour.style.backgroundColor = "green";
        result_colour.style.transform = "scale(1.1)";
        result_colour.style.transitionDuration = "1s" ;
        win.innerText = ++finalWin;
    } else {
        console.log("you loss");
        result.innerText = "loss "
        result_colour.style.backgroundColor = "red";
        result_colour.style.transform = "scale(1.0)";
        result_colour.style.transitionDuration = "1s" ;
        loss.innerText = ++finalLoss;

    }
    livesReult()
}

function livesReult() {
    if (lives == 0) {

        if (finalWin >= 3) {
            message.innerText = "YOU WIN ";
            message.style.backgroundColor = "green";
            message.style.transitionDuration = "1s";

        } else {

            message.innerText = "SORRY! BETTER LUCK NEXT TIME"
            message.style.backgroundColor = "red";
            message.style.transitionDuration = "1s";
        }
        lives = 10
        finalWin = 0;
        finalLoss = 0;
        rounds.innerText = lives;
        win.innerText = finalWin;
        loss.innerText = finalLoss;


    }




}
