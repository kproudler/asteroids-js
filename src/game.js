const Asteroid = require('./asteroid.js');
const MobingObject = require('./moving_object.js');

function Game() {
    this.asteroids = [];

    this.addAsteroids();
}

Game.DIM_X = 1280;
Game.DIM_Y = 720;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function addAsteroids() {
    for (i = 1; i <= NUM_ASTEROIDS; i++) {
        let i = new Asteroid(this.randomPosition);
        this.asteroids.push(i);
    }
}

Game.prototype.randomPosition = function randomPosition() {
    return [
        Game.DIM_X * Math.random(),
        Game.DIM_Y * Math.random()
    ];
}

Game.prototype.draw = function draw(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(function(asteroid){
        asteroid.draw(ctx);
    })
}

Game.prototype.moveObjects = function moveObjects() {
    this.asteroids.forEach(function (asteroid) {
        asteroid.move();
    })
}

module.exports = Game