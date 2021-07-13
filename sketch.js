var canvas,backgroundImage,database;
var gameState = 0;
var playerCount;
var form,player,game
function setup(){
    database=firebase.database();
    canvas = createCanvas(400,400);
    game = new Game();
    game.getState();
    game.Start();
    //ball = createSprite(250,250,10,10);
    //ball.shapeColor = "red";

    //var ballposition = database.ref('ball/position');
    //ballposition.on("value",readposition,showerror);
}

function draw(){
    background("white");
    drawSprites();
    if(playerCount == 4){
        game.update(1);
    }
    if(gameState === 1){
        clear();
        game.play();
    }
}