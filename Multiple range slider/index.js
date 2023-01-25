"use strict";
const leftInput = document.querySelector("#leftSlider");
const rightInput = document.querySelector("#rightSlider");
const range = document.querySelector(".range");
const thumbLeft = document.querySelector(".thumb.left");
const thumbRight = document.querySelector(".thumb.right");
const setLeftSlider = function () {
  leftInput.value = Math.min(
    parseInt(leftInput.value),
    parseInt(rightInput.value)
  );
  let width = -parseInt(leftInput.value) + parseInt(rightInput.value);
  range.style.width = width + 1 + "%";
  let left = parseInt(leftInput.value);
  range.style.left = left + "%";
  thumbLeft.style.left = left + "%";
};
const setRightSlider = function () {
  rightInput.value = String(
    Math.max(parseInt(leftInput.value), parseInt(rightInput.value))
  );
  let width = -parseInt(leftInput.value) + parseInt(rightInput.value);
  range.style.width = width + 1 + "%";
  let left = parseInt(rightInput.value);
  thumbRight.style.left = left + "%";
};
leftInput.addEventListener("input", setLeftSlider);
rightInput.addEventListener("input", setRightSlider);
