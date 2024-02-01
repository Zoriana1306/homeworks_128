"use strict";

var currentLight = 0;

function switchColor() {
  var colors = document.querySelectorAll('.grey');
  colors[currentLight].classList.remove('active');
  currentLight = (currentLight + 1) % colors.length;
  colors[currentLight].classList.add('active');
}