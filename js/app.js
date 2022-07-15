"use strict";
let userName = prompt("What do you want to call yourself?");
let vg = prompt("Does " + userName + " Have a common name? (yes/no)(y/n)");
let vgAnswer = vg.toLowerCase();
if (vgAnswer === "yes" || vgAnswer === "y") {
  alert("You have a common name! unlike Sophia G20");
}
else {
  alert("You do not have a common name like me!");
}  // end of if statement
let sleep = prompt("Does Sophia love sleep?");
let sleepAnswer = sleep.toLowerCase();
if (sleepAnswer === "yes" || sleepAnswer === "y") {
    alert("Sophia loves sleep!");
}   // end of if statement
else {
    alert("Unlike Sophia, You do not like sleep !");
}  // end of else statement
let hobbies = prompt("What are your hobbies?");
let hobbiesArray = hobbies.split(",");
let hobbiesArrayLength = hobbiesArray.length;
let hobbiesArrayLengthString = hobbiesArrayLength.toString();
alert("You have " + hobbiesArrayLengthString + " hobbies!");

if ( vg !== "yes" && vg !== "y") {
  alert("You are not a videogame fan!");
  //console.log("You are not a videogame fan!");
  window.alert("You are not a videogame fan!");
} // end of if statement

if (vgAnswer === "yes" || vgAnswer === "y") {
  displayUserName();
} // end of if statement

questionaire();

function displayUserName() {
  alert("Bye " + userName + "!");
} // end of displayUserName function
