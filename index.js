
//Using Loops
var Buttons = document.querySelectorAll(".drum");

for (var x = 0; x < Buttons.length; x++){

Buttons[x].addEventListener("click", function (){
    this.style.color = "blue"

});

}



//First Button

document.querySelector(".w").addEventListener("click", function(){
   
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
})

//Second Button

document.querySelector(".a").addEventListener("click", function(){
    var audio = new Audio("./sounds/tom-2.mp3");
    audio.play();
})

//Third Button

document.querySelector(".s").addEventListener("click", function (){
    var audio =new Audio("./sounds/tom-3.mp3")
    audio.play();
})

//Fourth Button

document.querySelector(".d").addEventListener("click", function (){
    var audio =new Audio("./sounds/tom-4.mp3")
    audio.play();
})

//Fifth Button

document.querySelector(".j").addEventListener("click", function (){
    var audio =new Audio("./sounds/snare.mp3")
    audio.play();
})

//Sixth Button

document.querySelector(".k").addEventListener("click", function (){
    var audio =new Audio("./sounds/crash.mp3")
    audio.play();
})

//Seventh Button

document.querySelector(".l").addEventListener("click", function (){
    var audio =new Audio("./sounds/kick-bass.mp3")
    audio.play();
})











































































