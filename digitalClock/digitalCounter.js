let hour = document.querySelector(".hour")
let minute = document.querySelector(".minute")
let second = document.querySelector(".second")


var i = 1;
function currentTime() {
  setTimeout(() => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;
    if (i < 100) {
         currentTime();
    }
  }, 1000);
}

const btnOn = document.querySelector(".btn-on")
btnOn.addEventListener("click", function() {
  alert("Started the Clock!")
  currentTime();
})
