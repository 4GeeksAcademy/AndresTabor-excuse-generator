/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  //write your code here
  let whoToWrite = who[Math.floor(Math.random() * who.length)];
  let actionToWrite = action[Math.floor(Math.random() * action.length)];
  let whatToWrite = what[Math.floor(Math.random() * what.length)];
  let whenToWrite = when[Math.floor(Math.random() * when.length)];
  let text = document.getElementById("excuse");
  text.innerHTML = `¡${whoToWrite}  ${actionToWrite}  ${whatToWrite}  ${whenToWrite}!`;
};
