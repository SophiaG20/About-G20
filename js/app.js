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
let sleep = prompt("Does Sophia love sleep? (yes/no)(y/n)");
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
  alert("Thank you for coming to my TED talk!");
  //console.log("Thank you for coming to my TED talk!");
  window.alert("C's get you degrees like my ME degree!")
if (vg === "no" || vg === "n") {
  alert("Thank you for coming to my TED talk!");
  //console.log("Thank you for coming to my TED talk!");
  window.alert("C's get you degrees like my ME degree!")
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
