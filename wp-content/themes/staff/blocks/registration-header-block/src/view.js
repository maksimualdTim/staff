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






document.addEventListener('DOMContentLoaded', function () {
	function updateStepIndicators() {
		const stepStart = document.querySelector('.step-start');
		const stepEnd = document.querySelector('.step-end');
		const stepItems = document.querySelectorAll('.step__item');

		if (stepStart && stepItems[0]) {
			if (window.getComputedStyle(stepStart).display === 'flex') {
				stepItems[0].classList.add('bg-black');
			} else {
				stepItems[0].classList.remove('bg-black');
			}
		}

		if (stepEnd && stepItems[1]) {
			if (window.getComputedStyle(stepEnd).display === 'flex') {
				stepItems[1].classList.add('bg-black');
			} else {
				stepItems[1].classList.remove('bg-black');
			}
		}
	}

	function observeDisplayChanges(element, callback) {
		const observer = new MutationObserver(() => {
			callback();
		});

		observer.observe(element, {
			attributes: true, // Отслеживаем изменения атрибутов
			attributeFilter: ['style'], // Только изменения стиля
		});
	}

	function waitForElements() {
		const form = document.querySelector('.wpcf7-form');
		const stepStart = document.querySelector('.step-start');
		const stepEnd = document.querySelector('.step-end');

		if (form && stepStart && stepEnd) {
			updateStepIndicators();

			// Добавляем наблюдение за изменением display
			observeDisplayChanges(stepStart, updateStepIndicators);
			observeDisplayChanges(stepEnd, updateStepIndicators);

			form.addEventListener('wpcf7step-changed', updateStepIndicators);
		} else {
			setTimeout(waitForElements, 100); // Повторяем, если элементы не найдены
		}
	}

	waitForElements();
});
