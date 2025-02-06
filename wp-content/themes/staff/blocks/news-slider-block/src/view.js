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

window.addEventListener("load", function () {
	if (window.swiper) {
		window.swiper.destroy(true, true);
	}
	window.swiper = new Swiper('#slide', {
		speed: 400,
		spaceBetween: 20,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        slidesPerGroup: 1, 
        slidesPerView: 3,
        loop: false,
        loopFillGroupWithBlank: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		loop: true,
		breakpoints: {
			700: {
				slidesPerView: 3
			},
			600: {
				slidesPerView: 2
			},
			0: {
				slidesPerView: 1.14,
				spaceBetween: 16
			}
		}
	});
});
// addEventListener('DOMContentLoaded', function () {
// 	const swiper = new Swiper('#slide', {
// 		// speed: 400,
// 		spaceBetween: 20,
// 		autoplay: false,
// 		observer: false,
// 		observeParents: false,
// 		observeSlideChildren: false,
// 		navigation: {
// 			nextEl: '.swiper-button-next',
// 			prevEl: '.swiper-button-prev',
// 		},
// 		pagination: {
// 			el: '.swiper-pagination',
// 			clickable: true,
// 		},
// 		loop: false,
// 		slidesPerView: 3,
// 		breakpoints: {
// 			700: {
// 				slidesPerView: 3
// 			},
// 			600: {
// 				slidesPerView: 2
// 			},
// 			0: {
// 				slidesPerView: 1.14,
// 				spaceBetween: 16
// 			}
// 		}
// 	});
// 	swiper.autoplay.stop();
// });
