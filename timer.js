/*--------------------------------GVs--------------------------------*/

var dateTo;
var dateToPercent;
var sekundenbalken;
var intervalZaehle;
var isClicked = -1;
var x;
var p = 100;

/*--------------------------------Mausklicks--------------------------------*/

document.addEventListener("mousedownHours", mousedownHours);
document.addEventListener("mousedownMinutes", mousedownMinutes);
document.addEventListener("mousedownSeconds", mousedownSeconds);
document.addEventListener("mousedownHoursMinus", mousedownHoursMinus);
document.addEventListener("mousedownMinutesMinus", mousedownMinutesMinus);
document.addEventListener("mousedownSecondsMinus", mousedownSecondsMinus);
document.addEventListener("mouseup", mouseup);

/*--------------------------------Timer--------------------------------*/

function timer(){
  var toHours = document.getElementById("testNumberHours").innerHTML;
  var toHours = toHours * 60 * 60 * 1000;
  var toMinutes = document.getElementById("testNumberMinutes").innerHTML;
  var toMinutes = toMinutes * 60 * 1000;
  var toSeconds = document.getElementById("testNumberSeconds").innerHTML;
  var toSeconds = toSeconds * 1000;
  dateTo = toHours + toMinutes + toSeconds;
  x = setInterval(function() {
    dateTo -= 1000;
    var distance =  dateTo;
    var stunden = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuten = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sekunden = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("testNumberHours").innerHTML = stunden;
    document.getElementById("testNumberMinutes").innerHTML = minuten;
    document.getElementById("testNumberSeconds").innerHTML = sekunden;
    console.log(stunden);
    console.log(minuten);
    console.log(sekunden);

    if (distance < 1) {
      clearInterval(x);
      document.getElementById("testNumberHours").innerHTML = "0";
      document.getElementById("testNumberMinutes").innerHTML = "0";
      document.getElementById("testNumberSeconds").innerHTML = "0";
      console.log("Timer abgelaufen!");
      swal({
        title: "Timer abgelaufen",
        icon: "success",
      });
      document.getElementById("StartButton").className = 'grau';
      document.getElementById("StopButton").className = 'invis';
      document.getElementById("bttnup1").className = 'grau';
      document.getElementById("bttnup2").className = 'grau';
      document.getElementById("bttnup3").className = 'grau';
      document.getElementById("bttndown1").className = 'grau';
      document.getElementById("bttndown2").className = 'grau';
      document.getElementById("bttndown3").className = 'grau';
    }
  }, 1000); // in ms
}
/*
function timerStart() {
  var toHours = document.getElementById("testNumberHours").innerHTML;
  var toHours = toHours * 60 * 60 * 1000;
  var toMinutes = document.getElementById("testNumberMinutes").innerHTML;
  var toMinutes = toMinutes * 60 * 1000;
  var toSeconds = document.getElementById("testNumberSeconds").innerHTML;
  var toSeconds = toSeconds * 1000;
  var toSeconds = toSeconds + 1000;

  dateTo = toHours + toMinutes + toSeconds;

  var dateFrom = new Date().getTime();
  var dateReturn = dateTo + dateFrom;*/
  //if (dateTo > 1000){
  //sekundenbalken = dateTo / 1000;
  //console.log(sekundenbalken);
  //intervalZaehle = window.setInterval('zaehle()', sekundenbalken );
  //}
  /*
  x = setInterval(function() {
    var now = new Date().getTime();
    var distance = dateReturn - now;
    var stunden = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minuten = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var sekunden = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("testNumberHours").innerHTML = stunden;
    document.getElementById("testNumberMinutes").innerHTML = minuten;
    document.getElementById("testNumberSeconds").innerHTML = sekunden;
    console.log(stunden);
    console.log(minuten);
    console.log(sekunden);

    if (distance < 1) {
      clearInterval(x);
      document.getElementById("testNumberHours").innerHTML = "0";
      document.getElementById("testNumberMinutes").innerHTML = "0";
      document.getElementById("testNumberSeconds").innerHTML = "0";
      console.log("Timer abgelaufen!");
      document.getElementById("StartButton").className = 'grau';
      document.getElementById("StopButton").className = 'invis';
      document.getElementById("bttnup1").className = 'grau';
      document.getElementById("bttnup2").className = 'grau';
      document.getElementById("bttnup3").className = 'grau';
      document.getElementById("bttndown1").className = 'grau';
      document.getElementById("bttndown2").className = 'grau';
      document.getElementById("bttndown3").className = 'grau';
    }
  }, 1000);
}*/

/*--------------------------------Balken--------------------------------*/

/*function zaehle() {
    if (p > 1) {
        p = dateTo;
        dateToPercent = dateTo / 100
        p = p - dateToPercent;
        document.getElementById('balken').style.width = p.toFixed(1) + "%";
    } else {
        window.clearInterval(intervalZaehle);
    }
}*/

/*--------------------------------Zählen--------------------------------*/

