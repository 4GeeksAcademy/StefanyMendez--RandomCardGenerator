/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let intervaloNewCard;
  let intervaloClearCard;
  newCard();

  intervaloClearCard = setInterval(clearCard, 10000);
  intervaloNewCard = setInterval(newCard, 10000);

  let button = document.getElementById("btnNewCard");
  button.addEventListener("click", event => {
    clearCard();
    newCard();
    clearInterval(intervaloClearCard);
    clearInterval(intervaloNewCard);
    intervaloClearCard = null;
    intervaloNewCard = null;

    intervaloClearCard = setInterval(clearCard, 10000);
    intervaloNewCard = setInterval(newCard, 10000);
  });
};

function newCard() {
  document.querySelector(".card").classList.add(generateRandomSuit());
  document.querySelector(".card").innerHTML =
    "<span>" + generateRandomNumber() + "</span>";
}

function clearCard() {
  document
    .querySelector(".card")
    .classList.remove("heart", "spade", "diamond", "club");
  document.querySelector(".card").innerHTML = "<span></span>";
}

function generateRandomNumber() {
  let numbers = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let index = Math.floor(Math.random() * 12);

  return numbers[index];
}
function generateRandomSuit() {
  let suit = ["heart", "spade", "club", "diamond"];
  let index = Math.floor(Math.random() * 3);

  return suit[index];
}
