class Player{
    constructor(){
    this.name = null;
    }
    getCount(){
        var playerCountref = database.ref('playerCount');
        playerCountref.on("value",(data)=>{
            playerCount = data.val();

        });
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
        var playerIndex = "player"+playerCount;
        database.ref(playerIndex).set({
            name:this.name
        })
    }
}