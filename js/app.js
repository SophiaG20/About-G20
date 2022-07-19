"use strict";
let userName = prompt("What do you want to call yourself?");

let welcome = prompt("Welcome to SophiaG20's page I love you " + userName); 

let vg = prompt("Does " + userName + " Have a common name? (yes/no)(y/n)");
let vgAnswer = vg.toLowerCase();
if (vgAnswer === "yes" || vgAnswer === "y") {
  alert("You have a common name! unlike Sophia G20");
}
else {
  alert("You do not have a common name like me!");
}  // end of if statement
let sleep = prompt("Does " + userName + " Like Sleep? (yes/no)(y/n)");
let sleepAnswer = vg.toLowerCase();
if (sleepAnswer === "yes" || sleepAnswer === "y") {
  alert( "You love Sleep! Just like Sophia G20");
}
if (sleepAnswer === "no" || sleepAnswer === "n") {
  alert("You do not like Sleep! unlike like Sophia G20");
}
else {
  alert("You do not like sleep! You are not like Sophia G20");
} 
// end of if statement  
displayUserName();

function displayUserName() {
  alert("Bye  " + userName + " Sophia G20 loves you!");

} // end of displayUserName function
