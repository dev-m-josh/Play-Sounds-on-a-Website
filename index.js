
//Using Loops
var Buttons = document.querySelectorAll(".drum");

for (var x = 0; x < Buttons.length; x++){

Buttons[x].addEventListener("click", function (){
    
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
});

}



/**********************************************/






































































































