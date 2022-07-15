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
let sleep = prompt("Does " + userName + " Like Sleep? (yes/no)(y/n)");
let sleepAnswer = vg.toLowerCase();
if (sleepAnswer === "yes" || vgAnswer === "y") {
  alert("userName loves Sleep! Just like Sophia G20");
}
else {
  alert("userName does not love Sleep! Unlike Sophia G20");
}  // end of if statement

if ( vg !== "yes" && vg !== "y") {
  alert("Thank you for coming to my TED talk!");
  //console.log("Thank you for coming to my TED talk!");
  window.alert("C's get you degrees like my ME degree!")
if (vg === "no" || vg === "n") {
  alert("Thank you for coming to my TED talk!");
 
} // end of if statement

} // end of if statement

if (vgAnswer === "yes" || vgAnswer === "y") {
  displayUserName();
}
else {displayUserName();}

questionaire();

function displayUserName() {
  alert("Bye " + userName + "!");
} // end of displayUserName function
