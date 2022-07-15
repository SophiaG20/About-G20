'use strict';

let siteVistitor = prompt('What do you go by?');
-alert(`Hello ${siteVistitor}! Guess what I'm here for!`);
+alert(`Hello ${siteVistitor}! Use the keyboard to guess what I'm here for!`);

let score = 0;
- // Here goessssss
+ // Here goes the game

-let questionOne = prompt('Is G20 a common name?' (yes/no)').toLowerCase();
-if (questionOne === 'yes|| question1 === 'y') {
-    alert('Incorrect!');
- score++;
// console.log(You are Incorrect);
-} else {question1 === 'no|| question1 === 'n'} {
-  alert('Correct!');

} else {
- alert('Anser yes/no or y/n');
-// console.log('Answer yes/no or y/n');
-}  // end of questionOne

let questionTwo = prompt('Would you try to say Grzeskowiak-Amezquita as fast as you can?').toLowerCase();
if (questionTwo === 'yes|| question2 === 'y') {
    alert('Correct!');
    score++;
// console.log(You are Correct);
} else {question2 === 'no|| question2 === 'n'} {
    alert('Incorrect!');
// console.log(You are Incorrect);
} else {
    alert('Anser yes/no or y/n');
    // console.log('Answer yes/no or y/n');
} // end of questionTwo

let questionThree = prompt('Am I Veteran of the US Army?').toLowerCase();
if (questionThree === 'yes|| question === 'y') {
    alert('Correct!');
    score++;
// console.log(You are Correct);
} else if(questionThree === 'no|| question === 'n') {
    alert('Incorrect!');
// console.log(You are Incorrect);
} else {
    alert('Anser yes/no or y/n');
    // console.log('Answer yes/no or y/n');
} // end of questionThree

-let questionFour = prompt('Am I SGT in the US Army? (yes/no or y/n').toLowerCase();
-if (questionFour === 'yes|| question4 === 'y') {
-    alert('Incorrect!');
- score++;  
// console.log(You are Incorrect);
-} else {questionFour === 'no|| question4 === 'n'} {
-  alert('Correct!');
// console.log(You are Correct);
} else {
    alert('Anser yes/no or y/n');
+function yesAndnoQuestion(userAnswer){
+   if (userAnswer === 'yes' || userAnswer === 'y') {
+       return true;
+   } else if (userAnswer === 'no' || userAnswer === 'n') {
+       return false;
+   } else {
+       return 'Answer yes/no or y/n';
    // console.log('Answer yes/no or y/n');
+   }
}