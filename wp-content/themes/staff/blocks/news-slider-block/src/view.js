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
addEventListener('DOMContentLoaded', function () {    
    const swiper = new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 19,
        autoplay: {
            delay: 3000, // Задержка между слайдами в миллисекундах (например, 3000 = 3 секунды)
            disableOnInteraction: false, // Продолжать автопрокрутку после взаимодействия (клика)
        },
        navigation: {
            nextEl: '.swiper-button-next', // Класс кнопки для перехода к следующему слайду
            prevEl: '.swiper-button-prev', // Класс кнопки для перехода к предыдущему слайду
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        slidesPerView: 2,
        breakpoints: {
            770: {
                slidesPerView: 3
            }
        }
      });      
})
/* eslint-enable no-console */
