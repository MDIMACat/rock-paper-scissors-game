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
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar _require = __webpack_require__(/*! ./helper_object */ \"./scripts/helper_object.js\"),\n  outcomeMessages = _require.outcomeMessages;\nvar Game = /*#__PURE__*/function () {\n  function Game() {\n    _classCallCheck(this, Game);\n    this.userInput = \"\";\n    this.computerInput = \"\";\n  }\n  return _createClass(Game, [{\n    key: \"getComputerChoice\",\n    value: function getComputerChoice() {\n      var list = [\"rock\", \"paper\", \"scissors\"];\n      var result = Math.floor(Math.random() * list.length);\n      this.computerInput = list[result];\n      return this.computerInput;\n    }\n  }, {\n    key: \"getUserChoice\",\n    value: function getUserChoice(input) {\n      var list = [\"rock\", \"paper\", \"scissors\"];\n      if (list.includes(input)) {\n        this.userInput = input;\n        return this.userInput.toLowerCase();\n      } else {\n        return \"Invalid entry, Try Again\";\n      }\n    }\n  }, {\n    key: \"playRound\",\n    value: function playRound(playerSelection, computerSelection) {\n      if (playerSelection === \"rock\" && computerSelection === \"rock\") {\n        return outcomeMessages.tie;\n      } else if (playerSelection === \"rock\" && computerSelection === \"paper\") {\n        return outcomeMessages.computerWin;\n      } else if (playerSelection === \"rock\" && computerSelection === \"scissors\") {\n        return outcomeMessages.playerWin;\n      } else if (playerSelection === \"paper\" && computerSelection === \"rock\") {\n        return outcomeMessages.playerWin;\n      } else if (playerSelection === \"paper\" && computerSelection === \"paper\") {\n        return outcomeMessages.tie;\n      } else if (playerSelection === \"paper\" && computerSelection === \"scissors\") {\n        return outcomeMessages.computerWin;\n      } else if (playerSelection === \"scissors\" && computerSelection === \"rock\") {\n        return outcomeMessages.computerWin;\n      } else if (playerSelection === \"scissors\" && computerSelection === \"paper\") {\n        return outcomeMessages.playerWin;\n      } else if (playerSelection === \"scissors\" && computerSelection === \"scissors\") {\n        return outcomeMessages.tie;\n      } else {\n        return \"Invalid entry, Try Again\";\n      }\n    }\n  }]);\n}();\nmodule.exports = {\n  Game: Game\n};\n\n//# sourceURL=webpack://rock-paper-scissors-game/./scripts/game.js?");

/***/ }),

/***/ "./scripts/helper_object.js":
/*!**********************************!*\
  !*** ./scripts/helper_object.js ***!
  \**********************************/
/***/ ((module) => {

eval("var outcomeMessages = {\n  computerWin: \"Computer wins!\",\n  playerWin: \"Player wins!\",\n  tie: \"It's a tie!\"\n};\nmodule.exports = {\n  outcomeMessages: outcomeMessages\n};\n\n//# sourceURL=webpack://rock-paper-scissors-game/./scripts/helper_object.js?");

/***/ }),

/***/ "./scripts/script.js":
/*!***************************!*\
  !*** ./scripts/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ./game */ \"./scripts/game.js\"),\n  Game = _require.Game;\nvar _require2 = __webpack_require__(/*! ./helper_object */ \"./scripts/helper_object.js\"),\n  outcomeMessages = _require2.outcomeMessages;\nfunction createGame() {\n  var game = new Game();\n  return game;\n}\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  document.getElementById('submit').addEventListener('click', function (event) {\n    event.preventDefault();\n    var computerScore = 0;\n    var userScore = 0;\n    var input = document.getElementById('rock-paper-scissors-input-user').value;\n    var game = createGame();\n    var result = game.getUserChoice(input);\n    if (result === 'Invalid entry, Try Again') {\n      document.getElementById('error-messages').innerText = result;\n      setTimeout(function () {\n        document.getElementById('error-messages').innerText = '';\n      }, 3000);\n      document.getElementById('rock-paper-scissors-input-computer').placeholder = '';\n    } else {\n      var computerAnswer = game.getComputerChoice();\n      document.getElementById('rock-paper-scissors-input-computer').placeholder = computerAnswer;\n      var gameResult = game.playRound(result, computerAnswer);\n      if (gameResult === outcomeMessages.computerWin) {\n        var currentPoints = document.getElementById('computer-score').innerText;\n        computerScore = parseInt(currentPoints) + 1;\n        document.getElementById('computer-score').innerText = computerScore;\n      } else if (gameResult === outcomeMessages.playerWin) {\n        var _currentPoints = document.getElementById('user-score').innerText;\n        userScore = parseInt(_currentPoints) + 1;\n        document.getElementById('user-score').innerText = userScore;\n      } else {\n        document.getElementById('error-messages').innerText = gameResult;\n        setTimeout(function () {\n          document.getElementById('error-messages').innerText = '';\n        }, 3000);\n      }\n    }\n  });\n});\ndocument.addEventListener('DOMContentLoaded', function (event) {\n  document.getElementById('reset').addEventListener('click', function (event) {\n    event.preventDefault();\n    document.getElementById('user-score').innerText = 0;\n    document.getElementById('computer-score').innerText = 0;\n    document.getElementById('rock-paper-scissors-input-user').value = '';\n    document.getElementById('rock-paper-scissors-input-computer').placeholder = '';\n  });\n});\n\n//# sourceURL=webpack://rock-paper-scissors-game/./scripts/script.js?");

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