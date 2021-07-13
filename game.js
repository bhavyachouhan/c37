class Game{
    constructor(){

    }
    getState(){
        var gameStateref = database.ref('gameState');
        gameStateref.on("value",function(data){
        gameState = data.val();
        })
    }
    update(State){
    database.ref('/').update({
        gameState:State
    })
    }
    async Start(){
        if(gameState === 0){
            player = new Player();
            var playerCountref = await database.ref('playerCount').once("value");
            if(playerCountref.exists()){
                playerCount = playerCountref.val();
                player.getCount();

            }
            //player.getCount();
            form = new Form();
            form.display();
        }
    }
    play(){
        form.hidedetails();
        textSize(30);
        text("game start",120,100)
    }
}