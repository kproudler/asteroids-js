const MovingObject = require('./moving_object.js');
const Util = require('./util.js');

const Defaults = {
    color: "#505050",
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

module.exports = Asteroid;