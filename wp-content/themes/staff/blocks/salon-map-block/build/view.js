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

// Left Side
const hoverLeft = document.getElementById("hoverLeft");
const pulserLeft = document.getElementById("pulserLeft");
const pulserLeftMobi = document.getElementById("pulserLeftMobi");
const leftSide = document.getElementById("leftSide");
const part = document.getElementById("part");
if (hoverLeft) {
  hoverLeft.addEventListener("mouseover", event => {
    pulserLeft.classList.add("circleActive");
    pulserLeftMobi.classList.add("circle-mobi-active");
    bottomSide.classList.add("bottom-side-mobi");
    leftSide.classList.add("left-side-mobi");
    topSide.classList.add("top-side-mobi");
    rightSide.classList.add("right-side-mobi");
  });
  hoverLeft.addEventListener("mouseleave", () => {
    pulserLeft.classList.remove("circleActive");
    pulserLeftMobi.classList.remove("circle-mobi-active");
    bottomSide.classList.remove("bottom-side-mobi");
    leftSide.classList.remove("left-side-mobi");
    topSide.classList.remove("top-side-mobi");
    rightSide.classList.remove("right-side-mobi");
  });
}
if (pulserLeft) {
  pulserLeft.addEventListener("mouseover", event => {
    hoverLeft.classList.add("colorActive");
    part.classList.add("partActive");
  });
  pulserLeft.addEventListener("mouseleave", () => {
    hoverLeft.classList.remove("colorActive");
    part.classList.remove("partActive");
  });
}
if (leftSide) {
  leftSide.addEventListener("mouseover", event => {
    hoverLeft.classList.add("colorActive");
    part.classList.add("partActive");
    pulserLeftMobi.classList.add("circle-mobi-active");
    bottomSide.classList.add("bottom-side-mobi");
    leftSide.classList.add("left-side-mobi");
    topSide.classList.add("top-side-mobi");
    rightSide.classList.add("right-side-mobi");
  });
  leftSide.addEventListener("mouseleave", () => {
    hoverLeft.classList.remove("colorActive");
    part.classList.remove("partActive");
    pulserLeftMobi.classList.remove("circle-mobi-active");
    bottomSide.classList.remove("bottom-side-mobi");
    leftSide.classList.remove("left-side-mobi");
    topSide.classList.remove("top-side-mobi");
    rightSide.classList.remove("right-side-mobi");
  });
}

// Right Side
const hoverRight = document.getElementById("hoverRight");
const pulserRight = document.getElementById("pulserRight");
const pulserRightMobi = document.getElementById("pulserRightMobi");
const rightSide = document.getElementById("rightSide");
if (hoverRight) {
  hoverRight.addEventListener("mouseover", event => {
    pulserRight.classList.add("circleActive");
    pulserRightMobi.classList.add("circle-mobi-active");
    bottomSide.classList.add("bottom-side-mobi");
    topSide.classList.add("top-side-mobi");
    rightSide.classList.add("right-side-mobi");
    leftSide.classList.add("left-side-mobi");
  });
  hoverRight.addEventListener("mouseleave", () => {
    pulserRight.classList.remove("circleActive");
    pulserRightMobi.classList.remove("circle-mobi-active");
    bottomSide.classList.remove("bottom-side-mobi");
    topSide.classList.remove("top-side-mobi");
    rightSide.classList.remove("right-side-mobi");
    leftSide.classList.remove("left-side-mobi");
  });
}
if (pulserRight) {
  pulserRight.addEventListener("mouseover", event => {
    hoverRight.classList.add("colorActive");
  });
  pulserRight.addEventListener("mouseleave", () => {
    hoverRight.classList.remove("colorActive");
  });
}
if (rightSide) {
  rightSide.addEventListener("mouseover", event => {
    hoverRight.classList.add("colorActive");
    pulserRightMobi.classList.add("circle-mobi-active");
    bottomSide.classList.add("bottom-side-mobi");
    leftSide.classList.add("left-side-mobi");
    topSide.classList.add("top-side-mobi");
    rightSide.classList.add("right-side-mobi");
  });
  rightSide.addEventListener("mouseleave", () => {
    hoverRight.classList.remove("colorActive");
    pulserRightMobi.classList.remove("circle-mobi-active");
    bottomSide.classList.remove("bottom-side-mobi");
    leftSide.classList.remove("left-side-mobi");
    topSide.classList.remove("top-side-mobi");
    rightSide.classList.remove("right-side-mobi");
  });
}

