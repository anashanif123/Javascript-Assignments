var btn = document.getElementById("btn");
var bt2n = document.getElementById("bt2n");
var picture =document.getElementById("picture"); 


// bo_dy.addEventListener("load")
btn.addEventListener("click",function(){
    picture.src="images/realistic-lit-light-bulb-isolated_1284-41774-removebg-preview (1).png";
    picture.style.height="400px"
    picture.style.width="400px"
    picture.style.filter ="drop-shadow(0px 0px 150px rgb(255, 251, 0))";
   
})
bt2n.addEventListener("click",function () {
    picture.src = "images/energy-saving-lightbulb-isolated_1284-41849-removebg-preview.png";
    picture.style.height="400px"
    picture.style.width="400px"
    picture.style.filter ="drop-shadow(0px 0px 5px white)";

    
})
