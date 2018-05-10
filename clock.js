
// var time = new Date();
// var hours = time.getHours();
// var minutes = time.getMinutes();
// var seconds = time.getSeconds();


// var clock = document.getElementById("clock");
// var hex_color = document.getElementById("hex_color");
//
//
// function hexClock(){
//   var time = new Date();
//   var hours = time.getHours().toString();
//   var minutes = time.getMinutes().toString();
//   var seconds = time.getSeconds().toString();
//
//
//     if (hours.length < 2){
//       hours = "0" + hours
//     }
//
//     if (minutes.length < 2){
//       minutes = "0" + minutes
//     }
//
//     if (seconds.length < 2){
//       soconds = "0" + seconds
//     }
//
//     var clockStr = hours + ":" + minutes + ":" + seconds;
//     var hex_colorStr = "#" + hours + minutes + seconds;
//
//     clock.textContent = clockStr;
//     hex_color.textContent = hex_colorStr;
//
//     document.body.style.background = hex_colorStr;
// }
// hexClock();
//
// setInterval(hexClock), 1000;


// function timing(){
  // var time = new Date();
  // console.log(time.getHours());
  // console.log(time.getMinutes());
  // console.log(time.getSeconds());

  // var HH = date.getHours();
  // var MM = date.getMinutes();
  // var SS = date.getSeconds();


var clock = document.getElementById("clock");
var background = document.getElementById("background");
var hexcolor = document.getElementById("hexcolor");


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
