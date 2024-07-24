/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/game.js":
/*!*************************!*\
  !*** ./scripts/game.js ***!
  \*************************/
/***/ ((module) => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n    this.userInput = \"\";\n    this.computerInput = \"\";\n  }\n  return _createClass(Game, [{\n    key: \"getComputerChoice\",\n    value: function getComputerChoice() {\n      var list = [\"rock\", \"paper\", \"scissors\"];\n      var result = Math.floor(Math.random() * list.length);\n      this.computerInput = list[result];\n      return this.computerInput;\n    }\n  }, {\n    key: \"getUserChoice\",\n    value: function getUserChoice(input) {\n      var list = [\"rock\", \"paper\", \"scissors\"];\n      if (list.includes(input)) {\n        this.userInput = input;\n        return this.userInput.toLowerCase();\n      } else {\n        return \"Invalid entry, Try Again\";\n      }\n    }\n  }, {\n    key: \"playRound\",\n    value: function playRound(playerSelection, computerSelection) {\n      if (playerSelection === \"rock\" && computerSelection === \"rock\") {\n        return \"It's a tie\";\n      } else if (playerSelection === \"rock\" && computerSelection === \"paper\") {\n        return \"You lose! Paper beats rock\";\n      } else if (playerSelection === \"rock\" && computerSelection === \"scissors\") {\n        return \"You win! Rock beats scissors\";\n      } else if (playerSelection === \"paper\" && computerSelection === \"rock\") {\n        return \"You win! Paper beats rock\";\n      } else if (playerSelection === \"paper\" && computerSelection === \"paper\") {\n        return \"It's a tie\";\n      } else if (playerSelection === \"paper\" && computerSelection === \"scissors\") {\n        return \"You lose! Scissors beats paper\";\n      } else if (playerSelection === \"scissors\" && computerSelection === \"rock\") {\n        return \"You lose! Rock beats scissors\";\n      } else if (playerSelection === \"scissors\" && computerSelection === \"paper\") {\n        return \"You win! Scissors beats paper\";\n      } else if (playerSelection === \"scissors\" && computerSelection === \"scissors\") {\n        return \"It's a tie\";\n      } else {\n        return \"Invalid entry, Try Again\";\n      }\n    }\n  }, {\n    key: \"game\",\n    value: function game() {\n      var playerSelection = this.currentInput;\n      var computerSelection = this.computerInput;\n      var result = this.playRound(playerSelection, computerSelection);\n      return result;\n    }\n  }]);\n}();\nmodule.exports = {\n  Game: Game\n};\n\n//# sourceURL=webpack://rock-paper-scissors-game/./scripts/game.js?");

/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ./game */ \"./scripts/game.js\"),\n  Game = _require.Game;\nfunction createGame() {\n  var game = new Game();\n  return game;\n}\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  document.getElementById('submit').addEventListener('click', function (event) {\n    event.preventDefault();\n    var input = document.getElementById('rock-paper-scissors-input-user').value;\n    var game = createGame();\n    var result = game.getUserChoice(input);\n    if (result === 'Invalid entry, Try Again') {\n      document.getElementById('error-messages').innerText = result;\n      setTimeout(function () {\n        document.getElementById('error-messages').innerText = '';\n      }, 3000);\n      document.getElementById('rock-paper-scissors-input-computer').placeholder = '';\n    } else {\n      var computerAnswer = game.getComputerChoice();\n      document.getElementById('rock-paper-scissors-input-computer').placeholder = computerAnswer;\n    }\n  });\n});\n\n//# sourceURL=webpack://rock-paper-scissors-game/./scripts/script.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/script.js");
/******/ 	
/******/ })()
;