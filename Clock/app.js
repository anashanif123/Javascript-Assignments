var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");
var amPm = document.getElementById("amPm");
var get_day = document.getElementById("get_day");
var month = document.getElementById("get_month");
var year = document.getElementById("get_year");
var dates = document.getElementById("get_dates");
var userName = document.getElementById("userName");
 var userinput = prompt("enter your name")
setInterval(function () {
   var currentDate = new Date();
   var currentHours = currentDate.getHours();
   // console.log(currentHours);

   var currentminutes = currentDate.getMinutes();
   // console.log(currentminutes)
   var currentseconds = currentDate.getSeconds();
   // console.log(currentseconds);
   var periods = "AM"
   var currentDates = currentDate.getDate();
   var currentyear = currentDate.getFullYear();
   var monthnames = ["january","february","march","april","may","june","july","august","september",
"october","november","december"];
   var currentmonth = monthnames[ currentDate.getMonth()];
   var dayNames = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
   var currentDay = dayNames[currentDate.getDay()]

   if (currentHours === 0) {
      currentHours = 12 ;
      
   }if (currentHours > 12){
      currentHours -= 12
      periods = "PM"
   }if (currentseconds < 10) {
      currentseconds = "0" + currentseconds;
   }if (currentHours < 10) {
      currentHours = "0" + currentHours;
    }if (currentminutes < 10) {
      currentminutes = "0" + currentminutes;
      
   }if (currentDates < 10) {
      currentDates = "0" + currentDates ;
   }
   
   userName.innerText= "Welcome!"  +  userinput;
   userName.style.color=  "white";
   userName.style.fontSize= "40px";
   userName.style.transitionDuration = "1s";
   amPm.innerText= periods;
   hours.innerText = currentHours;
   minutes.innerText = currentminutes;
   seconds.innerText = currentseconds;
   get_month.innerText = currentmonth;
   get_year.innerText = currentyear ;
   get_dates.innerText= currentDates + "/" + "\n" + currentDay;
}, 1000);
