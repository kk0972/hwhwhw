var clock = document.getElementById('clock');

function time() {
  var day = new Date();
  var sec = day.getSeconds();
  var min = day.getMinutes();
  var hr = day.getHours();
  clock.textContent = 
    hr + ":" + min + ":" + sec;
}

setInterval(time, 1000);