import HandleForm from "./handle-form.js";
import gifGoodAnswers from "./gif-list.js";
import year from "./utils.js";

const $form = document.querySelector("form");
const $resultDisplay = document.querySelector("#result");
const $fieldsets = document.querySelectorAll("fieldset");
const $result = document.getElementById("result");

const goodAnswers = ["a","b","d","d","a"];
let userAnswers = [];
let score = [];

// Handling submit's event from the user when he ou she has answered all questions

const submitForm = new HandleForm($form, $fieldsets, $resultDisplay, goodAnswers, userAnswers, score, $result, gifGoodAnswers);

submitForm.submitEvent();

// Handling click's event on fieldsets

submitForm.clickAnswer("white");

// /!\ Handle when user has forgot answer a question !!!

// Handle date in the footer's content

const $year = document.getElementById("year");
$year.textContent = year.getUTCFullYear();
