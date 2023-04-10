'use strict';
const model = document.querySelector('.modal');
const closeModelBtn = document.querySelector('.close-modal');
const showModelBtns = document.querySelectorAll('.show-modal');
const overlay = document.querySelector('.overlay');
for (let i = 0; i < showModelBtns.length; i++) {
  console.log(showModelBtns[i].textContent);
  showModelBtns[i].addEventListener('click', function () {
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
const closeModel = function () {
  overlay.classList.add('hidden');
  model.classList.add('hidden');
};
overlay.addEventListener('click', closeModel);
closeModelBtn.addEventListener('click', closeModel);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !model.classList.contains('hidden'));
  closeModel();
});
