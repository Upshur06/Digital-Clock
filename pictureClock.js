var picclock = document.getElementById("picclock");
var picbackground = document.getElementById("picbackground");
var clockBorder = document.getElementById("clockBorder");
var back = document.getElementById("back");

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

var picclockStr = hours + ":" + minutes + ":" + seconds;


picclock.textContent = picclockStr;


if(hours <= 1 && hours < 3){
      document.body.style.backgroundImage = "url('pic1.jpg')";
      document.body.style.backgroundSize = "100% 100%";
      clockBorder.innerHTML =  "Hope You're Sleepying Peacefully!";
      document.body.style.color = "White"
    }
    //3-4am
    else if (hours <= 3 && hours < 6){
      document.body.style.backgroundImage = "url('pic1.jpg')";
      document.body.style.backgroundSize = "100% 100%";
      clockBorder.innerHTML =  "Keep Resting!";
      document.body.style.color = "White"
    }
    //5-6am
    else if (hours <= 7 && hours < 9){
      document.body.style.backgroundImage = "url('pic8.jpg')";
      document.body.style.backgroundSize = "100% 100%";
      clockBorder.innerHTML =  "Good Morning, Rise & Shine!";
    }
    //9-12pm
    else if (hours <= 9 && hours < 12){
      document.body.style.backgroundImage = "url('pic11.jpg')";
      document.body.style.backgroundSize = "100% 100%";
      clockBorder.innerHTML =  "Have A Good Day!";
    }
    //12pm-4pm
    else if (hours <= 16 || hours < 15){
      document.body.style.backgroundImage = "url('pic12.jpg')";
      document.body.style.backgroundSize = "100% 100%";
      clockBorder.innerHTML =  "Good Afternoon!";
    }
    //4-6pm
    else if (hours <= 15 && hours < 19){
      document.body.style.backgroundImage = "url('pic13.jpg')";
      document.body.style.backgroundSize = "100% 100%";
      clockBorder.innerHTML =  "Good Evening!";
    }
    //7-8 pm
    else if (hours <= 19 && hours < 21){
      document.body.style.backgroundImage = "url('pic21.jpg')";
      document.body.style.backgroundSize = "100% 100%";
      clockBorder.innerHTML =  "Almost Ready For Bed!";
      document.body.style.color = "White"
    }
    //10-12am
    else {
      document.body.style.backgroundImage = "url('pic23.jpg')";
      document.body.style.backgroundSize = "100% 100%";
      clockBorder.innerHTML =  "Good Night!";
      document.body.style.color = "White"
    }
}
timing();


setInterval(timing, 1000);

back.addEventListener("click", function(){
  location.href = "clock.html"
})
