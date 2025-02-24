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

document.addEventListener("DOMContentLoaded", function () {
  const fleetSize = document.getElementById("fleet-size");
  const rangeValue = document.getElementById("rangeValue");
  const minValue = parseInt(fleetSize.min);
  const maxValue = parseInt(fleetSize.max);
  fleetSize.addEventListener("input", e => {
    let num = parseInt(e.target.value);
    let normalizedValue = (num - minValue) / (maxValue - minValue) * 99 + 1;
    let position = -1 * normalizedValue;
    rangeValue.style.left = normalizedValue + '%';
    rangeValue.style.transform = `translate(${position}%, 2px)`;
    rangeValue.innerText = num;
  });
  const gallonsFillUp = document.getElementById("gallons-fillup");
  const gallonsValue = document.getElementById("gallonsValue");
  gallonsFillUp.addEventListener("input", e => {
    let currentValue = parseInt(e.target.value);
    let minValue = parseInt(gallonsFillUp.min);
    let maxValue = parseInt(gallonsFillUp.max);
    let normalizedValue = (currentValue - minValue) / (maxValue - minValue) * 99 + 1;
    let position = -1 * normalizedValue;
    gallonsValue.style.left = normalizedValue + '%';
    gallonsValue.style.transform = 'translate(' + position + '%, 2px)';
    gallonsValue.innerText = currentValue;
  });
  let fillUpsPerWeek = 1;
  function saveInputs() {
    localStorage.setItem("fleetSize", document.getElementById("fleet-size").value);
    localStorage.setItem("gallonsPerFillUp", document.getElementById("gallons-fillup").value);
    localStorage.setItem("fillUpsPerWeek", fillUpsPerWeek);
  }
  function loadInputs() {
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
    // const savingsPerGallon = 0.6;
    const pricePerGallonWithoutCard = window.fuelPrices.pricePerGallonWithoutCard;
    const pricePerGallonWithCard = window.fuelPrices.pricePerGallonWithCard;
    const annualSavings = fleetSize * fillUpsPerWeek * (pricePerGallonWithoutCard - pricePerGallonWithCard) * gallonsPerFillUp;
    document.getElementById("savings-result").innerText = `$${annualSavings.toLocaleString()}`;
    const annualSavingsMobi = fleetSize * fillUpsPerWeek * (pricePerGallonWithoutCard - pricePerGallonWithCard) * gallonsPerFillUp;
    document.getElementById("savings-result-mobi").innerText = `$${annualSavingsMobi.toLocaleString()}`;
    saveInputs();
  }
  document.getElementById("fleet-size").addEventListener("input", calculateSavings);
  document.getElementById("gallons-fillup").addEventListener("input", calculateSavings);
  document.querySelectorAll(".fill-up-btn").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".fill-up-btn").forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");
      fillUpsPerWeek = parseInt(button.dataset.value);
      calculateSavings();
    });
  });
  loadInputs();
  calculateSavings();
});

/* eslint-enable no-console */
/******/ })()
;
//# sourceMappingURL=view.js.map