"use strict";

let score = 0;

let userName = prompt("What is your name?");
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
let sleepAnswer = sleep.toLowerCase();
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

let answer1 = prompt("What is my favorite color? (red/blue/green)(r/b/g)");
console.log(answer1);

answer1 = answer1.toLowerCase();
console.log(answer1);
if (answer1 === "green" || answer1 === "g") {
  alert("You are correct! I love green!");
  score++;
}
else {
  alert("You are incorrect! I love green!");

let answer2 = prompt("What is my favorite food? (pork fried rice/burger/sushi)(pkfr/b/s)");
console.log(answer2);

  answer2 = answer2.toLowerCase();
  console.log(answer2);

  if (answer2 === "pork fried rice" || answer2 === "pkfr") {
    alert("You are correct! I love pork fried rice!");
    score++;
  }
  else {
    alert("You are incorrect! I love pork fried rice!");
  }

 displayUserName();
 console.log(userName);
}
function displayUserName() {
  alert("Bye  " + userName + " Sophia G20 loves you!");
}
// guessing game for SophiaG20 about-me page


for (let i=0; i<4; i++) {
  let ans6 = prompt("Guess a number between 0-10");
  if(i>=3){
    alert("sorry, you ran out of chances.");
    break;
  }else if(ans6==="8"){
    score++;
    alert("correct!");
    break;
  }else if(ans6>8){
    alert("too high. try again!");
  }else if(ans6<8){
    alert("too low. try again!");
  }else{
    alert('that is not a valid answer. try again!');
  }
}

function question7(){
  let genes = ['mexican', 'indian', 'chinese', 'japanese'];
  for (let i = 0; i < 6; i++) {
    let answer7 = prompt("I have diverse genes. Guess my ethnicity.");
    if(i>=5){
      alert('Sorry, you ran out of chances. I am Mexican, Indian, Chinese, Japanese.');
      return;
    }
    for (let j=0; j<genes.length; j++){
      let ans7=answer7.toLowerCase();
      if(ans7===genes[j]){
        score++;
        alert('correct!');
        return;
      }
    }
    alert("incorrect. let us try that again: You've got this!");
  }
}
question7();

alert('you answered ' + score + ' questions correctly!');