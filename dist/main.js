/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _scripts_clock_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/clock.js */ \"./src/scripts/clock.js\");\n/* harmony import */ var _scripts_health_bar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/health-bar.js */ \"./src/scripts/health-bar.js\");\n/* harmony import */ var _scripts_power_bar_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/power-bar.js */ \"./src/scripts/power-bar.js\");\n\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById(\"siege-game\");\n  const castle1 = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](canvas);\n  const clockDiv = document.getElementById(\"clock-container\");\n  let clock = new _scripts_clock_js__WEBPACK_IMPORTED_MODULE_1__.Clock();\n  (0,_scripts_clock_js__WEBPACK_IMPORTED_MODULE_1__.addClock)(clock.timeString, clockDiv);\n  setInterval(() => (0,_scripts_clock_js__WEBPACK_IMPORTED_MODULE_1__.addClock)(clock.timeString, clockDiv), 1000);\n  setInterval((0,_scripts_health_bar_js__WEBPACK_IMPORTED_MODULE_2__.currentHealth)(castle1.wall.wallobj), 100);\n  const currentPower = new _scripts_power_bar_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]();\n  setInterval(() => currentPower.oscillate.call(currentPower), 200);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFDTztBQUNHO0FBQ1g7QUFFM0NLLFFBQVEsQ0FBQ0MsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyRCxNQUFNQyxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csY0FBYyxDQUFDLFlBQVksQ0FBQztFQUVwRCxNQUFNQyxPQUFPLEdBQUcsSUFBSVQsd0RBQVcsQ0FBQ08sTUFBTSxDQUFDO0VBRXZDLE1BQU1HLFFBQVEsR0FBR0wsUUFBUSxDQUFDRyxjQUFjLENBQUMsaUJBQWlCLENBQUM7RUFDM0QsSUFBSUcsS0FBSyxHQUFHLElBQUlULG9EQUFLLENBQUMsQ0FBQztFQUN2QkQsMkRBQVEsQ0FBQ1UsS0FBSyxDQUFDQyxVQUFVLEVBQUVGLFFBQVEsQ0FBQztFQUVwQ0csV0FBVyxDQUFDLE1BQU1aLDJEQUFRLENBQUNVLEtBQUssQ0FBQ0MsVUFBVSxFQUFFRixRQUFRLENBQUMsRUFBRyxJQUFJLENBQUM7RUFFOURHLFdBQVcsQ0FBQ1YscUVBQWEsQ0FBQ00sT0FBTyxDQUFDSyxJQUFJLENBQUNDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsQ0FBQztFQUVyRCxNQUFNQyxZQUFZLEdBQUcsSUFBSVosNkRBQUssQ0FBQyxDQUFDO0VBQ2hDUyxXQUFXLENBQUMsTUFBTUcsWUFBWSxDQUFDQyxTQUFTLENBQUNDLElBQUksQ0FBQ0YsWUFBWSxDQUFDLEVBQUUsR0FBRyxDQUFDO0FBQ3JFLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nhc3RsZS1zaWVnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDYXN0bGVTaWVnZSBmcm9tIFwiLi9zY3JpcHRzL2dhbWUuanNcIjtcclxuaW1wb3J0IHthZGRDbG9jaywgQ2xvY2t9IGZyb20gXCIuL3NjcmlwdHMvY2xvY2suanNcIjtcclxuaW1wb3J0IHtjdXJyZW50SGVhbHRofSBmcm9tIFwiLi9zY3JpcHRzL2hlYWx0aC1iYXIuanNcIjtcclxuaW1wb3J0IFBvd2VyIGZyb20gXCIuL3NjcmlwdHMvcG93ZXItYmFyLmpzXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2llZ2UtZ2FtZVwiKTtcclxuXHJcbiAgICBjb25zdCBjYXN0bGUxID0gbmV3IENhc3RsZVNpZWdlKGNhbnZhcylcclxuXHJcbiAgICBjb25zdCBjbG9ja0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvY2stY29udGFpbmVyXCIpO1xyXG4gICAgbGV0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcbiAgICBhZGRDbG9jayhjbG9jay50aW1lU3RyaW5nLCBjbG9ja0RpdikgXHJcblxyXG4gICAgc2V0SW50ZXJ2YWwoKCkgPT4gYWRkQ2xvY2soY2xvY2sudGltZVN0cmluZywgY2xvY2tEaXYpICwgMTAwMCk7XHJcbiAgICBcclxuICAgIHNldEludGVydmFsKGN1cnJlbnRIZWFsdGgoY2FzdGxlMS53YWxsLndhbGxvYmopLCAxMDApXHJcblxyXG4gICAgY29uc3QgY3VycmVudFBvd2VyID0gbmV3IFBvd2VyKClcclxuICAgIHNldEludGVydmFsKCgpID0+IGN1cnJlbnRQb3dlci5vc2NpbGxhdGUuY2FsbChjdXJyZW50UG93ZXIpLCAyMDApICAgXHJcbn0pO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6WyJDYXN0bGVTaWVnZSIsImFkZENsb2NrIiwiQ2xvY2siLCJjdXJyZW50SGVhbHRoIiwiUG93ZXIiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjYW52YXMiLCJnZXRFbGVtZW50QnlJZCIsImNhc3RsZTEiLCJjbG9ja0RpdiIsImNsb2NrIiwidGltZVN0cmluZyIsInNldEludGVydmFsIiwid2FsbCIsIndhbGxvYmoiLCJjdXJyZW50UG93ZXIiLCJvc2NpbGxhdGUiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/clock.js":
/*!******************************!*\
  !*** ./src/scripts/clock.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Clock: function() { return /* binding */ Clock; },\n/* harmony export */   addClock: function() { return /* binding */ addClock; }\n/* harmony export */ });\n\nclass Clock {\n  constructor() {\n    // 1. Create a Date object.\n    let date = new Date();\n    // 2. Store the hours, minutes, and seconds.\n    this.hours = date.getHours();\n    this.minutes = date.getMinutes();\n    this.seconds = date.getSeconds();\n    this.timeString = `${this.hours}:${this.minutes}:${this.seconds}`;\n    // 3. Call printTime.\n    this.printTime();\n    // 4. Schedule the tick at 1 second intervals.\n    setInterval(this._tick.bind(this), 1000);\n  }\n  printTime() {\n    // Format the time in HH:MM:SS\n    this.timeString = this.hours + ':' + this.minutes + ':' + this.seconds;\n    return this.timeString;\n  }\n  _tick() {\n    // 1. Increment the time by one second.\n    this.seconds += 1;\n    if (this.seconds === 60) {\n      this.minutes += 1;\n      this.seconds = 0;\n    }\n    ;\n    if (this.minutes === 60) {\n      this.hours += 1;\n      this.minutes = 0;\n    }\n    ;\n    // 2. Call printTime.\n    this.timeString = `${this.hours}:${this.minutes}:${this.seconds}`;\n    this.printTime();\n  }\n}\n;\nconst addClock = function (newElement, parentElement) {\n  const newPTag = document.createElement(\"p\");\n  newPTag.innerText = newElement;\n  newPTag.classList.add(\"siege-clock\");\n  if (parentElement.children.length > 0) {\n    parentElement.removeChild(parentElement.children[0]);\n    parentElement.appendChild(newPTag);\n  } else {\n    parentElement.appendChild(newPTag);\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jbG9jay5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF1QjtBQUV2QixNQUFNQSxLQUFLLENBQUM7RUFDUkUsV0FBV0EsQ0FBQSxFQUFHO0lBQ1o7SUFDQSxJQUFJQyxJQUFJLEdBQUcsSUFBSUMsSUFBSSxDQUFDLENBQUM7SUFDckI7SUFDQSxJQUFJLENBQUNDLEtBQUssR0FBR0YsSUFBSSxDQUFDRyxRQUFRLENBQUMsQ0FBQztJQUM1QixJQUFJLENBQUNDLE9BQU8sR0FBR0osSUFBSSxDQUFDSyxVQUFVLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUNDLE9BQU8sR0FBR04sSUFBSSxDQUFDTyxVQUFVLENBQUMsQ0FBQztJQUNoQyxJQUFJLENBQUNDLFVBQVUsR0FBSSxHQUFFLElBQUksQ0FBQ04sS0FBTSxJQUFHLElBQUksQ0FBQ0UsT0FBUSxJQUFHLElBQUksQ0FBQ0UsT0FBUSxFQUFDO0lBQ2pFO0lBQ0EsSUFBSSxDQUFDRyxTQUFTLENBQUMsQ0FBQztJQUNoQjtJQUNBQyxXQUFXLENBQUMsSUFBSSxDQUFDQyxLQUFLLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDMUM7RUFFQ0gsU0FBU0EsQ0FBQSxFQUFHO0lBQ1g7SUFDQSxJQUFJLENBQUNELFVBQVUsR0FBSSxJQUFJLENBQUNOLEtBQUssR0FBRyxHQUFHLEdBQUUsSUFBSSxDQUFDRSxPQUFPLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQ0UsT0FBUTtJQUN2RSxPQUFPLElBQUksQ0FBQ0UsVUFBVTtFQUN4QjtFQUVBRyxLQUFLQSxDQUFBLEVBQUc7SUFDTjtJQUNBLElBQUksQ0FBQ0wsT0FBTyxJQUFJLENBQUM7SUFFakIsSUFBSSxJQUFJLENBQUNBLE9BQU8sS0FBSyxFQUFFLEVBQUU7TUFDckIsSUFBSSxDQUFDRixPQUFPLElBQUksQ0FBQztNQUNqQixJQUFJLENBQUNFLE9BQU8sR0FBRyxDQUFDO0lBQ3BCO0lBQUM7SUFFRCxJQUFJLElBQUksQ0FBQ0YsT0FBTyxLQUFLLEVBQUUsRUFBRTtNQUNyQixJQUFJLENBQUNGLEtBQUssSUFBSSxDQUFDO01BQ2YsSUFBSSxDQUFDRSxPQUFPLEdBQUcsQ0FBQztJQUNwQjtJQUFDO0lBQ0Q7SUFDQSxJQUFJLENBQUNJLFVBQVUsR0FBSSxHQUFFLElBQUksQ0FBQ04sS0FBTSxJQUFHLElBQUksQ0FBQ0UsT0FBUSxJQUFHLElBQUksQ0FBQ0UsT0FBUSxFQUFDO0lBQ2pFLElBQUksQ0FBQ0csU0FBUyxDQUFDLENBQUM7RUFDbEI7QUFDRjtBQUFDO0FBRUQsTUFBTVgsUUFBUSxHQUFHLFNBQUFBLENBQVNlLFVBQVUsRUFBRUMsYUFBYSxFQUFFO0VBQ25ELE1BQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzNDRixPQUFPLENBQUNHLFNBQVMsR0FBR0wsVUFBVTtFQUM5QkUsT0FBTyxDQUFDSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7RUFDcEMsSUFBSU4sYUFBYSxDQUFDTyxRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDbkNSLGFBQWEsQ0FBQ1MsV0FBVyxDQUFDVCxhQUFhLENBQUNPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRFAsYUFBYSxDQUFDVSxXQUFXLENBQUNULE9BQU8sQ0FBQztFQUN0QyxDQUFDLE1BQU07SUFDTEQsYUFBYSxDQUFDVSxXQUFXLENBQUNULE9BQU8sQ0FBQztFQUNwQztBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXN0bGUtc2llZ2UvLi9zcmMvc2NyaXB0cy9jbG9jay5qcz9iMjMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Q2xvY2ssIGFkZENsb2NrfVxyXG5cclxuY2xhc3MgQ2xvY2sge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIC8vIDEuIENyZWF0ZSBhIERhdGUgb2JqZWN0LlxyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIC8vIDIuIFN0b3JlIHRoZSBob3VycywgbWludXRlcywgYW5kIHNlY29uZHMuXHJcbiAgICAgIHRoaXMuaG91cnMgPSBkYXRlLmdldEhvdXJzKCk7XHJcbiAgICAgIHRoaXMubWludXRlcyA9IGRhdGUuZ2V0TWludXRlcygpO1xyXG4gICAgICB0aGlzLnNlY29uZHMgPSBkYXRlLmdldFNlY29uZHMoKTtcclxuICAgICAgdGhpcy50aW1lU3RyaW5nID0gYCR7dGhpcy5ob3Vyc306JHt0aGlzLm1pbnV0ZXN9OiR7dGhpcy5zZWNvbmRzfWBcclxuICAgICAgLy8gMy4gQ2FsbCBwcmludFRpbWUuXHJcbiAgICAgIHRoaXMucHJpbnRUaW1lKCk7XHJcbiAgICAgIC8vIDQuIFNjaGVkdWxlIHRoZSB0aWNrIGF0IDEgc2Vjb25kIGludGVydmFscy5cclxuICAgICAgc2V0SW50ZXJ2YWwodGhpcy5fdGljay5iaW5kKHRoaXMpLCAxMDAwKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICAgcHJpbnRUaW1lKCkge1xyXG4gICAgICAvLyBGb3JtYXQgdGhlIHRpbWUgaW4gSEg6TU06U1NcclxuICAgICAgdGhpcy50aW1lU3RyaW5nID0gKHRoaXMuaG91cnMgKyAnOicrIHRoaXMubWludXRlcyArICc6JyArIHRoaXMuc2Vjb25kcyk7XHJcbiAgICAgIHJldHVybiB0aGlzLnRpbWVTdHJpbmc7XHJcbiAgICB9O1xyXG4gIFxyXG4gICAgX3RpY2soKSB7XHJcbiAgICAgIC8vIDEuIEluY3JlbWVudCB0aGUgdGltZSBieSBvbmUgc2Vjb25kLlxyXG4gICAgICB0aGlzLnNlY29uZHMgKz0gMTtcclxuICBcclxuICAgICAgaWYgKHRoaXMuc2Vjb25kcyA9PT0gNjApIHtcclxuICAgICAgICAgIHRoaXMubWludXRlcyArPSAxO1xyXG4gICAgICAgICAgdGhpcy5zZWNvbmRzID0gMDtcclxuICAgICAgfTtcclxuICBcclxuICAgICAgaWYgKHRoaXMubWludXRlcyA9PT0gNjApIHtcclxuICAgICAgICAgIHRoaXMuaG91cnMgKz0gMTtcclxuICAgICAgICAgIHRoaXMubWludXRlcyA9IDA7XHJcbiAgICAgIH07XHJcbiAgICAgIC8vIDIuIENhbGwgcHJpbnRUaW1lLlxyXG4gICAgICB0aGlzLnRpbWVTdHJpbmcgPSBgJHt0aGlzLmhvdXJzfToke3RoaXMubWludXRlc306JHt0aGlzLnNlY29uZHN9YFxyXG4gICAgICB0aGlzLnByaW50VGltZSgpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjb25zdCBhZGRDbG9jayA9IGZ1bmN0aW9uKG5ld0VsZW1lbnQsIHBhcmVudEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IG5ld1BUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxyXG4gICAgbmV3UFRhZy5pbm5lclRleHQgPSBuZXdFbGVtZW50XHJcbiAgICBuZXdQVGFnLmNsYXNzTGlzdC5hZGQoXCJzaWVnZS1jbG9ja1wiKVxyXG4gICAgaWYgKHBhcmVudEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQocGFyZW50RWxlbWVudC5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgcGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChuZXdQVGFnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQobmV3UFRhZyk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuICBcclxuICAiXSwibmFtZXMiOlsiQ2xvY2siLCJhZGRDbG9jayIsImNvbnN0cnVjdG9yIiwiZGF0ZSIsIkRhdGUiLCJob3VycyIsImdldEhvdXJzIiwibWludXRlcyIsImdldE1pbnV0ZXMiLCJzZWNvbmRzIiwiZ2V0U2Vjb25kcyIsInRpbWVTdHJpbmciLCJwcmludFRpbWUiLCJzZXRJbnRlcnZhbCIsIl90aWNrIiwiYmluZCIsIm5ld0VsZW1lbnQiLCJwYXJlbnRFbGVtZW50IiwibmV3UFRhZyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImNsYXNzTGlzdCIsImFkZCIsImNoaWxkcmVuIiwibGVuZ3RoIiwicmVtb3ZlQ2hpbGQiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/clock.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CastleSiege; }\n/* harmony export */ });\n/* harmony import */ var _wall_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wall.js */ \"./src/scripts/wall.js\");\n\nclass CastleSiege {\n  constructor(canvas) {\n    this.ctx = canvas.getContext(\"2d\");\n    this.dimensions = {\n      width: canvas.width,\n      height: canvas.height\n    };\n    this.drawBackground(this.ctx);\n    let wallobj = {\n      width: canvas.width / 10,\n      height: canvas.height / 10,\n      health: 100\n    };\n    this.wall = new _wall_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](wallobj, this.ctx);\n    this.wall.wallobj = wallobj;\n  }\n  drawBackground(ctx) {\n    let width = this.dimensions.width;\n    let height = this.dimensions.height;\n    ctx.fillStyle = 'skyblue';\n    ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTRCO0FBRWIsTUFBTUMsV0FBVyxDQUFDO0VBQzdCQyxXQUFXQSxDQUFDQyxNQUFNLEVBQUU7SUFDaEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdELE1BQU0sQ0FBQ0UsVUFBVSxDQUFDLElBQUksQ0FBQztJQUNsQyxJQUFJLENBQUNDLFVBQVUsR0FBRztNQUFFQyxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0ksS0FBSztNQUFFQyxNQUFNLEVBQUVMLE1BQU0sQ0FBQ0s7SUFBTSxDQUFDO0lBQy9ELElBQUksQ0FBQ0MsY0FBYyxDQUFDLElBQUksQ0FBQ0wsR0FBRyxDQUFDO0lBQzdCLElBQUlNLE9BQU8sR0FBRztNQUFFSCxLQUFLLEVBQUVKLE1BQU0sQ0FBQ0ksS0FBSyxHQUFDLEVBQUU7TUFBRUMsTUFBTSxFQUFFTCxNQUFNLENBQUNLLE1BQU0sR0FBQyxFQUFFO01BQzVERyxNQUFNLEVBQUU7SUFDWixDQUFDO0lBQ0QsSUFBSSxDQUFDQyxJQUFJLEdBQUcsSUFBSVosZ0RBQUksQ0FBQ1UsT0FBTyxFQUFFLElBQUksQ0FBQ04sR0FBRyxDQUFDO0lBQ3ZDLElBQUksQ0FBQ1EsSUFBSSxDQUFDRixPQUFPLEdBQUdBLE9BQU87RUFDL0I7RUFFQUQsY0FBY0EsQ0FBQ0wsR0FBRyxFQUFFO0lBQ2hCLElBQUlHLEtBQUssR0FBRyxJQUFJLENBQUNELFVBQVUsQ0FBQ0MsS0FBSztJQUNqQyxJQUFJQyxNQUFNLEdBQUcsSUFBSSxDQUFDRixVQUFVLENBQUNFLE1BQU07SUFDbkNKLEdBQUcsQ0FBQ1MsU0FBUyxHQUFHLFNBQVM7SUFDekJULEdBQUcsQ0FBQ1UsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDUixVQUFVLENBQUNDLEtBQUssRUFBRSxJQUFJLENBQUNELFVBQVUsQ0FBQ0UsTUFBTSxDQUFDO0VBQ3JFO0FBR0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXN0bGUtc2llZ2UvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdhbGwgZnJvbSBcIi4vd2FsbC5qc1wiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXN0bGVTaWVnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXMpIHtcclxuICAgICAgICB0aGlzLmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5kaW1lbnNpb25zID0geyB3aWR0aDogY2FudmFzLndpZHRoLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHR9O1xyXG4gICAgICAgIHRoaXMuZHJhd0JhY2tncm91bmQodGhpcy5jdHgpO1xyXG4gICAgICAgIGxldCB3YWxsb2JqID0geyB3aWR0aDogY2FudmFzLndpZHRoLzEwLCBoZWlnaHQ6IGNhbnZhcy5oZWlnaHQvMTAsXHJcbiAgICAgICAgICAgIGhlYWx0aDogMTAwXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2FsbCA9IG5ldyBXYWxsKHdhbGxvYmosIHRoaXMuY3R4KVxyXG4gICAgICAgIHRoaXMud2FsbC53YWxsb2JqID0gd2FsbG9iajtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3QmFja2dyb3VuZChjdHgpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLmRpbWVuc2lvbnMud2lkdGhcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5kaW1lbnNpb25zLmhlaWdodFxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnc2t5Ymx1ZSdcclxuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdGhpcy5kaW1lbnNpb25zLndpZHRoLCB0aGlzLmRpbWVuc2lvbnMuaGVpZ2h0KVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59Il0sIm5hbWVzIjpbIldhbGwiLCJDYXN0bGVTaWVnZSIsImNvbnN0cnVjdG9yIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsImRpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImRyYXdCYWNrZ3JvdW5kIiwid2FsbG9iaiIsImhlYWx0aCIsIndhbGwiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/health-bar.js":
/*!***********************************!*\
  !*** ./src/scripts/health-bar.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   currentHealth: function() { return /* binding */ currentHealth; }\n/* harmony export */ });\n\nfunction currentHealth(wallObject) {\n  const health = document.querySelector(\".health\");\n  health.style.width = `${wallObject.health}%`;\n  const newPTag = document.createElement(\"p\");\n  newPTag.innerText = `Wall Health: ${wallObject.health}%`;\n  newPTag.classList.add(\"health-indicator\");\n  if (health.children.length > 0) {\n    health.removeChild(health.children[0]);\n    health.appendChild(newPTag);\n  } else {\n    health.appendChild(newPTag);\n  }\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWFsdGgtYmFyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBcUI7QUFFckIsU0FBU0EsYUFBYUEsQ0FBQ0MsVUFBVSxFQUFFO0VBQy9CLE1BQU1DLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsU0FBUyxDQUFDO0VBQ2hERixNQUFNLENBQUNHLEtBQUssQ0FBQ0MsS0FBSyxHQUFJLEdBQUVMLFVBQVUsQ0FBQ0MsTUFBTyxHQUFFO0VBRTVDLE1BQU1LLE9BQU8sR0FBR0osUUFBUSxDQUFDSyxhQUFhLENBQUMsR0FBRyxDQUFDO0VBQzNDRCxPQUFPLENBQUNFLFNBQVMsR0FBSSxnQkFBZVIsVUFBVSxDQUFDQyxNQUFPLEdBQUU7RUFDeERLLE9BQU8sQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsa0JBQWtCLENBQUM7RUFDekMsSUFBSVQsTUFBTSxDQUFDVSxRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7SUFDNUJYLE1BQU0sQ0FBQ1ksV0FBVyxDQUFDWixNQUFNLENBQUNVLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0Q1YsTUFBTSxDQUFDYSxXQUFXLENBQUNSLE9BQU8sQ0FBQztFQUMvQixDQUFDLE1BQU07SUFDSEwsTUFBTSxDQUFDYSxXQUFXLENBQUNSLE9BQU8sQ0FBQztFQUMvQjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FzdGxlLXNpZWdlLy4vc3JjL3NjcmlwdHMvaGVhbHRoLWJhci5qcz81NzQ0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7Y3VycmVudEhlYWx0aH1cclxuXHJcbmZ1bmN0aW9uIGN1cnJlbnRIZWFsdGgod2FsbE9iamVjdCkge1xyXG4gICAgY29uc3QgaGVhbHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFsdGhcIilcclxuICAgIGhlYWx0aC5zdHlsZS53aWR0aCA9IGAke3dhbGxPYmplY3QuaGVhbHRofSVgXHJcblxyXG4gICAgY29uc3QgbmV3UFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICBuZXdQVGFnLmlubmVyVGV4dCA9IGBXYWxsIEhlYWx0aDogJHt3YWxsT2JqZWN0LmhlYWx0aH0lYFxyXG4gICAgbmV3UFRhZy5jbGFzc0xpc3QuYWRkKFwiaGVhbHRoLWluZGljYXRvclwiKVxyXG4gICAgaWYgKGhlYWx0aC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgaGVhbHRoLnJlbW92ZUNoaWxkKGhlYWx0aC5jaGlsZHJlblswXSlcclxuICAgICAgICBoZWFsdGguYXBwZW5kQ2hpbGQobmV3UFRhZylcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhbHRoLmFwcGVuZENoaWxkKG5ld1BUYWcpXHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbImN1cnJlbnRIZWFsdGgiLCJ3YWxsT2JqZWN0IiwiaGVhbHRoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwic3R5bGUiLCJ3aWR0aCIsIm5ld1BUYWciLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/health-bar.js\n");

/***/ }),

