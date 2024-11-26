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

document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const contentBoxes = document.querySelectorAll('.content-box');
  const savedTabIndex = localStorage.getItem('activeTab') || 0;

  // Удаляем все активные классы, чтобы избежать дублирования
  tabs.forEach(tab => tab.classList.remove('active'));
  contentBoxes.forEach(box => box.classList.remove('active'));

  // Устанавливаем активный класс на сохраненный таб или первый по умолчанию
  tabs[savedTabIndex].classList.add('active');
  contentBoxes[savedTabIndex].classList.add('active');

  // Добавляем обработчики событий для переключения табов
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      // Сохраняем текущий активный таб в localStorage
      localStorage.setItem('activeTab', index);

      // Удаляем все активные классы
      tabs.forEach(tab => tab.classList.remove('active'));
      contentBoxes.forEach(box => box.classList.remove('active'));

      // Устанавливаем активный класс на текущий таб и соответствующий контент
      tab.classList.add('active');
      contentBoxes[index].classList.add('active');
    });
  });
});
document.addEventListener('DOMContentLoaded', function () {
  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    // Отображать только один слайд
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
    // autoplay: {
    // 	delay: 3000,
    // },
  });
});
addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 19,
    autoplay: {
      delay: 3000,
      // Задержка между слайдами в миллисекундах (например, 3000 = 3 секунды)
      disableOnInteraction: false // Продолжать автопрокрутку после взаимодействия (клика)
    },
    navigation: {
      nextEl: '.swiper-button-next',
      // Класс кнопки для перехода к следующему слайду
      prevEl: '.swiper-button-prev' // Класс кнопки для перехода к предыдущему слайду
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    slidesPerView: 2,
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
/******/ })()
;
//# sourceMappingURL=view.js.map