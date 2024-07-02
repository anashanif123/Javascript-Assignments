var months = document.getElementById("months")
var day = document.getElementById("day")
var hour = document.getElementById("hour")
var minute = document.getElementById("minute")
var second = document.getElementById("second")

var eidDay = new Date("6  16 / 2024");
eidDay = eidDay.getTime("6 / 16 / 2024");

setInterval(function() {
  var now = new Date();
  now = now.getTime();
  console.log(now)
  var diff =  eidDay - now;
//   console.log(diff);
 var monthsLeft =  "MONTHS" + "\n" +  Math.floor(diff / 1000 / 60 / 60 / 24 / 30);
//  console.log(monthsLeft);
 var days =  "DAYS" + "\n" + Math.floor(diff / 1000 / 60 / 60 / 24 );
//  console.log(days);
 var hours =  "HOURS" + "\n" + Math.floor(diff / 1000 / 60 / 60  );
//  console.log(hours);
 var minutes =  "MINUTES " + "\n" + Math.floor(diff / 1000 / 60   );
//  console.log(minutes);
 var seconds =  "SECONDS " + "\n" + Math.floor(diff / 1000   );
//  console.log(seconds);

months.innerText = monthsLeft;
day.innerText = days;
hour.innerText = hours;
minute.innerText = minutes;
second.innerText = seconds;

}, 1000);
