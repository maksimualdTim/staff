/******/ (() => { // webpackBootstrap
/*!************************************!*\
  !*** ./src/form-card-page/view.js ***!
  \************************************/
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
document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.form-step');
  const nextButtons = document.querySelectorAll('.next-step');
  const stepsItems = document.querySelectorAll('.form-card_steps .step__item');
  let currentStep = 0;
  function updateSteps() {
    steps.forEach((step, index) => {
      step.classList.toggle('active', index === currentStep);
    });
  }
  function updateProgressBar(stepIndex) {
    stepsItems.forEach((step, index) => {
      if (index <= stepIndex) {
        step.classList.add('bg-black');
      }
    });
  }
  nextButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentStep = Math.min(currentStep + 1, steps.length - 1);
      updateSteps();
      updateProgressBar(currentStep);
    });
  });
  updateSteps();
  updateProgressBar(currentStep);
});
document.addEventListener('DOMContentLoaded', function () {
  const formContainer = document.getElementById('form-container');
  const message = document.getElementById('success-message');
  const formSection = document.getElementById('formSection');
  document.addEventListener('wpcf7mailsent', function (event) {
    const formWrapper = event.target.closest('.wpcf7');
    if (formWrapper) {
      formWrapper.style.display = 'none';
      formContainer.style.display = "none";
      formSection.classList.add("form-card-bg");
      const successMessage = message.style.display = "flex";
      formWrapper.insertAdjacentHTML('afterend', successMessage);
    }
  });
});

/* eslint-enable no-console */
/******/ })()
;
//# sourceMappingURL=view.js.map