const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

const Defaults = {
    color: "#ededed",
    radius: 25
}


function Asteroid(options) {
    options.color = Defaults.color;
    options.radius = Defaults.radius;
    options.pos = options.pos;
    options.vel = options.vel;
    
    MovingObject.call(this, options);
}

Util.inherits(Asteroid, MovingObject);

Asteroid.prototype.collideWith = function collideWith(otherObject) {
    if (otherObject instanceof Ship) {
        otherObject.relocate();
        return true;
    } else if (otherObject instanceof Bullet) {
        this.remove();
        otherObject.remove();
        return true;
    }
    return false;
};

module.exports = Asteroid;