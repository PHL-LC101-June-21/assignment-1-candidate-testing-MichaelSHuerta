const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer;
let questions = ["Who was the first American woman in space?","True or false: 5 kilometer == 5000 meters?","(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride","true", "40","Trajectory","3"]
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("enter name:");
  console.log(" Hello " + candidateName )
} 

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for(i=0;i<questions.length;i++){
    answers = input.question(questions[i])
     candidateAnswers.push(answers)
  }


}

function gradeQuiz(candidateAnswers) {
  let grade = 0;

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for(i=0;i<questions.length;i++){
if (candidateAnswers[i] === correctAnswers[i]){
  console.log("Youre correct")
  grade++
  }
  else {
    console.log("Your Answer:" + candidateAnswers[i])
    console.log("Correct Answer:" + correctAnswers[i])
  }
}




  
  //Number of Correct Answers) / (Number of Quiz Questions) * 100
  let total = (grade/correctAnswers.length) * 100
  console.log( ">>> Overall Grade: " + total + "% " + grade + " out of 5 responses correct) <<<")
  

  if(total >= 60){
    console.log (">>> Status: PASSED <<<")
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