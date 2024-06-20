
//Using Loops
var Buttons = document.querySelectorAll(".drum");

for (var x = 0; x < Buttons.length; x++){

Buttons[x].addEventListener("click", function (){
    
    var audio = new Audio("./sounds/tom-1.mp3");
    audio.play();
});

}



/**********************************************/

//A Simple Calculator Formula

function add (num1, num2){
    return num1 + num2;
}

function substract (num1, num2){
    return num1 - num2;
}

function multiply (num1, num2){
    return num1 * num2;
}

function divide (num1, num2){
    return num1 / num2;
}

function remainder (num1, num2){
    return num1 % num2;
}

function calculator (num1, num2, operator) {
    return operator(num1, num2);
}

console.log (calculator (11, 5, remainder))




































































































