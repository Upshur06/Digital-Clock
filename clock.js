var HH = document.getElementById("HH")
var MM = document.getElementById("MM")
var SS = document.getElementById("SS")



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
}

setInterval(timing, 1000)
