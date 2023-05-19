
var drumsLength = document.querySelectorAll(".drum").length;

for (var i = 0 ; i < drumsLength; i++) {


document.querySelectorAll(".drum")[i].addEventListener("click" , buttonClicked);

function buttonClicked() {

    this.style.color = "white";
    

    //var audio = new Audio('sounds/tom-1.mp3');
    //audio.play();
}
}