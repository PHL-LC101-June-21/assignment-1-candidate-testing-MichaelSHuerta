const input = require('readline-sync'); //**lets user input Questions

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName; 
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = ["Who was the first American woman in space?","True or false: 5 kilometer == 5000 meters?","(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
//** creating an array [] for the questions 
let correctAnswers = ["Sally Ride","true", "40", "Trajectory","3"] //
let candidateAnswers = []; //empty array for user input


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter name:"); //user enters their name, assigned to candidate name
 
} 

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  
  //**initial expression; loop condition; update expression) {
  //loop body
//}
//**for every answer thats right, I receive  +20%, vise versa
  for(i=0;i<questions.length;i++){ //**answer each question invdividually
    answers = input.question(questions[i])
    // reveiving the user's inputs, [i] so it can keep loop through the questions
     candidateAnswers.push(answers) //** Candidate's response are pushed into the new array (answers) line 14, no push would mean it wont move onto line 39 function gradeQuiz
  }


}

function gradeQuiz(candidateAnswers) {
  let grade = 0;

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for(i=0;i<questions.length;i++){ //** created another loop, wont pass from original function
if (candidateAnswers[i] === correctAnswers[i]){ //** input if the user's answer is correct, === means comparing without data types(strictly)
  console.log("Youre correct")
  grade++
  }
  else {
    console.log("Your Answer:" + candidateAnswers[i]) 
    console.log("Correct Answer:" + correctAnswers[i])//** inforoms the user with the correct answer, displaying their answer as well
  }
}





  
  //Number of Correct Answers) / (Number of Quiz Questions) * 100
  let total = (grade/correctAnswers.length) * 100 //** assigned grade to 0, divided by percentage of correct answers multiplying to 100
  console.log( ">>> Overall Grade: " + total + "% " + grade + " out of 5 responses correct) <<<")
  

  if(total >= 60){ //** if user receives more than or equal to 60 they pass, vise versa
    console.log (">>> Status: PASSED <<<")//** displays a passing or failing 
  }
    else {
      console.log(">>> Status: FAILED <<<")
    
  }


//   while(i < correctAnswers.length) {
// if (candidateQuizAnswer[i] === correctAnswer[i]){
// candidateAnswers = candidateAnswers +1;
// } i++
// }
  
// let percentage = (scoreCounter)/(answerKey.length)*100
// console.log(>>> Overall Grade: ${percentage}% (${scoreCounter} of 5 responses correct) <<<);



  

  return grade;
}

function runProgram() {
  askForName();
  console.log(" Candidate Name: " + candidateName )
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}






































// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};