const Asteroid = require('./asteroid.js');
const Util = require('./util.js');

function Game() {
    this.asteroids = [];

    this.addAsteroids();
}

Game.DIM_X = 1280;
Game.DIM_Y = 720;
Game.NUM_ASTEROIDS = 10;
Game.BG_COLOR = "#000000";

Game.prototype.addAsteroids = function addAsteroids() {
    for (i = 1; i <= Game.NUM_ASTEROIDS; i++) {
        this.asteroids.push(new Asteroid(this.randomPosition));
        // let tempAst = new Asteroid(this.randomPosition);
        // this.asteroids.push(tempAst);
    }
};

Game.prototype.randomPosition = function randomPosition() {
    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ];
};

Game.prototype.allObjects = function allObjects() {
    return [].concat(this.asteroids);
};

Game.prototype.draw = function draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.allObjects().forEach(function (object) {
        object.draw(ctx);
    });
};

Game.prototype.moveObjects = function moveObjects() {
    
    for (i = 0; i < this.asteroids.length; i++) {
        this.asteroid[i].move();
    }
};

module.exports = Game