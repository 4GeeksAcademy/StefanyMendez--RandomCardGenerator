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

  let buttonNewCard = document.getElementById("btnNewCard");
  buttonNewCard.addEventListener("click", event => {
    clearCard();
    newCard();
    clearInterval(intervaloClearCard);
    clearInterval(intervaloNewCard);
    intervaloClearCard = null;
    intervaloNewCard = null;

    intervaloClearCard = setInterval(clearCard, 10000);
    intervaloNewCard = setInterval(newCard, 10000);
  });

  let buttonChangeSize = document.getElementById("btnChangeSize");
  buttonChangeSize.addEventListener("click", event => {
    changeSizeCard();
  });
  let inputHeigth = document.getElementById("inputHeigth");
  inputHeigth.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      document.getElementById("inputWidth").focus();
    }
  });
  let inputWidth = document.getElementById("inputWidth");
  inputWidth.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      changeSizeCard();
    }
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
  let index = Math.floor(Math.random() * 13);

  return numbers[index];
}
function generateRandomSuit() {
  let suit = ["heart", "spade", "club", "diamond"];
  let index = Math.floor(Math.random() * 4);

  return suit[index];
}
function changeSizeCard() {
  let inputHeigth = document.getElementById("inputHeigth").value;
  let inputWidth = document.getElementById("inputWidth").value;
  let inputHeigthInt = parseInt(inputHeigth);
  let inputWidthInt = parseInt(inputWidth);

  if (inputHeigth === "" || inputWidth === "") {
    swal("Error", "You must enter a value", "error");
    setTimeout(function() {
      document.getElementById("inputHeigth").focus();
    }, 3000);
    document.getElementById("inputHeigth").value = "";
    document.getElementById("inputWidth").value = "";
  }
  if (inputHeigthInt < 22 || inputWidthInt < 22) {
    swal("Error", "The heigth and width must be over 22", "error");
    setTimeout(function() {
      document.getElementById("inputHeigth").focus();
    }, 3000);
    document.getElementById("inputHeigth").value = "";
    document.getElementById("inputWidth").value = "";
  } else {
    let card = document.querySelector(".card");
    card.style.height = inputHeigth + "rem";
    card.style.width = inputWidth + "rem";
  }
}
