class Form{
    constructor(){
    this.input=createInput("name");
    this.button=createButton('play');
    this.greeting=createElement('h2');

    }
    hidedetails(){
        this.input.hide();
        this.greeting.hide();
        this.button.hide();
    }
    display(){
        var title = createElement('h2');
        title.html("car Racing Game");
        title.position(130,0);

        //var input = createInput("name");
        //var button = createButton('play');
        //var greeting = createElement('h3');
        this.input.position(130,100);
        this.button.position(250,100);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount +=1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("hello"+player.name);
            this.greeting.position(130,160);
        })
    }
}