/***/ "./src/scripts/power-bar.js":
/*!**********************************!*\
  !*** ./src/scripts/power-bar.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PowerBar; }\n/* harmony export */ });\nclass PowerBar {\n  constructor() {\n    this.power = this.oscillate();\n    // this.oscillate = this.oscillate.bind(this)\n    this.currentPower(this.power);\n  }\n  currentPower(power) {\n    const powerBar = document.querySelector(\".power\");\n    powerBar.style.height = `${power}%`;\n    const newPTag = document.createElement(\"p\");\n    newPTag.innerText = `Power`;\n    newPTag.classList.add(\"power-indicator\");\n    if (powerBar.children.length > 0) {\n      powerBar.removeChild(powerBar.children[0]);\n      powerBar.appendChild(newPTag);\n    } else {\n      powerBar.appendChild(newPTag);\n    }\n  }\n  oscillate() {\n    let random = Math.random() * 100;\n  }\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9wb3dlci1iYXIuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLE1BQU1BLFFBQVEsQ0FBQztFQUMxQkMsV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsSUFBSSxDQUFDQyxLQUFLLEdBQUcsSUFBSSxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUM3QjtJQUNBLElBQUksQ0FBQ0MsWUFBWSxDQUFDLElBQUksQ0FBQ0YsS0FBSyxDQUFDO0VBQ2pDO0VBRUFFLFlBQVlBLENBQUNGLEtBQUssRUFBRTtJQUNoQixNQUFNRyxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLFFBQVEsQ0FBQztJQUNqREYsUUFBUSxDQUFDRyxLQUFLLENBQUNDLE1BQU0sR0FBSSxHQUFFUCxLQUFNLEdBQUU7SUFFbkMsTUFBTVEsT0FBTyxHQUFHSixRQUFRLENBQUNLLGFBQWEsQ0FBQyxHQUFHLENBQUM7SUFDM0NELE9BQU8sQ0FBQ0UsU0FBUyxHQUFJLE9BQU07SUFDM0JGLE9BQU8sQ0FBQ0csU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUM7SUFDeEMsSUFBSVQsUUFBUSxDQUFDVSxRQUFRLENBQUNDLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDOUJYLFFBQVEsQ0FBQ1ksV0FBVyxDQUFDWixRQUFRLENBQUNVLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMxQ1YsUUFBUSxDQUFDYSxXQUFXLENBQUNSLE9BQU8sQ0FBQztJQUNqQyxDQUFDLE1BQU07TUFDSEwsUUFBUSxDQUFDYSxXQUFXLENBQUNSLE9BQU8sQ0FBQztJQUNqQztFQUNKO0VBRUFQLFNBQVNBLENBQUEsRUFBRztJQUNSLElBQUlnQixNQUFNLEdBQUdDLElBQUksQ0FBQ0QsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHO0VBRXBDO0FBQ0o7QUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Nhc3RsZS1zaWVnZS8uL3NyYy9zY3JpcHRzL3Bvd2VyLWJhci5qcz81NGMxIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvd2VyQmFyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucG93ZXIgPSB0aGlzLm9zY2lsbGF0ZSgpXHJcbiAgICAgICAgLy8gdGhpcy5vc2NpbGxhdGUgPSB0aGlzLm9zY2lsbGF0ZS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5jdXJyZW50UG93ZXIodGhpcy5wb3dlcilcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50UG93ZXIocG93ZXIpIHtcclxuICAgICAgICBjb25zdCBwb3dlckJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucG93ZXJcIilcclxuICAgICAgICBwb3dlckJhci5zdHlsZS5oZWlnaHQgPSBgJHtwb3dlcn0lYFxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgbmV3UFRhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXHJcbiAgICAgICAgbmV3UFRhZy5pbm5lclRleHQgPSBgUG93ZXJgXHJcbiAgICAgICAgbmV3UFRhZy5jbGFzc0xpc3QuYWRkKFwicG93ZXItaW5kaWNhdG9yXCIpXHJcbiAgICAgICAgaWYgKHBvd2VyQmFyLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcG93ZXJCYXIucmVtb3ZlQ2hpbGQocG93ZXJCYXIuY2hpbGRyZW5bMF0pXHJcbiAgICAgICAgICAgIHBvd2VyQmFyLmFwcGVuZENoaWxkKG5ld1BUYWcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG93ZXJCYXIuYXBwZW5kQ2hpbGQobmV3UFRhZylcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBvc2NpbGxhdGUoKSB7XHJcbiAgICAgICAgbGV0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAxMDBcclxuICAgICAgICBcclxuICAgIH1cclxufTsiXSwibmFtZXMiOlsiUG93ZXJCYXIiLCJjb25zdHJ1Y3RvciIsInBvd2VyIiwib3NjaWxsYXRlIiwiY3VycmVudFBvd2VyIiwicG93ZXJCYXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImhlaWdodCIsIm5ld1BUYWciLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2hpbGRyZW4iLCJsZW5ndGgiLCJyZW1vdmVDaGlsZCIsImFwcGVuZENoaWxkIiwicmFuZG9tIiwiTWF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/power-bar.js\n");

/***/ }),

