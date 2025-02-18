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
			step.classList.toggle('bg-black', index <= stepIndex);
		});
	}

	nextButtons.forEach((btn) => {
		btn.addEventListener('click', () => {
			const currentFormStep = steps[currentStep];
			const inputs = currentFormStep.querySelectorAll('input, select, textarea'); 
			let isValid = true;

			inputs.forEach(input => {
				const isRequired = input.closest('label')?.textContent.includes('*');
				if (isRequired && !input.value.trim()) {
					isValid = false;
					input.style.border = "2px solid red";
				}
			});

			if (isValid) {
				currentStep = Math.min(currentStep + 1, steps.length - 1);
				updateSteps();
				updateProgressBar(currentStep);
			}
		});
	});

	document.querySelectorAll('input, select, textarea').forEach(input => {
		input.addEventListener('input', function () {
			if (this.value.trim()) {
				this.style.border = "";
			}
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
			message.style.display = "flex";

			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	});
});

/* eslint-enable no-console */
