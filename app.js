//jshint esversion:6

const button = document.querySelector("button");
const background = document.querySelector("div");
const colours = ["blue", "red", "green", "black"];

button.addEventListener("click", function(){

  let indexSelector = Math.floor(Math.random()*4);
  background.style.backgroundColor = colours[indexSelector];

});
