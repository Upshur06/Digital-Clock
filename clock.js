
var clock = document.getElementById("clock");
var background = document.getElementById("background");
var hexcolor = document.getElementById("hexcolor");
var next = document.getElementById("next")

function timing(){
  var time = new Date();
  var hours = time.getHours().toString();
  var minutes = time.getMinutes().toString();
  var seconds = time.getSeconds().toString();


  if (hours.length < 2){
    hours = "0" + hours;
  }

  if (minutes.length < 2){
    minutes = "0" +  minutes;
  }

  if (seconds.length < 2){
    seconds = "0" + seconds;
  }

var clockStr = hours + ":" + minutes + ":" + seconds;
var hexcolorStr = "#" + hours + minutes + seconds;

clock.textContent = clockStr;
hexcolor.textContent = hexcolorStr;

background.style.backgroundColor = hexcolorStr;

}
timing();


setInterval(timing, 1000);

next.addEventListener("click", function(){
  location.href = "pictureClock.html"
})
