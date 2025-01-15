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

document.querySelectorAll('br').forEach(br => br.remove());
document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.form-step');
  const nextButtons = document.querySelectorAll('.next-step');
  const prevButtons = document.querySelectorAll('.prev-step');
  const stepsItems = document.querySelectorAll('.registration__form_heading_steps .step__item');
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
      } else {
        step.classList.remove('bg-black');
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
  prevButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      currentStep = Math.max(currentStep - 1, 0);
      updateSteps();
      updateProgressBar(currentStep);
    });
  });
  updateSteps();
  updateProgressBar(currentStep);
});
/******/ })()
;
//# sourceMappingURL=view.js.map