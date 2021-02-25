const $form = document.querySelector("form");
const $result = document.querySelector("#result");
const $fieldsets = document.querySelectorAll("fieldset");

const goodAnswers = ["a","b","d","d","a"];
let userAnswers = [];
let score = [];

// Handling submit's event from the user when he ou she has answered all questions
$form.addEventListener("submit", e => {
    e.preventDefault();

    for(let i = 1; i < $fieldsets.length + 1; i++){
        userAnswers.push(document.querySelector(`input[name=q${i}]:checked`).value);
    }
    
    checkResult(userAnswers);
    console.log(score);
    userAnswers = [];
});

/**
 * Compare the user's answers with the list of correct answers
 * @param {array} answer
 */
const checkResult = (answer) => {

    for(let i = 0; i < $fieldsets.length; i ++){
         answer[i] === goodAnswers[i] ? score.push(true) : score.push(false);     
    }
    displayResult(score);
    handleDisplayAnswer(score);
    score = [];

}

/**
 * Display user's score depending on its score
 * @param {array} userScores 
 */
const displayResult = (userScores) => {
    
    const result = userScores.filter(userScore => userScore !== true ).length;
    
    switch (result) {
        case 0:
            console.log("5/5"); 
            break;
        case 1:
            console.log("4/5");
            break;
        case 2:
            console.log("3/5");
            break;
        case 3:
            console.log("2/5");
            break;
        case 4:
            console.log("1/5");
            break;
        case 5:
            console.log("0/5");
            break;
        default:
            console.log("Ooops");
    }
}


/**
 * Handling background-color's fieldset depending false or true user's answers
 * @param {array} answers 
 */
const handleDisplayAnswer = (answers) => {

    for(let i = 0; i < answers.length; i++){
        if(answers[i] === true){
            $fieldsets[i].style.backgroundColor = "#a3e9f2";
        } else {
            $fieldsets[i].style.backgroundColor = "#f4acac";
            $fieldsets[i].classList.add("echec");
            setTimeout(() => {
                $fieldsets[i].classList.remove("echec");
            }, 500)
        }
    }

}

// Handling click's event on fieldsets
$fieldsets.forEach(fieldset => {
    fieldset.addEventListener("click", () => {
        fieldset.style.backgroundColor = "white";
    })
});