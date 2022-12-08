// var parent = document.getElementById("parent");
// var showSlide = document.getElementById("showSlide");
// var images = parent.getElementsByTagName("IMG");
// var indexNumber =0;
// function renderSlide(){
//     showSlide.src = images[indexNumber].src;
// }
// renderSlide();

// function previousSlide(){
//     if(indexNumber == 0){
//         indexNumber = (images.length - 1);
//     }else{
//         indexNumber--;
//     }
//     renderSlide();
// }

// function nextSlide(){
//     if((indexNumber + 1) == images.length){
//         indexNumber = 0;

//     }else{
//         indexNumber++;
//     }
//     renderSlide();
// }

// setInterval(function(){
//     nextSlide();
// },2000)

// stop watch starts here

var min = 0;
var sec = 0;
var MiliSecond = 0;
var Hour = 0;
var displayMin = document.getElementById("displayMin");
var displaySec = document.getElementById("displaySec");
var displayMiliSecond = document.getElementById("displayMiliSecond");
var displayHour = document.getElementById("displayHour");

var interval;

function timer() {
  MiliSecond++;
  if (MiliSecond == 100) {
    MiliSecond = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
      if (min == 60) {
        min = 0;
        Hour++;
      }
    }
  }
  displayMiliSecond.innerHTML = MiliSecond;
  displayMin.innerHTML = min;
  displaySec.innerHTML = sec;
  displayHour.innerHTML = Hour;
}

function startTimer() {
  interval = setInterval(function () {
    timer();
  }, 10);
}
function pauseTimer() {
  clearInterval(interval);
}
function resetTimer() {
  pauseTimer();
  min = 0;
  sec = 0;
  MiliSecond = 0;
  Hour = 0;
  displayMiliSecond.innerHTML = MiliSecond;
  displaySec.innerHTML = sec;
  displayMin.innerHTML = min;
  displayHour.innerHTML = Hour;
}
