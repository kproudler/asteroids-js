const Game = require("./game");

function GameView(game, ctx) {
    this.game = game;
    this.ctx = ctx;
}

GameView.prototype.start = function start(ctx) {
    intervalDraw = setInterval(Game.prototype.draw(ctx), 20)
    intervalMove = setInterval(Game.prototype.moveObjects(), 20)
}


module.exports = GameView;