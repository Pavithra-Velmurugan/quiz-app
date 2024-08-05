const quizContainer = document.getElementById("quiz-container");
const questionElement = document.getElementById("Question");
const optionsContainer = document.getElementById("options-container");
const submitBtn = document.getElementById("submitbtn");
const feedbackElement = document.getElementById("feedback");
const scoreElement = document.getElementById("score");
const retakeBtn = document.getElementById("retakebtn");

let currentQuestionIndex=0;
let score = 0;

const quizQuestions = [
    {
        question:"what is the capital of france?",
        options:["Berlin","Madrid","Paris", "Rome"],
        correctAnswer:"Paris"
    },
    {
        question:"what is the capital of Telangana?",
        options:["Berlin","Hydrabad","Paris", "Rome"],
        correctAnswer:"Hydrabad"
    },
    {
        question:"what is the capital of India?",
        options:["Delhi","Madrid","Paris", "Rome"],
        correctAnswer:"Delhi"
    }
]

function loadQuestion(){
    const currentQuestion = quizQuestions[currentQuestionIndex];
questionElement.textContent=currentQuestion.question;


optionsContainer.innerHTML="";

currentQuestion.options.forEach((option,index)=>{
    const optionButton= document.createElement("button");
    optionButton.textContent=option;

    optionButton.onclick = function(){
        selectAnswer(option, currentQuestion.correctAnswer);
    }

    optionsContainer.appendChild(optionButton);
})

}

function selectAnswer (selectedOption,correctAnswer){
if (selectedOption===correctAnswer){
    feedbackElement.textContent="Correct!";
    score++;
}else{
    feedbackElement.textContent="Incorrect. The correct answer is:" + correctAnswer;

}
currentQuestionIndex++;

if (currentQuestionIndex < quizQuestions.length){
    loadQuestion();
} else {
    endQuiz();
}

}

function endQuiz(){
    quizContainer.innerHTML="<h2>Quiz Completed</h2>";
    scoreElement.textContent = "Final Score: " + score + " out of " + quizQuestions.length;
            quizContainer.appendChild(scoreElement);
            retakeBtn.style.display = "block";
}

function resetQuizContainer() {
    quizContainer.innerHTML = `
     <p id="Question"></p>
        <div id="options-container"></div>
        <p id="feedback"></p>    
`;

questionElement = document.getElementById("Question");
optionsContainer = document.getElementById("options-container");
feedbackElement = document.getElementById("feedback");

}


function retakeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    feedbackElement.textContent = ""; // Clear any previous feedback
    resetQuizContainer(); // Reset the quiz container
    retakeBtn.style.display = "none"; // Hide the Retake Quiz button
    loadQuestion(); // Reload questions
}

function submitAnswer(){
    const selectedOption =` document.querySelector('input[name="option"]:checked"')`;
    if (selectedOption){
        selectAnswer(selectedOption.value);
    }
}
    
document.addEventListener("DOMContentLoaded", () => {
    loadQuestion();
    retakeBtn.addEventListener("click", retakeQuiz); // Add event listener for retake button
});



