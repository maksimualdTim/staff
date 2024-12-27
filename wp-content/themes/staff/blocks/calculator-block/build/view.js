/******/ (() => { // webpackBootstrap
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

/* eslint-disable no-console */

const slider = document.getElementById("fleet-size");
const rangeValue = document.getElementById("rangeValue");
slider.addEventListener("input", e => {
  let num = e.target.value;
  let position = -1 * num;
  rangeValue.style.left = num + '%';
  rangeValue.style.transform = 'translate(' + position + '%, 2px)';
  rangeValue.innerText = num;
});
const gallonsFillUp = document.getElementById("gallons-fillup");
const gallonsValue = document.getElementById("gallonsValue");
gallonsFillUp.addEventListener("input", e => {
  let num = e.target.value;
  let position = -1 * num;
  gallonsValue.style.left = num + '%';
  gallonsValue.style.transform = 'translate(' + position + '%, 2px)';
  gallonsValue.innerText = num;
});
let fillUpsPerWeek = 1;

// Event listeners for button selection
function saveInputs() {
  // Сохраняем текущие значения в LocalStorage
  localStorage.setItem("fleetSize", document.getElementById("fleet-size").value);
  localStorage.setItem("gallonsPerFillUp", document.getElementById("gallons-fillup").value);
  localStorage.setItem("fillUpsPerWeek", fillUpsPerWeek);
}
function loadInputs() {
  // Восстанавливаем значения из LocalStorage
  const savedFleetSize = localStorage.getItem("fleetSize");
  const savedGallonsPerFillUp = localStorage.getItem("gallonsPerFillUp");
  const savedFillUpsPerWeek = localStorage.getItem("fillUpsPerWeek");
  if (savedFleetSize !== null) {
    document.getElementById("fleet-size").value = savedFleetSize;
  }
  if (savedGallonsPerFillUp !== null) {
    document.getElementById("gallons-fillup").value = savedGallonsPerFillUp;
  }
  if (savedFillUpsPerWeek !== null) {
    fillUpsPerWeek = parseInt(savedFillUpsPerWeek);
    document.querySelectorAll(".fill-up-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.fill-up-btn[data-value="${savedFillUpsPerWeek}"]`)?.classList.add("active");
  }
}
function calculateSavings() {
  const fleetSize = parseInt(document.getElementById("fleet-size").value) || 0;
  const gallonsPerFillUp = parseInt(document.getElementById("gallons-fillup").value) || 0;
  const savingsPerGallon = 0.6;
  const annualSavings = fleetSize * fillUpsPerWeek * savingsPerGallon * gallonsPerFillUp * 52; // 52 weeks
  document.getElementById("savings-result").innerText = `$${annualSavings.toLocaleString()}`;
  const annualSavingsMobi = fleetSize * fillUpsPerWeek * savingsPerGallon * gallonsPerFillUp * 52; // 52 weeks
  document.getElementById("savings-result-mobi").innerText = `$${annualSavingsMobi.toLocaleString()}`;

  // Сохраняем текущие данные
  saveInputs();
}

// Recalculate when input changes
document.getElementById("fleet-size").addEventListener("input", calculateSavings);
document.getElementById("gallons-fillup").addEventListener("input", calculateSavings);

// Event listeners for button selection
document.querySelectorAll(".fill-up-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".fill-up-btn").forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    fillUpsPerWeek = parseInt(button.dataset.value);
    calculateSavings();
  });
});

// Load saved inputs on page load
loadInputs();
calculateSavings();

// const rangeInput = document.getElementById('test');
// const rangeText = document.getAnimations('range-text');

// rangeInput.addEventListener('change', (e) => {
// 	console.log(e.target.value);
//   let newVal = e.target.value;
//   let negNewVal = -1 * newVal;

//   rangeText.style.left = (newVal + '%'); //Set range left position
//   rangeText.style.transform = 'translate(' + negNewVal + '%, 2px)'; //Set range translate to correct
//   rangeText.textContent = newVal; //Set range text equal to input position
// })

/* eslint-enable no-console */
/******/ })()
;
//# sourceMappingURL=view.js.map