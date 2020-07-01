const Game = require('./game.js');
const GameView = require('./game_view.js');


document.addEventListener("DOMContentLoaded", function (){
    const canvasEl = document.getElementById("game-canvas");
    canvasEl.width = Game.DIM_X;
    canvasEl.height = Game.DIM_Y;
    const ctx = canvasEl.getContext("2d");
    
    const game = new Game();
    new GameView(game, ctx).start(ctx);

    // const test = new MovingObejct({
    //     pos: [30, 30],
    //     vel: [10, 10],
    //     radius: 5,
    //     color: "#00FF00"
    // });

    // const ast = new Asteroid({
    //     pos: [200,200],
    //     vel: [1, 1]
    // })
    // test.draw(ctx);
    // ast.draw(ctx);
    
})

console.log("webpack is working!");