/***/ "./src/scripts/wall.js":
/*!*****************************!*\
  !*** ./src/scripts/wall.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Wall; }\n/* harmony export */ });\nclass Wall {\n  constructor(wallObject, ctx) {\n    this.ctx = ctx;\n    this.width = wallObject.width;\n    this.height = wallObject.height;\n    this.health = wallObject.health;\n  }\n}\n;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy93YWxsLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZSxNQUFNQSxJQUFJLENBQUM7RUFDdEJDLFdBQVdBLENBQUNDLFVBQVUsRUFBRUMsR0FBRyxFQUFFO0lBQ3pCLElBQUksQ0FBQ0EsR0FBRyxHQUFHQSxHQUFHO0lBQ2QsSUFBSSxDQUFDQyxLQUFLLEdBQUdGLFVBQVUsQ0FBQ0UsS0FBSztJQUM3QixJQUFJLENBQUNDLE1BQU0sR0FBR0gsVUFBVSxDQUFDRyxNQUFNO0lBQy9CLElBQUksQ0FBQ0MsTUFBTSxHQUFHSixVQUFVLENBQUNJLE1BQU07RUFDbkM7QUFDSjtBQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2FzdGxlLXNpZWdlLy4vc3JjL3NjcmlwdHMvd2FsbC5qcz82MGNkIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFdhbGwge1xyXG4gICAgY29uc3RydWN0b3Iod2FsbE9iamVjdCwgY3R4KSB7XHJcbiAgICAgICAgdGhpcy5jdHggPSBjdHg7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdhbGxPYmplY3Qud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB3YWxsT2JqZWN0LmhlaWdodDtcclxuICAgICAgICB0aGlzLmhlYWx0aCA9IHdhbGxPYmplY3QuaGVhbHRoO1xyXG4gICAgfVxyXG59OyJdLCJuYW1lcyI6WyJXYWxsIiwiY29uc3RydWN0b3IiLCJ3YWxsT2JqZWN0IiwiY3R4Iiwid2lkdGgiLCJoZWlnaHQiLCJoZWFsdGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/wall.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYXN0bGUtc2llZ2UvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;