/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //se adiciona a un style
  document.querySelector(".card").classList.add(generateRandomSuit());
  //adiciona contenido
  document.querySelector(".card").innerHTML = generateRandomNumber();
};

//funcion para obtener numero carta
let generateRandomNumber = () => {
  let array = [
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
  let random = Math.floor(Math.random() * array.length);
  return array[random];
};
console.log(generateRandomNumber());
//funcion para obtener tipos carta
let generateRandomSuit = () => {
  let suit = ["diamond", "spade", "heart", "club"];
  let random2 = Math.floor(Math.random() * suit.length);
  //generar los valores de manera aleatoria

  return suit[random2];
};
console.log(generateRandomSuit());
