var trigger = document.querySelector("#click-me")
console.log(trigger.textContent)
var popupContainer = document.querySelector("#popup-container")
var conTainer = document.querySelector(".container")
var closebtn = document.querySelector(".btn")

trigger.onclick = function () {
  popupContainer.style.display = "block";
  document.body.style.backgroundColor = "grey";

}
closebtn.onclick = function() {
  popupContainer.style.display = "none";
  document.body.style.backgroundColor = "white";
}
document.onclick = function(event){
  if(event.target == conTainer) {
    popupContainer.style.display = "none";
    document.body.style.backgroundColor = "white";
  }
}
