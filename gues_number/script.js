'use strict';
const messageEl = document.querySelector('.message');
const highScoreEl = document.querySelector('.highscore');
const scoreEl = document.querySelector('.score');
const checkEl = document.querySelector('.check');
const guessEl = document.querySelector('.guess');
const againBtnEl = document.querySelector('.again');
const numberEl = document.querySelector('.number');
const bodyEl = document.querySelector('body');
let score = 20;
!localStorage.getItem('highScoreEl')
  ? localStorage.setItem('highScoreEl', 0)
  : (highScoreEl.innerHTML = localStorage.getItem('highScoreEl'));
function numberGenerator() {
  return Math.ceil(Math.random() * 20);
}
let guessNumber = numberGenerator();
console.log(guessNumber);
function checkValue() {
  return Number(guessEl.value);
}
checkEl.addEventListener('click', function () {
  console.log('added event listner');
  const userValue = checkValue();
  if (userValue === guessNumber) {
    if (localStorage.getItem('highScoreEl') < score) {
      localStorage.setItem('highScoreEl', scoreEl.innerHTML);
      highScoreEl.innerHTML = scoreEl.innerHTML;
    }
    numberEl.innerHTML = guessNumber;
    bodyEl.style.backgroundColor = '#60b347';
    messageEl.innerHTML = '🥳 you won !';
  } else if (
    messageEl.innerHTML === '🥳 you won !' ||
    messageEl.innerHTML ===
      'you have already guessed the number please press again to Start again!'
  ) {
    messageEl.innerHTML =
      'you have already guessed the number please press again to Start again!';
  } else {
    if (score >= 1) {
      //   if (userValue < guessNumber)
      //     messageEl.innerHTML = '📉 Too Low!';
      //   } else if (userValue > guessNumber) {
      //     messageEl.innerHTML = '📈 Too high !';
      //   }
      userValue < guessNumber
        ? (messageEl.innerHTML = '📉 Too Low!')
        : (messageEl.innerHTML = '📈 Too high !');

      scoreEl.innerHTML = scoreEl.innerHTML - 1;
    } else {
      scoreEl.innerHTML = 0;
      messageEl.innerHTML = '💔 you lost !';
    }
  }
  againBtnEl.addEventListener('click', function () {
    score = 20;
    scoreEl.innerHTML = score;
    bodyEl.style.backgroundColor = '#222';
    messageEl.innerHTML = 'start guessing...';
    guessNumber = numberGenerator();
    numberEl.innerHTML = '?';
    guessEl.value = '';
  });
});
