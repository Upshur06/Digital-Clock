
var HH = document.getElementById("HH")
var MM = document.getElementById("MM")
var SS = document.getElementById("SS")


setInterval(timing, 1000);



function timing(){
  var date = new Date()
  var sec = date.getSeconds()
  var min = date.getMinutes()
  var hour = date.getHours()


  if (sec < 10){
    SS.innerHTML = "0" + sec
  }else {
     SS.innerHTML = sec
  }

  if (min < 10){
    MM.innerHTML = "0" + min
  }else {
     MM.innerHTML = min
  }

  if (hour < 10){
    HH.innerHTML = "0" + hour
  }else {
     HH.innerHTML = hour
  }
// background color
var background = document.getElementById("background")
var hexnum = document.getElementById("hexnum")

// setInterval(hexClock, 1000);

function output(){
   var background = document.body.style.background()
   // var hexnum = "#" + hour + min + sec;

   if(sec >= 0 && min >= 0 && hour >=0){
     hexnum.innerHTML = "#" + hour + min + sec
   }
}

}
