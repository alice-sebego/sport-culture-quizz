import HandleForm from "./handle-form.js";

const $form = document.querySelector("form");
const $result = document.querySelector("#result");
const $fieldsets = document.querySelectorAll("fieldset");

const goodAnswers = ["a","b","d","d","a"];
let userAnswers = [];
let score = [];

// Handling submit's event from the user when he ou she has answered all questions

const submitForm = new HandleForm($form, $fieldsets, $result, goodAnswers, userAnswers, score);

$form.addEventListener("submit", e => {
    
    e.preventDefault();
    for(let i = 1; i < $fieldsets.length + 1; i++){
        submitForm.userAnswers.push(document.querySelector(`input[name=q${i}]:checked`).value);
    }
    
    submitForm.checkResult();
    submitForm.userAnswers = [];
    
});


// Handling click's event on fieldsets

$fieldsets.forEach(fieldset => {
    fieldset.addEventListener("click", () => {
        fieldset.style.backgroundColor = "white";
    })
});

