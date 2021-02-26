import HandleForm from "./handle-form.js";

const $form = document.querySelector("form");
const $resultDisplay = document.querySelector("#result");
const $fieldsets = document.querySelectorAll("fieldset");
const $result = document.getElementById("result");

const goodAnswers = ["a","b","d","d","a"];
let userAnswers = [];
let score = [];
const gifGoodAnswers = [
    "https://media.giphy.com/media/O6JIc2aWjFPBm/giphy.gif",
    "https://media.giphy.com/media/9Y1BfGEG29BVrNZyBX/giphy.gif",
    "https://media.giphy.com/media/kVVepXkGDA4W7fiBMA/giphy.gif",
    "https://media.giphy.com/media/l2LoQadL5f2k2i0Yxl/giphy.gif",
    "https://media.giphy.com/media/fZ7ncxVECeVuSrRnJb/giphy.gif",
    "https://media.giphy.com/media/jReQBI5z2uqTmGZ9Es/giphy.gif"
];

// Handling submit's event from the user when he ou she has answered all questions

const submitForm = new HandleForm($form, $fieldsets, $resultDisplay, goodAnswers, userAnswers, score, $result, gifGoodAnswers);

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