function numberUpHours(){
    var number = document.getElementById("testNumberHours").innerHTML;
    if (number < 7){
    document.getElementById("testNumberHours").innerHTML = parseInt(number, 10) + 1;
  }
}
function numberDownHours(){
    var number = document.getElementById("testNumberHours").innerHTML;
    if (number > 0){
    document.getElementById("testNumberHours").innerHTML = parseInt(number, 10) - 1;
  }
}
function numberUpMinutes(){
    var number = document.getElementById("testNumberMinutes").innerHTML;
    if (number < 59){
    document.getElementById("testNumberMinutes").innerHTML = parseInt(number, 10) + 1;
  }
}
function numberDownMinutes(){
    var number = document.getElementById("testNumberMinutes").innerHTML;
    if (number > 0){
    document.getElementById("testNumberMinutes").innerHTML = parseInt(number, 10) - 1;
  }
}
function numberUpSeconds(){

    var number = document.getElementById("testNumberSeconds").innerHTML;
    if (number < 59){
    document.getElementById("testNumberSeconds").innerHTML = parseInt(number, 10) + 1;
  }
}
function numberDownSeconds(){

    var number = document.getElementById("testNumberSeconds").innerHTML;
    if (number > 0){
    document.getElementById("testNumberSeconds").innerHTML = parseInt(number, 10) - 1;
  }
}

/*--------------------------------Mousedown Events--------------------------------*/

function mousedownHours(event){
  if (isClicked == -1)
      isClicked = setInterval(numberUpHours, 60);
}
function mousedownMinutes(event){
  if (isClicked == -1)
      isClicked = setInterval(numberUpMinutes, 60);
}
function mousedownSeconds(event){
  if (isClicked == -1)
      isClicked = setInterval(numberUpSeconds, 60);
}

/*--------------------------------Mousedown Events Minus--------------------------------*/

function mousedownHoursMinus(event){
  if (isClicked == -1)
      isClicked = setInterval(numberDownHours, 60);
}
function mousedownMinutesMinus(event){
  if (isClicked == -1)
      isClicked = setInterval(numberDownMinutes, 60);
}
function mousedownSecondsMinus(event){
  if (isClicked == -1)
      isClicked = setInterval(numberDownSeconds, 60);
}


/*--------------------------------Mouseup--------------------------------*/


function mouseup(event){
  if(isClicked!=-1) {  //Only stop if exists
     clearInterval(isClicked);
     isClicked=-1;
   }
}


window.onload = function () {
  var dmode = document.cookie;
        if (dmode != "") {
          console.log("darkmode");
          darkmode();
        }else {
          console.log("kein darkmode");
        }
    }

function start(){
  document.getElementById("StartButton").className = 'invis';
  document.getElementById("StopButton").className = 'grau';
  document.getElementById("bttnup1").className = 'invis';
  document.getElementById("bttnup2").className = 'invis';
  document.getElementById("bttnup3").className = 'invis';
  document.getElementById("bttndown1").className = 'invis';
  document.getElementById("bttndown2").className = 'invis';
  document.getElementById("bttndown3").className = 'invis';
  timer();
}
function stop(){
  document.getElementById("StartButton").className = 'grau';
  document.getElementById("StopButton").className = 'invis';
  document.getElementById("bttnup1").className = 'grau';
  document.getElementById("bttnup2").className = 'grau';
  document.getElementById("bttnup3").className = 'grau';
  document.getElementById("bttndown1").className = 'grau';
  document.getElementById("bttndown2").className = 'grau';
  document.getElementById("bttndown3").className = 'grau';
  clearInterval(x);
  document.getElementById("testNumberHours").innerHTML = "0";
  document.getElementById("testNumberMinutes").innerHTML = "0";
  document.getElementById("testNumberSeconds").innerHTML = "0";
  console.log("Timer abgelaufen!");
  swal({
  title: "Timer gestoppt",
  icon: "error",
  });
}

function darkmode(){
  document.body.style.background = '#141d26';
  document.getElementById("testNumberHours").className = 'darkmode';
  document.getElementById("testNumberMinutes").className = 'darkmode';
  document.getElementById("testNumberSeconds").className = 'darkmode';
  document.cookie = "darkmode=true; expires=Thu, 1 Jan 2030 12:00:00 UTC";
}
function whitemode(){
  document.body.style.background = 'white';
  document.getElementById("testNumberHours").className = 'whitemode';
  document.getElementById("testNumberMinutes").className = 'whitemode';
  document.getElementById("testNumberSeconds").className = 'whitemode';
  document.cookie = "darkmode=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
}

function chooseTime(){
  swal({
  title: "Wähle eine Zeit aus:",
  buttons: {
      button15: "15 Min",
      button30: "30 Min",
      button45: "45 Min",
      button90: "90 Min",
      cancel: true,
    },
  })
  .then((value) => {
    switch (value) {
      case "button15":
        document.getElementById("testNumberHours").innerHTML = "0";
        document.getElementById("testNumberMinutes").innerHTML = "15";
        document.getElementById("testNumberSeconds").innerHTML = "0";
        break;

      case "button30":
        document.getElementById("testNumberHours").innerHTML = "0";
        document.getElementById("testNumberMinutes").innerHTML = "30";
        document.getElementById("testNumberSeconds").innerHTML = "0";
        break;

      case "button45":
        document.getElementById("testNumberHours").innerHTML = "0";
        document.getElementById("testNumberMinutes").innerHTML = "45";
        document.getElementById("testNumberSeconds").innerHTML = "0";
        break;

      case "button90":
        document.getElementById("testNumberHours").innerHTML = "1";
        document.getElementById("testNumberMinutes").innerHTML = "30";
        document.getElementById("testNumberSeconds").innerHTML = "0";
        break;

      default:
    }
  });
}
/*  button_two: {
      text: "30 Minuten",
      value: "button_two",
    },
  button3: {
      text: "45 Minuten",
      value: "45",
    },
  button4: {
        text: "90 Minuten",
        value: "90",
    },*/
