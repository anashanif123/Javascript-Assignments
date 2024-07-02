function getValue(x) {
    if(x === "=") {
        var toSolve = document.getElementById("screen").innerText;
        var result = eval(toSolve);
        document.getElementById("screen").innerText = result;
    }
    else if(x === "delete") {
        document.getElementById("screen").innerText = null;
    }
    else{
        document.getElementById("screen").innerText += x;
    }
}