// Top Side
const hoverTop = document.getElementById("hoverTop");
const pulserTop = document.getElementById("pulserTop");
const pulserTopMobi = document.getElementById("pulserTopMobi");
const topSide = document.getElementById("topSide");
if (hoverTop) {
  hoverTop.addEventListener("mouseover", event => {
    pulserTop.classList.add("circleActive");
    pulserTopMobi.classList.add("circle-mobi-active");
    topSide.classList.add("top-side-mobi");
    bottomSide.classList.add("bottom-side-mobi");
    rightSide.classList.add("right-side-mobi");
    leftSide.classList.add("left-side-mobi");
  });
  hoverTop.addEventListener("mouseleave", () => {
    pulserTop.classList.remove("circleActive");
    pulserTopMobi.classList.remove("circle-mobi-active");
    bottomSide.classList.remove("bottom-side-mobi");
    topSide.classList.remove("top-side-mobi");
    rightSide.classList.remove("right-side-mobi");
    leftSide.classList.remove("left-side-mobi");
  });
}
if (pulserTop) {
  pulserTop.addEventListener("mouseover", event => {
    hoverTop.classList.add("colorActive");
  });
  pulserTop.addEventListener("mouseleave", () => {
    hoverTop.classList.remove("colorActive");
  });
}
if (topSide) {
  topSide.addEventListener("mouseover", event => {
    hoverTop.classList.add("colorActive");
    pulserTopMobi.classList.add("circle-mobi-active");
    bottomSide.classList.add("bottom-side-mobi");
    leftSide.classList.add("left-side-mobi");
    topSide.classList.add("top-side-mobi");
    rightSide.classList.add("right-side-mobi");
  });
  topSide.addEventListener("mouseleave", () => {
    hoverTop.classList.remove("colorActive");
    pulserTopMobi.classList.remove("circle-mobi-active");
    bottomSide.classList.remove("bottom-side-mobi");
    leftSide.classList.remove("left-side-mobi");
    topSide.classList.remove("top-side-mobi");
    rightSide.classList.remove("right-side-mobi");
  });
}

// Bottom Side
const hoverBottom = document.getElementById("hoverBottom");
const pulserBottom = document.getElementById("pulserBottom");
const pulserBottomMobi = document.getElementById("pulserBottomMobi");
const bottomSide = document.getElementById("bottomSide");
if (hoverBottom) {
  hoverBottom.addEventListener("mouseover", event => {
    pulserBottom.classList.add("circleActive");
    pulserBottomMobi.classList.add("circle-mobi-active");
    bottomSide.classList.add("bottom-side-mobi");
    leftSide.classList.add("left-side-mobi");
    topSide.classList.add("top-side-mobi");
    rightSide.classList.add("right-side-mobi");
  });
  hoverBottom.addEventListener("mouseleave", () => {
    pulserBottom.classList.remove("circleActive");
    pulserBottomMobi.classList.remove("circle-mobi-active");
    bottomSide.classList.remove("bottom-side-mobi");
    leftSide.classList.remove("left-side-mobi");
    topSide.classList.remove("top-side-mobi");
    rightSide.classList.remove("right-side-mobi");
  });
}
if (pulserBottom) {
  pulserBottom.addEventListener("mouseover", event => {
    hoverBottom.classList.add("colorActive");
  });
  pulserBottom.addEventListener("mouseleave", () => {
    hoverBottom.classList.remove("colorActive");
  });
}
if (bottomSide) {
  bottomSide.addEventListener("mouseover", event => {
    hoverBottom.classList.add("colorActive");
    pulserBottomMobi.classList.add("circle-mobi-active");
    bottomLeft.classList.add("left-side-mobi");
    bottomSide.classList.add("bottom-side-mobi");
    topSide.classList.add("top-side-mobi");
    rightSide.classList.add("right-side-mobi");
  });
  bottomSide.addEventListener("mouseleave", () => {
    hoverBottom.classList.remove("colorActive");
    pulserBottomMobi.classList.remove("circle-mobi-active");
    bottomLeft.classList.remove("left-side-mobi");
    bottomSide.classList.remove("bottom-side-mobi");
    topSide.classList.remove("top-side-mobi");
    rightSide.classList.remove("right-side-mobi");
  });
}

/* eslint-disable no-console */
/******/ })()
;
//# sourceMappingURL=view.js.map