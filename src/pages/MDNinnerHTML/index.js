function log(msg) {
  var logElem = document.querySelector(".log");

  var time = new Date();
  var timeStr = time.toLocaleTimeString();
  logElem.innerHTML += timeStr + ": " + msg + "<br/>";
}

log("Logging mouse events inside this container...");

function logEvent(event) {
  var msg = "Event <strong>" + event.type + "</strong> at <em>" +
             event.clientX + ", " + event.clientY + "</em>";
  log(msg);
}

var boxElem = document.querySelector('.box');

boxElem.addEventListener('mousedown', logEvent);
boxElem.addEventListener('click', logEvent);
boxElem.addEventListener('mouseup', logEvent);
boxElem.addEventListener('mouseenter', logEvent);
boxElem.addEventListener('mouseleave', logEvent);
