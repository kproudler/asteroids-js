/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nconst Defaults = {\n    color: \"#ededed\",\n    radius: 25\n}\n\n\nfunction Asteroid(options) {\n    options.color = Defaults.color;\n    options.radius = Defaults.radius;\n    options.pos = options.pos;\n    options.vel = options.vel;\n    \n    MovingObject.call(this, options);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nAsteroid.prototype.collideWith = function collideWith(otherObject) {\n    if (otherObject instanceof Ship) {\n        otherObject.relocate();\n        return true;\n    } else if (otherObject instanceof Bullet) {\n        this.remove();\n        otherObject.remove();\n        return true;\n    }\n    return false;\n};\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\nfunction Game() {\n    this.asteroids = [];\n\n    this.addAsteroids();\n}\n\nGame.DIM_X = 1280;\nGame.DIM_Y = 720;\nGame.NUM_ASTEROIDS = 10;\nGame.BG_COLOR = \"#000000\";\n\nGame.prototype.addAsteroids = function addAsteroids() {\n    for (i = 1; i <= Game.NUM_ASTEROIDS; i++) {\n        this.asteroids.push(new Asteroid(this.randomPosition));\n        // let tempAst = new Asteroid(this.randomPosition);\n        // this.asteroids.push(tempAst);\n    }\n};\n\nGame.prototype.randomPosition = function randomPosition() {\n    return [\n        Game.DIM_X * Math.random(),\n        Game.DIM_Y * Math.random()\n    ];\n};\n\nGame.prototype.allObjects = function allObjects() {\n    return [].concat(this.asteroids);\n};\n\nGame.prototype.draw = function draw(ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    ctx.fillStyle = Game.BG_COLOR;\n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n    this.allObjects().forEach(function (object) {\n        object.draw(ctx);\n    });\n};\n\nGame.prototype.moveObjects = function moveObjects() {\n    \n    for (i = 0; i < this.asteroids.length; i++) {\n        this.asteroid[i].move();\n    }\n};\n\nmodule.exports = Game\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\nfunction GameView(game, ctx) {\n    this.game = game;\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function start(ctx) {\n    intervalDraw = setInterval(Game.prototype.draw(ctx), 20)\n    intervalMove = setInterval(Game.prototype.moveObjects(), 20)\n}\n\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\n\n\ndocument.addEventListener(\"DOMContentLoaded\", function (){\n    const canvasEl = document.getElementById(\"game-canvas\");\n    canvasEl.width = Game.DIM_X;\n    canvasEl.height = Game.DIM_Y;\n    const ctx = canvasEl.getContext(\"2d\");\n    \n    const game = new Game();\n    new GameView(game, ctx).start(ctx);\n\n    // const test = new MovingObejct({\n    //     pos: [30, 30],\n    //     vel: [10, 10],\n    //     radius: 5,\n    //     color: \"#00FF00\"\n    // });\n\n    // const ast = new Asteroid({\n    //     pos: [200,200],\n    //     vel: [1, 1]\n    // })\n    // test.draw(ctx);\n    // ast.draw(ctx);\n    \n})\n\nconsole.log(\"webpack is working!\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function MovingObject(options){\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n    this.color = options.color;\n}\n\nMovingObject.prototype.draw = function draw(ctx) {\n    ctx.fillStyle = this.color;\n\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function move() {\n    this.pos = [this.pos[0] + this.vel, this.pos[1] + this.vel];\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const Util = {\n\n    inherits(childClass, parentClass){\n        childClass.prototype = Object.create(parentClass.prototype);\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n}\n\n\n\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });